import React from "react";
import Hero from "../../CasStydies/WinnerWin/Hero";
import Technology from "../../CasStydies/WinnerWin/Technology";
import Project from "../../CasStydies/WinnerWin/Project";
import Feature from "../../CasStydies/WinnerWin/Feature";
import Booking from "../../CasStydies/WinnerWin/Booking";
import Customized from "../../CasStydies/WinnerWin/Customized";
import Challenge from "../../CasStydies/WinnerWin/Challenge";
import Solution from "../../CasStydies/WinnerWin/Solution";
import Footer from "../../CasStydies/WinnerWin/Footer";

const Winnerwin = () => {
  return (
    <div className=" pt-20">
      <Hero />
      <Technology />
      <Project />
      <Feature />
      <Booking />
      <Customized />
      <Challenge />
      <Solution />
      <Footer />
    </div>
  );
};

export default Winnerwin;
