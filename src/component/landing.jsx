import React from "react";
import landingBg from "../assets/images/side-banner-1.jpg";

const Landing = () => {
  return (
    <div className="px-16 sm:px-20 md:px-24 lg:px-24 py-5">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <img src={landingBg} alt="land" className="w-full" />
        </div>
        <div className="col-span-9">
          <div className="border border-white p-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
