import React, { useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const NewProductsItem = ({
  category,
  image,
  brand,
  price,
  title,
  productId,
}) => {
  const LongDetails = (title) => {
    if (title.length > 15) {
      return title.slice(0, 25) + `` + `...`;
    } else {
      return title;
    }
  };
  return (
    <Link to={`${productId}`}>
      <div className="px-4 flex flex-col  group cursor-grab justify-center items-center py-6">
        <div className="w-full group-hover:scale-110 transition ease-in-out ">
          <img
            src={image[0]}
            className="w-3/4 object-contain  h-36"
            alt="product image"
          />
        </div>
        <div className="px-4">
          <h3 className="text-base py-1 text-green-300 ">{category}</h3>
          <h1 className="text-xl text-justify text-black font-semibold  capitalize">
            {brand}
          </h1>
          <p className="text-justify  text-black  text-sm md:text-xl  font-normal">
            {LongDetails(title)}
          </p>
          <p className="text-justify py-4 text-black text-xl font-semibold">
            {price}
          </p>

          <div className="hidden group-hover:flex  transition ease-out duration-200 ">
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewProductsItem;
