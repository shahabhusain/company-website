import React from "react";
import logo from "../../CasStydies/LocalCaregiver/Assets/Logo (2).png";
import main from "../../CasStydies/LocalCaregiver/Assets/Group 7772.png";
import btn from "../../CasStydies/LocalCaregiver/Assets/Button.png";
import btn1 from "../../CasStydies/LocalCaregiver/Assets/Button (1).png";
import { ScrollRestoration } from "react-router-dom";
const Home = () => {
  return (
    <div className=" local">
      <div className="pt-24">
      <ScrollRestoration />
        <div className=" md:flex block  justify-between items-center gap-24 mx-24 md:pt-0 pt-16 ">
          <div className=" ">
            <img className=" w-[131px]" src={logo} alt="logo" />
          <div>
              <p className=" rounded-md mt-4 py-2 px-5 md:text-[35px] text-[29px] font-[500] text-[#0D7592]  border-[2px] border-[#EF6A1F]">
              Case Study
            </p>
          </div>
            <div className="">
              <h1 className=" 2xl:text-[47px] md:text-[37px] text-[27px] font-bold text-black bak py-2 px-3 2xl:w-full md:w-80  pt-6">
                <p className=" text-[#0D7592]">local caregiver</p>
                <p className=" text-[#000000] font-semibold">Mobile App</p>
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
            <p className="text-[#484444] font-normal text-[20px] mt-4">
              "Empowering Lives, Earning Smiles" Start Earning Money as an
              In-Home Caregiver!
            </p>
          </div>

          <div className="">
            <img src={main} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
