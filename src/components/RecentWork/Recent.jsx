import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Recent = () => {
  return <div className="back2 relative top-[4.5rem] ">
    <ScrollRestoration />
    <div className=" flex items-center justify-center">
    <h1 className=" text-[40px] font-bold text-white mt-36">Recent Work</h1>
    </div>
  </div>;
};

export default Recent;
