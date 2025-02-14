import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
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
      <div className="flex items-center gap-2 py-3">
        <div className="flex gap-1 text-white">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleRatings(index)}
              className="cursor-pointer"
            >
              <CiStar
                className={index < rating ? "text-yellow-400" : "text-gray-400"}
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
    </div>
  );
};

export default Reviews;
