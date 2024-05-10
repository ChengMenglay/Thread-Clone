import React, { useEffect, useState, createContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
export const Context = createContext();
const Layout = () => {
  const navigate = useNavigate();
  var profile = localStorage.getItem("profile");
  if (profile != null) {
    profile = JSON.parse(profile);
  } else {
    useEffect(() => {
      navigate("/login");
    }, [profile]);
  }
  if (profile == null) {
    return null;
  }
  var post = localStorage.getItem("posting");
  if (post != null) {
    post = JSON.parse(post);
  } else {
    useEffect(() => {
      navigate("/");
    }, [post]);
  }
  if (post == null) {
    return null;
  }
  const userId = profile.data[0].id;
  const firstname = profile.data[0].firstname;
  const lastname = profile.data[0].lastname;
  const config = {
    url: "http://localhost/project/image_2/",
  };
  const profile_image = config.url + profile.data[0].profile_image;
  const posting = post.data;
  return (
    <Context.Provider
      value={{
        userId,
        firstname,
        lastname,
        profile_image,
        posting,
      }}
    >
      <Navbar />
      <Outlet />
    </Context.Provider>
  );
};

export default Layout;
