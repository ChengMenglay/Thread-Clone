import React, { useState } from "react";
import Feature from "../Creating/Feature";
import {
  HeartOutlined,
  CommentOutlined,
  RetweetOutlined,
  SendOutlined,
  HeartFilled,
  SmallDashOutlined,
} from "@ant-design/icons";
import Update from "../Creating/Update";
import More from "../Creating/More";
const Posted = ({
  userId,
  id,
  userIdPost,
  firstname,
  lastname,
  profile_image,
  posted_image,
  posted_description,
}) => {
  const [like, setlike] = useState(0);
  const [fillHeart, setFillHeart] = useState(false);
  const [feature, setFeature] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-[572px] py-3 px-3 border-b-[1px] border-b-[#514a4a]">
      {isEdit ? (
        <Update
          posting_id={id}
          firstname={firstname}
          lastname={lastname}
          profile_image={profile_image}
          posted_description={posted_description}
          posted_image={posted_image}
          setIsEdit={setIsEdit}
        />
      ) : null}
      <div className="max-w-full flex justify-between">
        <div className="flex items-center">
          <img
            src={profile_image}
            alt="profile"
            className="w-[30px] h-[30px] rounded-full object-cover"
          />
          <h1 className="font-bold mx-3">{firstname + " " + lastname}</h1>
        </div>
        <div className="text-2xl font-bold cursor-pointer relative">
          <SmallDashOutlined onClick={() => setFeature(!feature)} />
          {feature ? (
            userId == userIdPost ? (
              <Feature
                id={id}
                firstname={firstname}
                lastname={lastname}
                profile_image={profile_image}
                posted_image={posted_image}
                posted_description={posted_description}
                isEdit={setIsEdit}
                feature={setFeature}
              />
            ) : (
              <More />
            )
          ) : null}
        </div>
      </div>
      <div className="mx-11">
        <span>{posted_description}</span>
      </div>
      <div className="mx-11 mt-3">
        {posted_image == null || posted_image == "" ? null : (
          <img
            src={"http://localhost/project/image_2/" + posted_image}
            className="w-[300px] rounded-lg "
          />
        )}
      </div>
      <div>
        <ul className="flex text-[22px] mx-9 mt-3 ">
          <li
            className=" cursor-pointer w-[40px] h-[40px] flex justify-center items-center rounded-2xl hover:hover:bg-[#2d2c2c]"
            onClick={() => {
              setFillHeart(!fillHeart);
              if (!fillHeart) {
                setlike(like + 1);
              } else {
                setlike(like - 1);
              }
            }}
          >
            {fillHeart ? <HeartFilled /> : <HeartOutlined />}
          </li>
          <li className=" cursor-pointer w-[40px] h-[40px] flex justify-center items-center rounded-2xl hover:hover:bg-[#2d2c2c]">
            <CommentOutlined />
          </li>
          <li className=" cursor-pointer w-[40px] h-[40px] flex justify-center items-center rounded-2xl hover:hover:bg-[#2d2c2c]">
            <RetweetOutlined />
          </li>
          <li className=" cursor-pointer w-[40px] h-[40px] flex justify-center items-center rounded-2xl hover:hover:bg-[#2d2c2c]">
            <SendOutlined />
          </li>
        </ul>
        <span className="mx-12 text-[#777777]">{like} likes</span>
      </div>
    </div>
  );
};

export default Posted;
