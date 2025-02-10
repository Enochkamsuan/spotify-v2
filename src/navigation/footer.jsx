import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 bg-black text-center py-5 px-3">
      <div className="border border-white text-white rounded-sm p-3">1</div>
      <div className="border border-white text-white rounded-sm p-3">2</div>
      <div className="border border-white text-white rounded-sm p-3">3</div>
      <div className="border border-white text-white rounded-sm p-3">4</div>
      <div className="border border-white text-white rounded-sm p-3">5</div>
    </div>
  );
};

export default Footer;
