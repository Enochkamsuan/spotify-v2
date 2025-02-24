import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="px-16 sm:px-20 md:px-24 lg:px-24 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 bg-black">
        <div>
          <img src={logo} alt="logo" className="w-28 h-28 object-cover" />
          <div className="text-gray-400 text-xs mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            corrupti aut deleniti, perferendis culpa aspernatur facilis quaerat
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
