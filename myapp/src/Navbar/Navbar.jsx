import { Heart, Home, Menu, PenSquare, Search, UserRound } from "lucide-react";
import React, { useState, useContext } from "react";
import { Context } from "../Layout/Layout";
import logo from "../assets/vecteezy_threads-logo-png-threads-icon-transparent-png_28288607.png";
import Barbox from "../Creating/Barbox";
import Modal from "../Creating/Modal";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [togglebar, settogglebar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userId, firstname, lastname, profile_image } = useContext(Context);
  const navigate = useNavigate();
  return (
    <nav className="max-w-[1300px] mx-auto flex justify-between items-center ">
      <img src={logo} alt="logo" className="max-w-[80px]" />
      <div className="max-w-[620px]">
        <ul className="flex">
          <li
            className="w-[70px] h-[60px] mx-2 flex justify-center text-white items-center hover:bg-[#2d2c2c] duration-300 rounded-lg cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Home />
          </li>
          <li className="w-[70px] h-[60px] mx-2 flex justify-center text-white items-center hover:bg-[#2d2c2c] duration-300 rounded-lg cursor-pointer">
            <Search />
          </li>
          <li
            className="w-[70px] h-[60px] mx-2 flex justify-center text-white items-center hover:bg-[#2d2c2c] duration-300 rounded-lg cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <PenSquare />
          </li>
          <li className="w-[70px] h-[60px] mx-2 flex justify-center text-white items-center hover:bg-[#2d2c2c] duration-300 rounded-lg cursor-pointer">
            <Heart />
          </li>
          <li
            className="w-[70px] h-[60px] mx-2 flex justify-center text-white items-center hover:bg-[#2d2c2c] duration-300 rounded-lg cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <UserRound />
          </li>
        </ul>
      </div>
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
      <div className=" text-white relative">
        <Menu
          className=" cursor-pointer mr-5"
          onClick={() => settogglebar(!togglebar)}
        />
        {togglebar ? <Barbox /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
