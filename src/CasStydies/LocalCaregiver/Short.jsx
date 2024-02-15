import React from "react";
import side from "../../CasStydies/LocalCaregiver/Assets/Group 7.png";
const Short = () => {
  return (
    <div className=" md:flex block pt-24 gap-12 justify-between md:mx-24 mx-4">
      <div className=" md:w-[70%] pt-24">
        <h1 className=" md:text-[41px] text-[27px] font-bold leading-[3rem] text-[#0D7592]">
        Connecting Caregivers, Wherever You Are
        </h1>
        <p className=" md:text-[17px] text-[10px] font-normal text-[#606060] mt-4">
        Search and access Caregivers based on your location and Geography
        </p>
      </div>
      <div>
        <img className=" pt-7 md:pt-0" src={side} alt="" />
      </div>
    </div>
  );
};

export default Short;
