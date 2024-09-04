import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const NewProductsItem = ({
  category,
  image,
  price,
  Details,
  productId,
  Name,
}) => {
  const LongDetails = (Details) => {
    if (Details.length > 15) {
      return Details.slice(0, 25) + `` + `...`;
    } else {
      return Details;
    }
  };
  return (
    <Link to={`${productId}`}>
      <div className="px-4 flex flex-col  group cursor-grab justify-center items-center  py-4">
        <div className="w-full group-hover:scale-110 transition ease-in-out ">
          <img
            src={image[0]}
            className="w-3/4 object-contain py-4"
            alt="product image"
          />
        </div>
        <div className="px-4">
          <h3 className="text-sm py-1 text-green-300 text-center">
            {category}
          </h3>
          <h1 className="text-xl text-justify text-black font-semibold  capitalize">
            {Name}
          </h1>
          <p className="text-justify  text-black  text-sm md:text-xl  font-normal">
            {LongDetails(Details)}
          </p>
          <p className="text-justify py-2 text-black text-xl font-semibold">
            {price}
          </p>

          <div className="hidden group-hover:flex  transition ease-out duration-200 ">
            <Button />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewProductsItem;
