import React from "react";
import side from "../Cheapskate/Assets/Group 7771 (2).png";
const Customized = () => {
  return (
    <div className=" md:mx-44 mx-4 pt-32">
      <div className="md:flex block justify-between items-center">
        <div className=" md:w-[45%] md:pt-0 pt-8">
          <h1 className="text-[#5EACF9] md:text-[33px] text-[22px] font-bold">
          Withdrawal of Campaign Money
          </h1>
          <p className=" text-[#606060] md:text-[17px] text-[13px] font-normal">
          Campaign creators can securely withdraw the funds raised upon successful completion.
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
