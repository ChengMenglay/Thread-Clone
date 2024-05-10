import { Image } from "antd";
import React, { useContext, useState } from "react";
import { Context } from "../Layout/Layout";
import Posted from "../Hero/Posted";
const Profile = () => {
  const { userId, firstname, lastname, profile_image, posting } =
    useContext(Context);
  const [activeThread, setActiveThread] = useState(true);
  const [activReplies, setActivReplies] = useState(false);
  const [activeReports, setActiveReports] = useState(false);
  const filterPosting = posting.filter((e) => e.user_id == userId);
  return (
    <div className="max-w-[620px] h-full text-white mx-auto px-5">
      <div className="w-full h-[126px] bg-[#101010]">
        <div className="w-full h-[84px]  flex justify-between items-center">
          <h1 className="text-2xl font-bold ">{firstname + " " + lastname}</h1>
          <Image
            src={profile_image}
            alt="profile"
            width={70}
            height={70}
            className="rounded-full object-cover"
          />
        </div>
        <div className="w-full h-[24px] flex items-center">
          <span className="text-[#777777] text-[15px] flex items-center">
            <img
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              className="w-[22px] h-[22px] rounded-full "
            />
            <span className=" ml-2">12 follower</span>
          </span>
        </div>
      </div>
      <div className="w-full h-[34px] my-7">
        <button className="w-full h-full border border-[#777777] rounded-[10px] font-bold">
          Edit Profile
        </button>
      </div>
      <div className="w-full h-[48px] flex justify-between">
        <button
          className={
            activeThread
              ? "w-full h-full border-b-[0.2px]  border-b-[#fff] text-[#fff]"
              : "w-full h-full border-b-[0.2px]  border-b-[#777777] text-[#777777]"
          }
          onClick={() => {
            setActiveThread(true);
            setActiveReports(false);
            setActivReplies(false);
          }}
        >
          Treads
        </button>
        <button
          className={
            activReplies
              ? "w-full h-full border-b-[0.2px]  border-b-[#fff] text-[#fff]"
              : "w-full h-full border-b-[0.2px]  border-b-[#777777] text-[#777777]"
          }
          onClick={() => {
            setActiveThread(false);
            setActiveReports(false);
            setActivReplies(true);
          }}
        >
          Replies
        </button>
        <button
          className={
            activeReports
              ? "w-full h-full border-b-[0.2px]  border-b-[#fff] text-[#fff]"
              : "w-full h-full border-b-[0.2px]  border-b-[#777777] text-[#777777]"
          }
          onClick={() => {
            setActiveThread(false);
            setActiveReports(true);
            setActivReplies(false);
          }}
        >
          Reposts
        </button>
      </div>
      <div className="w-full min-h-[559px] flex items-center justify-center mt-5">
        <div className="w-full text-[15px]">
          {activeThread && posting
            ? filterPosting.map((i) => (
                <Posted
                  key={i.id}
                  id={i.id}
                  firstname={i.firstname}
                  lastname={i.lastname}
                  profile_image={profile_image}
                  posted_description={i.description}
                  posted_image={i.image_posting}
                />
              ))
            : null}
          {activReplies ? "No Reply yet" : null}
          {activeReports ? "No Report yet" : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;
