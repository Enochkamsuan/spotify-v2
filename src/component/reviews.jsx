import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Cookies from "js-cookie";

const Reviews = () => {
  const [tempRating, setTempRating] = useState(0);
  const [rating, setRating] = useState(0);

  const handleRatings = (ind) => {
    setTempRating(ind + 1);
  };
  const submitRating = () => {
    setRating(tempRating);
    Cookies.set("User_Rating", tempRating, { expires: 1 });
  };

  useEffect(() => {
    const storedRating = Cookies.get("User_Rating");
    if (storedRating) {
      setRating(Number(storedRating));
    }
  }, []);
  return (
    <div>
      <div className="py-3">
        <div className="flex gap-1 text-white">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleRatings(index)}
              className="cursor-pointer"
            >
              <FaStar
                className={index < rating ? "text-yellow-400" : "text-white"}
                size={24}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          className="border border-white rounded-md text-xs text-white px-2 py-1"
          onClick={submitRating}
        >
          SUBMIT REVIEWS
        </button>
      </div>
    </div>
  );
};

export default Reviews;
