import React from "react";
import { Link } from "react-scroll";

const Link12 = () => {
  return (
    <div>
      <Link
        to="/contact"
        smooth={true}
        duration={500}
        className="border-[2px] hover:bg-[#e3ecf1] border-[#14A2F1] text-[#14A2F1] py-2 px-4"
      >
        Contact
      </Link>
    </div>
  );
};

export default Link12;
