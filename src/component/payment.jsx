import React, { useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setShowPaymentStatus } from "../config/redux/slice/multiSlice";

const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const clickedImage = location.state;

  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-md p-3">
      <div className="bg-slate-200 p-4 rounded-md">
        <div className="flex justify-between mb-3">
          <div className="font-mono font-bold">LOGO</div>
          <div className="cursor-pointer">
            <RxCross1 onClick={() => dispatch(setShowPaymentStatus(false))} />
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-3 rounded-md">
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
          className={`transition-all overflow-hidden relative ${
            isOpen ? "max-h-64" : "max-h-0"
          } duration-300`}
        >
          <div className="flex gap-2 items-center mt-2">
            <div>
              <img
                src={clickedImage.clickedImage}
                alt="selectedImage"
                className="h-24 w-24 object-contain"
              />
            </div>
            <div>
              <div className="text-xs">MEN'S 511 SLIM FIT INDIGO JEANS</div>
              <div>Price:</div>
              <div>Quantity:</div>
              <div>Size:</div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xs font-medium">MRP Total:</div>
            <div className="font-semibold">2039</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xs font-medium">Discount:</div>
            <div className="font-semibold">-</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xs font-medium">Subtotal:</div>
            <div className="font-semibold">2039</div>
          </div>
          <div className="flex justify-between items-center pb-2">
            <div className="text-xs font-medium">Shipping:</div>
            <div className="font-semibold">Free</div>
          </div>
          <div /*className="after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-black after:bottom-0 after:left-0" */
          >
            <div className="flex justify-between items-center">
              <div>To Pay</div>
              <div>2039</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
