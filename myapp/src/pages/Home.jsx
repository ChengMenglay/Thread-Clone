import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Layout/Layout";
import Posted from "../Hero/Posted";
import Modal from "../Creating/Modal";
import { Image } from "antd";
import axios from "axios";
const Home = () => {
  const { userId, firstname, lastname, profile_image } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDataPosting, setIsDataPosting] = useState([]);
  const config = {
    url: "http://localhost/project/image_2/",
  };
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/posting",
      data: {},
    })
      .then((res) => setIsDataPosting(res.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="max-w-[620px] bg-[#101010] text-[#f3f5f7] mx-auto">
        <div className="max-w-[572px] h-[70px] bg-[#101010] flex justify-between items-center border-b-[1px] border-b-[#514a4a]">
          <div className="flex items-center">
            <Image
              src={profile_image}
              alt="profile"
              width={35}
              height={35}
              className="rounded-full object-cover"
            />
            <div
              className="flex flex-col mx-5"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="font-bold">
                {firstname + " "}
                {lastname}
              </span>
              <span className="text-[#777777]">Start a thread...</span>
            </div>
          </div>
          <button className="w-[60px] h-[40px] rounded-full bg-pink-700 font-bold text-black cursor-not-allowed">
            Post
          </button>
        </div>
        {isDataPosting.map((e, index) => (
          <Posted
            key={index}
            id={e.id}
            userId={userId}
            userIdPost={e.user_id}
            firstname={e.firstname}
            lastname={e.lastname}
            profile_image={config.url + e.profile_image}
            posted_image={e.image_posting}
            posted_description={e.description}
          />
        ))}
        {isModalOpen ? (
          <Modal
            userId={userId}
            profile={profile_image}
            firstname={firstname}
            lastname={lastname}
            isOpenModal={isModalOpen}
            setIsOpenModal={setIsModalOpen}
          />
        ) : null}
      </div>
    </>
  );
};

export default Home;
