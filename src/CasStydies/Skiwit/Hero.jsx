import React from "react";
import logo from "../../CasStydies/Skiwit/Assets/image 16.png";
import side from "../../CasStydies/Skiwit/Assets/Frame 1000009938.png";
import { ScrollRestoration } from "react-router-dom";
const Hero = () => {
  return (
    <div className=" back12 pt-24">
      <ScrollRestoration />
      <div className=" md:pt-7 pt-7 mx-4 md:mx-24">
        <div className="  md:flex block justify-between gap-16 ">
          <div className=" flex flex-col gap-4 justify-center md:w-[50%]">
            <img className=" w-[99px] object-contain" src={logo} alt="" />
            <div>
              <button className=" py-2 border-[2px]  duration-300 transition-all ease-in-out border-[#272727] rounded-[5px] md:text-[35px] sm:text-[25px] text-[17px] font-[600] text-[#272727] px-8">
                Case Study
              </button>
            </div>
            <h1 className=" text-[#000000] md:text-[45px] sm:text-[35px] text-[25px] font-[600] ">
              SKIWIT Mobile App
            </h1>
            <div></div>
            <p className=" text-[#292929] md:text-[20px] text-[14px] font-[400]">
            Transform your skiing with personalized coaching from top Snowsports experts. Access world-class instructors for personalized feedback, revolutionizing your learning experience anytime, anywhere."
            </p>
          </div>
          <img
            className=" md:max-w-[500px] object-contain md:pt-0 pt-10"
            src={side}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
