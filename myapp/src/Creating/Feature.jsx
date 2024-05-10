import React, { useState } from "react";
import Update from "./Update";

const Feature = ({ isEdit, feature }) => {
  return (
    <div className="max-w-[150px] bg-[#181818] rounded-3xl absolute text-[15px] left-[-150px]">
      <div className="full">
        <ul>
          <div className="w-[150px] h-[46px] flex flex-col justify-center border-b-[1px] border-b-[#514a4a]">
            <li
              className="p-5"
              onClick={() => {
                isEdit(true);
                feature(false);
              }}
            >
              Edit
            </li>
          </div>
          <div className="w-[150px] h-[46px] flex flex-col justify-center border-b-[1px] border-b-[#514a4a]">
            <li className="p-5">Pin to profile</li>
          </div>
          <div className="w-[150px] h-[46px] flex flex-col justify-center border-b-[1px] border-b-[#514a4a]">
            <li className="p-5">Who can reply</li>
          </div>
          <div className="w-[150px] h-[46px] flex flex-col justify-center cursor-pointer">
            <li className="p-5 text-red-700">Delete</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Feature;
