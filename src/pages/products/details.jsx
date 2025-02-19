import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import Payment from "../../component/payment";
import Size from "../../component/size";
import Reviews from "../../component/reviews";
import productDetail from "../../assets/data/data";
import {
  setShowPaymentStatus,
  addToCart,
} from "../../config/redux/slice/multiSlice";

const Details = () => {
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (!pincode) {
      setMessage("please enter a PIN code");
      return;
    }

    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await response.json();

      if (data[0].Status === "Success" && data[0].PostOffice) {
        if (
          data[0].PostOffice[0].Region?.toLowerCase().includes(
            "north eastern"
          ) ||
          data[0].PostOffice[0].Circle?.toLowerCase().includes("north eastern")
        ) {
          setMessage("Your delivery is expected within 14 days");
        } else {
          setMessage("Your delivery is expected within 14-18 working days");
        }
      } else {
        setMessage("Invalid pincode");
      }
    } catch (error) {
      console.error("error fetching PIN code response:", error);
    }
  };

  const clickedImage =
    useSelector((state) => state.authentication.clickedImage) ||
    localStorage.getItem("clickedImage");
  console.log("clickedImage", clickedImage);

  const dispatch = useDispatch();

  const showPaymentStatus = useSelector(
    (state) => state.authentication.showPaymentStatus
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: clickedImage.id,
      })
    );
  };

  const product =
    productDetail.find((item) => item.id === clickedImage?.id) || {};

  return (
    <div className="px-6 sm:px-20 md:px-24 lg:px-24 py-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 relative">
        <div>
          <img src={clickedImage} alt="click" className="w-full" />
        </div>
        <div className="bg-gradient-to-b from-black via-[#a29696] to-[#cebfbf] rounded-md p-3">
          <div className="font-bold text-sm text-white">
            {product.id ? (
              <div>{product.detail}</div>
            ) : (
              <div>No items available</div>
            )}
            {console.log("product id", product.id)}
          </div>
          <Reviews />
          <div className="flex items-center gap-3">
            <div className="font-bold py-5">$50</div>
            <div>
              <Badge className="px-2 py-1 bg-red-400 rounded-lg text-white text-sm">
                30% off
              </Badge>
            </div>
          </div>
          <Size />
          <div className="text-black font-bold text-xs mt-10 mb-5">
            Delivery ELigibility
          </div>
          <form className="relative" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="bg-transparent border-b border-b-black focus:outline-none text-xs placeholder-white w-full p-2"
            />
            <button
              type="submit"
              className="text-blue-700 text-xs absolute right-0 top-[10px]"
            >
              Check
            </button>
          </form>
          {message && (
            <div className="text-white text-pretty py-2">{message}</div>
          )}
          <div className="flex gap-4 my-6">
            <div className="w-1/2">
              <button
                className="border border-black text-white py-2 px-3 w-full rounded-md text-sm"
                onClick={() => dispatch(setShowPaymentStatus(true))}
              >
                BUY NOW
              </button>
            </div>
            <div className="w-1/2">
              <button
                className="bg-red-600 py-2 px-3 w-full text-white  rounded-md text-sm"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
          {showPaymentStatus ? (
            <div className="absolute payment_class top-1/4 left-1/2 w-1/2">
              <Payment />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Details;
