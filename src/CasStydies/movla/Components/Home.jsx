import React from "react";
import logo from "../Assets/iPhone 14 Pro Space Black Mockup label.png";
import main from "../Assets/Group 342.png";
import btn from "../Assets/Button.png";
import btn1 from "../Assets/Button (1).png";
import { ScrollRestoration } from "react-router-dom";
const Home = () => {
  return (
    <div className=" pb-80 pt-20">
      <ScrollRestoration />
      <div className=" md:flex block  justify-between items-center gap-24 mx-24 md:pt-0 pt-16 ">
        <div className=" ">
          <img className=" w-[131px]" src={logo} alt="logo" />
          <p className=" md:w-[374px] rounded-md mt-4 py-2 px-5 md:text-[35px] text-[29px] font-[500] text-[#B99762] bg-[#f0e7d9]">
            Project Case Study
          </p>
          <div className="">
            <h1 className=" md:text-[37px] text-[27px] font-bold text-black bk py-2 px-3 md:w-80 whitespace-nowrap pt-6">
              <span className=" text-[#B99762]">Mvuala</span> -{" "}
              <span className=" text-[#6F7B7B] font-semibold">Mobile App</span>
            </h1>
          </div>
          <div className=" flex items-center gap-5 mt-6">
            <img
              className=" md:w-[200px] w-[127px] h-[53px] object-cover rounded-md"
              src={btn}
              alt=""
            />
            <img
              className=" md:w-[200px] w-[157px] h-[53px] object-cover rounded-md"
              src={btn1}
              alt=""
            />
          </div>
        </div>

        <div className=" md:w-[474px]">
          <img src={main} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
