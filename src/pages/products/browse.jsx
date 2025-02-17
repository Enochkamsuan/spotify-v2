import React from "react";
import { Link } from "react-router-dom";
import productData from "../../assets/data/data";

const Browse = () => {
  const importAllImage = (requireContext) => {
    return requireContext.keys().map((key) => ({
      name: key.replace("./", ""),
      src: requireContext(key),
    }));
  };

  const allImages = importAllImage(
    require.context("../../assets/images/", false, /\.(jpg|jpeg|png)$/)
  );

  const pantsImage = allImages
    .filter((image) => image.name.startsWith("pants"))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  return (
    <div className="px-6 sm:px-20 md:px-24 lg:px-24 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {pantsImage.map((image, index) => (
          <div key={index} className="bg-white p-3 rounded-md">
            <Link to="/details" state={{ clickedImage: image.src }}>
              <img
                key={index}
                src={image.src}
                alt={image.name}
                className="w-full"
              />
            </Link>
            <div className="mt-4">
              <div className="text-xs font-bold">
                {productData[index]?.detail}
              </div>
              <div className="text-xs font-extrabold my-2">
                ₹ {productData[index]?.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
