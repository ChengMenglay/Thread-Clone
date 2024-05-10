import React from "react";

const More = () => {
  return (
    <div className="max-w-[150px] bg-[#181818] rounded-3xl absolute text-[15px] left-[-150px]">
      <div className="full">
        <ul>
          <div className="w-[150px] h-[46px] flex flex-col justify-center border-b-[1px] border-b-[#514a4a]">
            <li className="p-5">Unfollow</li>
          </div>
          <div className="w-[150px] h-[46px] flex flex-col justify-center border-b-[1px] border-b-[#514a4a]">
            <li className="p-5">Mute</li>
          </div>
          <div className="w-[150px] h-[46px] flex flex-col justify-center border-b-[1px] border-b-[#514a4a]">
            <li className="p-5">Hide</li>
          </div>
          <div className="w-[150px] h-[46px] flex flex-col justify-center ">
            <li className="p-5">Report</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default More;
