import React from "react";
import logo from "../Asmid/Assets/AskMedP1 2.png";
import side from "../Asmid/Assets/Group 973.png";
import btn from "../Asmid/Assets/App Store Black.png";
import btn1 from "../Asmid/Assets/Google Play Black.png";
const Hero = () => {
  return (
    <div className=" bg-[#6DA8FF] pb-32">
      <div className=" md:pt-7 pt-7 mx-4 md:mx-24">
        <div className="  md:flex block justify-between gap-16 ">
          <div className=" flex flex-col gap-6 justify-center md:w-[50%]">
            <img className=" w-[122px] object-contain" src={logo} alt="" />

            <h1 className=" text-[#ffffff] md:text-[45px] sm:text-[35px] text-[25px] font-[600] ">
              Mobile App
            </h1>
            <div>
              <button className=" bk1 py-2  duration-300 transition-all ease-in-out rounded-[5px] md:text-[35px] sm:text-[25px] text-[17px] font-[600] text-[#ffffff] px-8">
                User Case Study
              </button>
            </div>

            <p className=" text-[#ffffff] md:text-[20px] text-[14px] font-[400]">
              Introducing the Pageant Prodigy app, your ultimate companion for
              navigating the world of pageantry.
            </p>
            <div className=" flex items-center gap-4">
              <a href="/"><img src={btn} alt="" /></a>
              <a href="/"><img src={btn1} alt="" /></a>
            </div>
          </div>
          <img
            className=" md:max-w-[50%] object-contain md:pt-0 pt-10"
            src={side}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
