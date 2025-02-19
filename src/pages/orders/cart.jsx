import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalQuantity = useSelector(
    (state) => state.authentication.totalQuantity
  );

  const clickedImage =
    useSelector((state) => state.authentication.clickedImage) ||
    localStorage.getItem("clickedImage");
  return (
    <div className="bg-white ms-auto rounded-md p-3 w-1/2">
      <div className="text-md font-bold">Your Cart:({totalQuantity})</div>
      {totalQuantity > 0 && clickedImage && (
        <div>
          <img
            src={clickedImage}
            alt="click_image"
            className="w-24 h-24 object-contain"
          />
        </div>
      )}
      {totalQuantity === 0 && <div>No items in your cart</div>}
    </div>
  );
};

export default Cart;
