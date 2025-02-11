import React from "react";

const Footer = () => {
  return (
    <div className="px-16 sm:px-20 md:px-24 lg:px-24 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 bg-black text-center">
        <div className="border border-white text-white rounded-sm p-3">1</div>
        <div className="border border-white text-white rounded-sm p-3">2</div>
        <div className="border border-white text-white rounded-sm p-3">3</div>
        <div className="border border-white text-white rounded-sm p-3">4</div>
        <div className="border border-white text-white rounded-sm p-3">5</div>
      </div>
    </div>
  );
};

export default Footer;
