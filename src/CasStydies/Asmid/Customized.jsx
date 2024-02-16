import React from "react";
import side from "../Asmid/Assets/Gr.png";
const Customized = () => {
  return (
    <div className=" md:mx-44 mx-4 pt-32">
      <div className="md:flex block justify-between items-center">
        <div className=" md:w-[45%] md:pt-0 pt-8">
          <h1 className="text-[#1D67D5] md:text-[33px] text-[22px] font-bold">
            Medical History Management:
          </h1>
          <p className=" text-[#606060] md:text-[17px] text-[13px] font-normal">
            ·Users can input past medical history, surgical history, and
            medications. Dynamic selection of conditions, surgical details, and
            medication types.
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
