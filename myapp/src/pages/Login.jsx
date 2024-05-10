import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../helper/request";
import { message } from "antd";
const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const userLogin = async () => {
    var data = { email: username, password: password };
    const res = await request("api/system/signin", "post", data);
    if (username == null || username == "") {
      message.info("Please fill in your email");
      return false;
    }
    if (password == null || password == "") {
      message.info("Please fill in your password");
      return false;
    }
    if (res) {
      if (res.error) {
        message.error(res.message);
        // return false;
      } else {
        localStorage.setItem("profile", JSON.stringify(res));
        navigate("/");
      }
    }
  };

  return (
    <div>
      <img
        alt=""
        src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/YVr3E4VYzmE.png"
        className="w-full xl:h-[350px] lg:h-[350px] md:h-[300px] sm:h-[250px] h-[200px] object-cover  mx-auto"
      ></img>
      <div className="max-w-[400px] h-[450px] mx-auto p-5">
        <p className="text-center font-bold text-white">
          Login with your old account
        </p>
        <input
          className="w-full mt-5 h-[50px] rounded-xl p-5 text-md bg-[#1e1e1e] text-white outline-none  focus:outline-[#514a4a] duration-200 placeholder-[#514a4a]"
          type="text"
          value={username}
          placeholder="Username, phone or email"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          className="w-full mt-3 h-[50px] rounded-xl p-5 text-md bg-[#1e1e1e] text-white outline-none  focus:outline-[#514a4a] duration-200 placeholder-[#514a4a]"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className="w-full h-[50px] mt-3 rounded-xl text-md bg-white text-gray-500"
          onClick={userLogin}
        >
          Login
        </button>
        <p className="text-center mt-5 text-[#514a4a] leading-[0.1em]">
          Forget password
        </p>
        <div className="container mt-5">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ flex: 1, backgroundColor: "#004D40", height: "1px" }}
            />
            <p style={{ margin: "0 10px" }}>Or</p>
            <div
              style={{ flex: 1, backgroundColor: "#004D40", height: "1px" }}
            />
          </div>
        </div>
        <button
          className="w-full mt-5 h-[50px] rounded-xl text-md bg-[#1e1e1e] text-[rgba(233,233,233)] hover:bg-white hover:text-black duration-500"
          onClick={() => navigate("/signup")}
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Login;
