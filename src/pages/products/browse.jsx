import React from "react";
import { Link, useParams } from "react-router-dom";
import productData from "../../assets/data/data";

const Browse = () => {
  const { types } = useParams();
  console.log("routes types", types);

  const importAllImage = (requireContext) => {
    return requireContext.keys().map((key) => ({
      name: key.replace("./", ""),
      src: requireContext(key),
    }));
  };

  // const allImages = importAllImage(
  //   require.context(`../../assets/images/${types}`, false, /\.(jpg|jpeg|png)$/)
  // );
  // const pantsImage = allImages
  //   .filter((image) => image.name.startsWith("pants"))
  //   .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  let allImages = [];
  try {
    if (types === "shirt") {
      allImages = importAllImage(
        require.context(
          "../../assets/images/shirts",
          false,
          /\.(jpg|jpeg|png|avig)$/
        )
      );
    } else if (types === "pants") {
      allImages = importAllImage(
        require.context(
          "../../assets/images/pants",
          false,
          /\.(jpg|jpeg|png|avig)$/
        )
      );
    }
  } catch (error) {
    console.error("error loading images", error);
  }
  const filteredImages = allImages
    .filter((image) => image.name.startsWith(types))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  console.log("filtered images:", filteredImages);

  return (
    <div className="px-6 sm:px-20 md:px-24 lg:px-24 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {productData.map((image, index) => (
          <div key={index} className="bg-white p-3 rounded-md">
            <Link
              to={`/browse/${types}/${image.id}`}
              state={{
                imagesrc: filteredImages[index],
              }}
            >
              <img
                key={index}
                src={filteredImages[index].src}
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
