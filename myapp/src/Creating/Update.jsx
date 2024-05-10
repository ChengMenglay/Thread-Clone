import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Image, message } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import axios from "axios";
const Update = ({
  posting_id,
  firstname,
  lastname,
  profile_image,
  setIsEdit,
}) => {
  const [getOldData, setGetOldData] = useState({
    description: "",
    image_posting: "",
  });
  // const [updateDescription, setUpdateDescription] = useState();
  const [updateImage, setUpdateImage] = useState();
  const [previewImage, setPreviewImage] = useState();
  const inputRef = useRef();
  useEffect(() => {
    if (!updateImage) {
      setPreviewImage(null);
      return;
    } else {
      const objURL = URL.createObjectURL(updateImage.image_posting);
      setPreviewImage(objURL);
    }
  }, [updateImage]);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/api/posting/targetvalue",
      method: "post",
      data: { id: posting_id },
    })
      .then((res) => {
        setGetOldData({
          ...getOldData,
          description: res.data.data[0].description,
          image_posting: res.data.data[0].image_posting,
        });
      })
      .catch((error) => message.error(error));
  }, []);
  if (getOldData === undefined) {
    return <div>Loading...</div>;
  }
  const handleUpdate = async () => {
    const form_data = new FormData();
    form_data.append("id", posting_id);
    form_data.append("description", getOldData.description);
    if (updateImage) {
      form_data.append("image_posting", updateImage.image_posting);
    } else {
      console.log(getOldData.image_posting);
      form_data.append("image_posting", getOldData.image_posting);
    }
    const res = await axios({
      url: "http://localhost:8080/api/posting",
      method: "put",
      data: form_data,
    });
    if (res) {
      message.success("Update Success");
      setIsEdit(false);
    } else {
      return false;
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-black/70 duration-300 fixed left-0 top-0 z-10">
      <h1 className="text-center font-bold text-xl text-white">Edit</h1>
      <div className="xl:w-[620px] xl:h-[auto] lg:w-[620px] lg:h-[auto] md:w-[620px] md:h-[auto] sm:w-[620px] sm:h-[auto] w-full h-[100vh]  rounded-xl p-5 bg-[#181818] text-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <X
          className="fixed right-[30px] cursor-pointer"
          onClick={() => setIsEdit(false)}
        />
        <div className="w-full  flex flex-col justify-center">
          <div className="w-full flex">
            <Image
              src={profile_image}
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
                value={getOldData.description}
                placeholder="Start a thread..."
                className="text-white w-full h-auto bg-[#181818] resize-none  border-none outline-none"
                onChange={(e) =>
                  setGetOldData({ ...getOldData, description: e.target.value })
                }
              >
                {/* {getOldData.description} */}
              </textarea>
            </div>
          </div>

          <div className="w-full mx-12">
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              onChange={(e) =>
                setUpdateImage({
                  ...getOldData,
                  image_posting: e.target.files[0],
                })
              }
            />
            <div>
              {getOldData.image_posting ? (
                <img
                  width={200}
                  src={
                    previewImage
                      ? previewImage
                      : "http://localhost/project/image_2/" +
                        getOldData.image_posting
                  }
                  className="rounded-xl"
                  onClick={() => inputRef.current.click()}
                />
              ) : (
                <img
                  width={200}
                  src={previewImage ? previewImage : null}
                  className="rounded-xl"
                />
              )}
              <FileImageOutlined
                className="mt-5"
                onClick={() => inputRef.current.click()}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div></div>

          <button
            className="w-[60px] h-[40px] rounded-full bg-pink-700 font-bold text-black"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
