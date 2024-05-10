import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Barbox = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("profile");
    navigate("/login");
  };
  return (
    <div className="max-w-[200px] bg-[#181818] rounded-3xl absolute left-[-140px] top-[30px]">
      <div className="full">
        <ul>
          <div className="w-[174px] h-[46px] flex flex-col justify-center border-b-[1px] border-b-[#514a4a]">
            <li className="p-5">Switch appearance</li>
          </div>
          <div className="w-[174px] h-[46px] flex flex-col justify-center border-b-[1px] border-b-[#514a4a]">
            <li className="p-5">Settings</li>
          </div>
          <div className="w-[174px] h-[46px] flex flex-col justify-center border-b-[1px] border-b-[#514a4a]">
            <li className="p-5">About</li>
          </div>
          <div className="w-[174px] h-[46px] flex flex-col justify-center border-b-[1px] border-b-[#514a4a]">
            <li className="p-5">Reporta problem</li>
          </div>
          <div
            className="w-[174px] h-[46px] flex flex-col justify-center cursor-pointer"
            onClick={onLogout}
          >
            <li className="p-5">Log out</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Barbox;
