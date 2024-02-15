import React from "react";
import footer from "../../assets/images/footer.png";
import face from "../../assets/svg/facebook.svg";
import twit from "../../assets/svg/twitter.svg";
import insta from "../../assets/svg/instagram-filled.svg";
import link from '../../assets/svg/linkdin.svg'
const Footer = () => {
  return (
    <div className="bg-[#F8F9FA] py-16 mt-40">
      <div className=" md:flex block items-center md:justify-between md:mx-24 mx-4">
     <div className=" flex items-center gap-8">
     <img className="md:mx-0 mx-auto" src={footer} alt="" />
        <div className=" flex flex-col md:items-start items-center justify-center">
          <p className=" text-[24px] font-semibold py-3">Head Office</p>
          <p className=" text-[14px] font-normal text-center">
            Office # 09,2nd Floor Ali Tower,Main University Road Peshawar,
            Pakistan
          </p>
        </div>
     </div>
        <div className=" flex flex-col md:items-start items-center justify-center">
          <h1 className=" text-[24px] font-semibold py-3">Social Links</h1>
            <a className=" flex items-center gap-3" href="https://www.linkedin.com/company/apptex/mycompany/">
              Linkedin <img className=" w-[22px]" src={link} alt="" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
