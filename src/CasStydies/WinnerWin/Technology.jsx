import React from "react";
import side1 from "../WinnerWin/Assets/side1.png";
import side3 from "../WinnerWin/Assets/side3.png";
import side4 from "../WinnerWin/Assets/side4.png";
import side5 from "../WinnerWin/Assets/side5.png";
const Technology = () => {
  return (
    <div className=" md:mx-44 mx-4 flex flex-col gap-4 pt-14">
      <h1 className=" text-[#000000] md:text-[37px] sm:text-[37px] text-[27px] font-bold">
        Technology{" "}
        <span className=" text-black md:text-[47px] sm:text-[37px] text-[27px] font-normal">
          Used
        </span>
      </h1>
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:pt-16 gap-4 md:mx-0 mx-auto ">
        <div className=" flex flex-col items-center justify-center gap-3">
          <img src={side1} alt="" />
          <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
            Figma
          </h1>
          <p className=" text-[#606060] text-[13px] font-[500] text-center">
          Design tools figma has been used to create and prototype the user interface.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3">
          <img src={side3} alt="" />
          <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] whitespace-nowrap ">
            Google Maps API{" "}
          </h1>
          <p className=" text-[#606060] text-[13px] font-[500] text-center">
          Winners Win integrates Google Maps API for geolocation services and map displays.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3">
          <img src={side4} alt="" />
          <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
            firebase{" "}
          </h1>
          <p className=" text-[#606060] text-[13px] font-[500] text-center">
          Server-side JavaScript runtime for building scalable APIs and backend applications.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3">
          <img src={side5} alt="" />
          <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
            flutter{" "}
          </h1>
          <p className=" text-[#606060] text-[13px] font-[500] text-center">
          Winners Win is built using the Flutter framework for cross- platform mobile application development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
