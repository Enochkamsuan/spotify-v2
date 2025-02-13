import React, { useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import image_1 from "../assets/images/slide_1.jpg";

const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-md p-3">
      <div className="bg-slate-200 p-2 rounded-md">
        <div className="flex justify-between items-center">
          <div
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <LuShoppingBag /> Order summary
            <FaAngleDown
              className={`transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div>$</div>
        </div>
        <div
          className={`transition-all overflow-hidden ${
            isOpen ? "max-h-40" : "max-h-0"
          } duration-300`}
        >
          <div className="flex gap-2 items-center mt-2">
            <div>
              <img
                src={image_1}
                alt="selectedImage"
                className="h-24 w-24 object-contain"
              />
            </div>
            <div>
              <div className="text-xs">MEN'S 511 SLIM FIT INDIGO JEANS</div>
              <div>Price:</div>
              <div>Quantity:</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
