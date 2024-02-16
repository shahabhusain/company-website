import React from "react";
import side from "../../CasStydies/Skiwit/Assets/Group 340.png";
const Customized = () => {
  return (
    <div className=" md:mx-44 mx-4 pt-32">
      <div className="md:flex block justify-between items-center">
        <div className=" md:w-[45%] md:pt-0 pt-8">
          <h1 className="text-[#EDBD57] md:text-[33px] text-[22px] font-bold">
          Visual Coaching Brilliance
          </h1>
          <p className=" text-[#606060] md:text-[17px] text-[13px] font-normal">
          Experience the power of visual coaching! Coaches, witness your students' skiing prowess through video submissions. Provide detailed feedback by drawing directly on the video, offering precise guidance. Elevate your coaching game by sending video responses, ensuring students grasp every tip and technique.
          </p>
        </div>
        <div className=" md:w-[50%] w-[70%] mx-auto">
          <img src={side} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Customized;
