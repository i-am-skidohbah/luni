import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const NewProductsItem = ({ category, image, price, Details, id, Name }) => {
  const LongDetails = (Details) => {
    if (Details.length > 15) {
      return Details.slice(0, 25) + `` + `...`;
    } else {
      return Details;
    }
  };
  return (
    <Link to={`product/${id}`}>
      <div className="px-4 flex flex-col group cursor-grab justify-center items-center  py-4">
        <div className="w-full group-hover:scale-110 transition ease-in-out ">
          <img
            src={image}
            className="w-3/4 object-contain py-4"
            alt="product image"
          />
        </div>
        <div className="px-4">
          <h1 className="text-sm text-green-300 text-center">{category}</h1>
          <h1 className="text-2xl text-black font-semibold text-center">
            {Name}
          </h1>
          <p className="text-center tracking-wider text-black  text-sm md:text-xl  font-normal py-2">
            {LongDetails(Details)}
          </p>
          <p className="text-center text-black text-2xl font-light">{price}</p>

          <div className="hidden group-hover:flex  transition ease-out duration-200 ">
            <Button />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewProductsItem;
