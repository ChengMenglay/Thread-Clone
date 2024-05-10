import { FileImageOutlined } from "@ant-design/icons";
import { Hash, Vote, X } from "lucide-react";
import { Image, message } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { posting } from "../helper/request";
const Modal = ({
  userId,
  profile,
  firstname,
  lastname,
  isOpenModal,
  setIsOpenModal,
}) => {
  const inputRef = useRef(null);
  const [isImagePosting, setIsImagePosting] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    if (!isImagePosting) {
      setPreview(null);
      return;
    }
    const objURL = URL.createObjectURL(isImagePosting);
    setPreview(objURL);
  }, [isImagePosting]);
  const handleposting = async () => {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("image_posting", isImagePosting);
    formData.append("user_id", userId);
    if (isImagePosting == "" && description == "") {
      return null;
    }
    const res = await posting("api/posting", "post", formData);
    if (res) {
      localStorage.setItem("posting", JSON.stringify(res));
      setIsOpenModal(false);
    } else {
      message.error(error.message);
    }
    if (formData) {
      message.success("Post success");
    }
  };
  return (
    <>
      {isOpenModal ? (
        <div className="w-[100vw] h-[100vh] bg-black/60 duration-300 fixed top-0 left-0 z-10">
          <h1 className="text-center font-bold text-xl text-white">
            New Thread
          </h1>
          <div className="xl:w-[620px] xl:h-[auto] lg:w-[620px] lg:h-[auto] md:w-[620px] md:h-[auto] sm:w-[620px] sm:h-[auto] w-full h-[100vh]  rounded-xl p-5 bg-[#181818] text-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <X
              className="fixed right-[30px] cursor-pointer"
              onClick={() => setIsOpenModal(false)}
            />
            <div className="w-full  flex flex-col justify-center">
              <div className="w-full flex">
                <Image
                  src={profile}
                  alt="profile"
                  width={40}
                  height={35}
                  className="rounded-full object-cover "
                />
                <div className="w-full mx-3">
                  <span className="font-bold">
                    {firstname + " "}
                    {lastname}
                  </span>
                  <textarea
                    placeholder="Start a thread..."
                    value={description}
                    className="text-white w-full h-auto bg-[#181818] resize-none  border-none outline-none"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="w-full flex flex-col mx-12">
                {isImagePosting ? (
                  <Image
                    width={200}
                    src={isImagePosting ? preview : null}
                    className="rounded-xl"
                  />
                ) : null}

                <div className="w-full flex items-center mt-5">
                  <FileImageOutlined
                    onClick={() => inputRef.current.click()}
                    style={{ color: "gray", cursor: "pointer" }}
                  />
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={(e) => setIsImagePosting(e.target.files[0])}
                    className="hidden"
                  />
                  <Hash
                    style={{
                      color: "gray",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                    size={"20px"}
                  />
                  <Vote
                    style={{
                      color: "gray",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                    size={"20px"}
                  />
                </div>
                <textarea
                  readOnly
                  placeholder="Start a thread..."
                  className="text-white w-full h-[70px] py-5 bg-[#181818] resize-none  border-none outline-none cursor-not-allowed select-none placeholder-gray-600 "
                ></textarea>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div></div>
              {description || isImagePosting ? (
                <button
                  className="w-[60px] h-[40px] rounded-full bg-pink-700 font-bold text-black"
                  onClick={handleposting}
                >
                  Post
                </button>
              ) : (
                <button
                  className="w-[60px] h-[40px] rounded-full bg-pink-700 font-bold text-black cursor-not-allowed"
                  onClick={handleposting}
                >
                  Post
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
