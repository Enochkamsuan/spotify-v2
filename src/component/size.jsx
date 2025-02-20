import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Size = () => {
  const [selectedSize, setSelectedSize] = useState([]);
  const [quantity, setQuantity] = useState(() => {
    const savedQuantity = Cookies.get("tempquantity");
    return savedQuantity ? JSON.parse(savedQuantity) : 1;
  });

  const handelSelectSizeClick = (size) => {
    let newSelectedSizes;

    if (selectedSize.includes(size)) {
      newSelectedSizes = selectedSize.filter((s) => s !== size);
    } else {
      newSelectedSizes = [...selectedSize, size];
    }

    setSelectedSize(newSelectedSizes);

    Cookies.set("tempsize", JSON.stringify(newSelectedSizes), { expires: 1 });

    console.log("saved sizes", newSelectedSizes);
  };

  const handleSetQuantity = (quant) => {
    let newQuantity = quant;

    setQuantity(newQuantity);
    Cookies.set("tempquantity", JSON.stringify(newQuantity), { expires: 1 });

    console.log("Temp Quantity:", newQuantity);
  };

  useEffect(() => {
    if (!Cookies.get("tempquantity")) {
      Cookies.set("tempquantity", JSON.stringify(1), { expires: 1 });
    }
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-bold text-sm">Size</div>
        <div className="text-red-500 font-medium text-sm">SIZE CHART</div>
      </div>
      <div className="grid grid-cols-8 gap-4 pt-2">
        {[28, 30, 32, 34, 36, 38, 40, 42].map((size) => {
          return (
            <div
              className="p-2 border border-black flex justify-center items-center cursor-pointer focus:outline focus:outline-black"
              key={size}
              onClick={() => handelSelectSizeClick(size)}
              tabIndex={0}
            >
              {size}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="font-bold">Select Quantity</div>
        <div className="flex gap-2 items-center">
          <div
            onClick={() => handleSetQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="border border-black flex items-center justify-center cursor-pointer px-3 py-1"
          >
            -
          </div>
          <div className="border border-black px-3 py-1">{quantity}</div>
          <div
            onClick={() => handleSetQuantity(quantity + 1)}
            className="border border-black flex items-center justify-center cursor-pointer px-3 py-1"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default Size;
