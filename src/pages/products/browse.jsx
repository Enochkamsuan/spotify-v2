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
    else if (types === "Night Wear") {
      allImages = importAllImage(
        require.context(
          "../../assets/images/nightwear",
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

/*
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

  const normalizeTypeKey = (str = '') => {
    return String(str).trim().toLowerCase().replace(/\s+/g, "");
  };

  const key = normalizeTypeKey(types);
  console.log('key_______', key);

  let allImages = [];
  
  try {
    // Use a switch statement for cleaner code
    switch (key) {
      case "shirt":
        allImages = importAllImage(
          require.context(
            "../../assets/images/shirts",
            false,
            /\.(jpg|jpeg|png|avif)$/
          )
        );
        break;
      case "pants":
        allImages = importAllImage(
          require.context(
            "../../assets/images/pants",
            false,
            /\.(jpg|jpeg|png|avif)$/
          )
        );
        break;
      case "nightwear":
        allImages = importAllImage(
          require.context(
            '../../assets/images/nightwear',
            false,
            /\.(jpg|jpeg|png|avif)$/
          )
        );
        break;
      default:
        console.warn(`No images found for type: ${types}`);
    }
  } catch (error) {
    console.error("Error loading images:", error);
  }

  // More flexible filtering - match against both original types and normalized key
  const filteredImages = allImages
    .filter((image) => {
      const imageName = image.name.toLowerCase();
      return imageName.startsWith(types?.toLowerCase() || '') || 
             imageName.startsWith(key);
    })
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  
  console.log("filtered images:", filteredImages);

  // Get the minimum length to prevent index errors
  const displayCount = Math.min(productData.length, filteredImages.length);
  const itemsToDisplay = productData.slice(0, displayCount);

  return (
    <div className="px-6 sm:px-20 md:px-24 lg:px-24 py-5">
      {filteredImages.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No products found for "{types}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {itemsToDisplay.map((product, index) => (
            <div key={product.id || index} className="bg-white p-3 rounded-md">
              <Link
                to={`/browse/${types}/${product.id}`}
                state={{
                  imagesrc: filteredImages[index],
                  product: product
                }}
              >
                <img
                  src={filteredImages[index]?.src}
                  alt={product.name || `Product ${index + 1}`}
                  className="w-full"
                  onError={(e) => {
                    e.target.src = '/path/to/placeholder-image.jpg'; // Add fallback image
                  }}
                />
              </Link>
              <div className="mt-4">
                <div className="text-xs font-bold">
                  {product.detail}
                </div>
                <div className="text-xs font-extrabold my-2">
                  ₹ {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Browse;
 */