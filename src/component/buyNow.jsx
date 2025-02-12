import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import Cookies from "js-cookie";
import { Badge } from "react-bootstrap";
// import axios from "axios";

const CheckOut = () => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedRating = Cookies.get("User_Rating");
    if (storedRating) {
      setRating(Number(storedRating));
    }
  }, []);

  const handleRatings = (ind) => {
    setTempRating(ind + 1);
  };

  const submitRating = () => {
    setRating(tempRating);
    Cookies.set("User_Rating", tempRating, { expires: 1 });
  };

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
      console.log("data pincode", data);
    } catch (error) {
      console.error("error fetching PIN code response:", error);
    }
  };
  return (
    <div className="px-6 sm:px-20 md:px-24 lg:px-24 py-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <div className="p-2 bg-white w-full"></div>
        <div className="bg-gradient-to-b from-black via-[#a29696] to-[#cebfbf] p-3">
          <div className="font-bold text-sm text-white">
            MEN'S 511 SLIM FIT INDIGO JEANS
          </div>
          <div className="flex items-center gap-2 py-3">
            <div className="flex gap-1 text-white">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleRatings(index)}
                  className="cursor-pointer"
                >
                  <CiStar
                    className={
                      index < rating ? "text-yellow-400" : "text-gray-400"
                    }
                    size={24}
                  />
                </div>
              ))}
            </div>
            <div className="text-xs text-white">Write a review</div>
          </div>
          <div>
            <button
              className="border border-white rounded-md text-xs text-white px-2 py-1"
              onClick={submitRating}
            >
              SUBMIT RATINGS
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="font-bold py-5">$50</div>
            <div>
              <Badge className="px-2 py-1 bg-red-400 rounded-lg text-white text-sm">
                30% off
              </Badge>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-bold text-sm">Size</div>
            <div className="text-red-500 font-medium text-sm">SIZE CHART</div>
          </div>
          <div className="grid grid-cols-8 gap-4 pt-2">
            <div className="p-2 border border-black flex justify-center items-center">
              28
            </div>
            <div className="p-2 border border-black flex justify-center items-center">
              30
            </div>
            <div className="p-2 border border-black flex justify-center items-center">
              32
            </div>
            <div className="p-2 border border-black flex justify-center items-center">
              34
            </div>
            <div className="p-2 border border-black flex justify-center items-center">
              36
            </div>
            <div className="p-2 border border-black flex justify-center items-center">
              38
            </div>
            <div className="p-2 border border-black flex justify-center items-center">
              40
            </div>
            <div className="p-2 border border-black flex justify-center items-center">
              42
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="font-bold">Select Quantity</div>
            <div className="flex gap-2 items-center">
              <div
                onClick={() => setQuantity(quantity - 1)}
                className="border border-black flex items-center justify-center cursor-pointer px-3 py-1"
              >
                -
              </div>
              <div className="border border-black px-3 py-1">{quantity}</div>
              <div
                onClick={() => setQuantity(quantity + 1)}
                className="border border-black flex items-center justify-center cursor-pointer px-3 py-1"
              >
                +
              </div>
            </div>
          </div>
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
          <div className="flex gap-4 my-6">
            <div className="w-1/2">
              <button className="border border-black py-2 px-3 w-full rounded-md text-sm">
                BUY NOW
              </button>
            </div>
            <div className="w-1/2">
              <button className="bg-red-600 py-2 px-3 w-full  rounded-md text-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
