import React, { useEffect, useState, useRef } from "react";
import { request } from "../helper/request";
import { Form, useNavigate } from "react-router-dom";
import { message, Upload } from "antd";
import imageupload from "../assets/imageupload.png";
const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [imagefile, setImageFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);
  useEffect(() => {
    if (!imagefile) {
      setPreview(null);
      return;
    }
    const objURL = URL.createObjectURL(imagefile);
    setPreview(objURL);
  }, [imagefile]);
  const OnSignup = async () => {
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", username);
    formData.append("password", password);
    formData.append("confirmpassword", confirmpassword);
    formData.append("imagefile", imagefile);
    const res = await request("api/system/signup", "post", formData);
    if (firstname == null || firstname == "") {
      message.info("Please fill in your firstname");
      return false;
    }
    if (lastname == null || lastname == "") {
      message.info("Please fill in your lastname");
      return false;
    }
    if (username == null || username == "") {
      message.info("Please fill in your password");
      return false;
    }
    if (password == null || password == "") {
      message.info("Please fill in your password");
      return false;
    }
    if (confirmpassword != password) {
      message.info("Password Not match");
      return false;
    }
    if (!imagefile) {
      message.info("Please Upload Image");
      return false;
    }

    if (!res.error) {
      message.success("SignUp Success");
      localStorage.setItem("profile", JSON.stringify(res));
      navigate("/");
    } else {
      message.error("Email was define!");
      return false;
    }
  };
  const config = {
    url: "http://localhost/project/image_2/",
  };
  return (
    <div className="mt-10">
      {/* <img
        alt=""
        src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/YVr3E4VYzmE.png"
        className="w-full xl:h-[300px] lg:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] object-cover  mx-auto"
      /> */}
      <div className="max-w-[400px] h-[450px] mx-auto p-5">
        <p className="text-center font-bold text-white text-2xl mb-10">
          SignUp Account
        </p>
        <div
          onClick={() => inputRef.current.click()}
          className="flex flex-col items-center mt-3"
        >
          <img
            src={imagefile ? preview : imageupload}
            className="bg-white w-[150px] rounded-xl"
            alt=""
          />
          <input
            type="file"
            ref={inputRef}
            onChange={(e) => setImageFile(e.target.files[0])}
            className="hidden"
          />
        </div>
        <input
          className="w-full mt-5 h-[50px] rounded-xl p-5 text-md bg-[#1e1e1e] text-white outline-none  focus:outline-[#514a4a] duration-200 placeholder-[#514a4a]"
          type="text"
          value={firstname}
          placeholder="Firstname"
          onChange={(e) => setfirstname(e.target.value)}
        />
        <input
          className="w-full mt-5 h-[50px] rounded-xl p-5 text-md bg-[#1e1e1e] text-white outline-none  focus:outline-[#514a4a] duration-200 placeholder-[#514a4a]"
          type="text"
          value={lastname}
          placeholder="Lastname"
          onChange={(e) => setlastname(e.target.value)}
        />
        <input
          className="w-full mt-5 h-[50px] rounded-xl p-5 text-md bg-[#1e1e1e] text-white outline-none  focus:outline-[#514a4a] duration-200 placeholder-[#514a4a]"
          type="text"
          value={username}
          placeholder="Email"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          className="w-full mt-3 h-[50px] rounded-xl p-5 text-md bg-[#1e1e1e] text-white outline-none  focus:outline-[#514a4a] duration-200 placeholder-[#514a4a]"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          className="w-full mt-3 h-[50px] rounded-xl p-5 text-md bg-[#1e1e1e] text-white outline-none  focus:outline-[#514a4a] duration-200 placeholder-[#514a4a]"
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e.target.value)}
        />
        <button
          className="w-full mt-5 h-[50px] rounded-xl text-md bg-[#1e1e1e] text-[rgba(233,233,233)] hover:bg-white hover:text-black duration-500"
          onClick={OnSignup}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default Signup;
