import React from "react";
import image from "../Assests/s3.jpg";
import { Link } from "react-router-dom";
import Buttons from "./Button";
const ProductGrids = ({ image, price, title, category, brand, productId }) => {
  return (
    <Link to={`${productId}`}>
      <div className="w-full  grid grid-cols-2 group md:border cursor-grab  md:gap-0 gap-4 relative">
        <div className="w-full  h-full flex items-center justify-center  backdrop-blur">
          <img
            src={image[0]}
            alt=""
            className="  w-full  md:w-48 h-32 object-contain "
          />
          <div className="group-hover:flex flex-col  items-center hidden justify-center absolute top-0 bottom-10">
            <Buttons />
          </div>
        </div>

        <div className="w-full h-full ">
          <h1 className="text-orange-300  uppercase text-sm ">{brand}</h1>
          <h1 className="text-black text-xl group-hover:duration-75 group-hover:text-green-400">
            {category}
          </h1>

          <div className="py-4 relative">
            <p className="text-sm  text-black font-normal">{title}</p>
            {/* the hovering effect yet to be activated */}
            {/* <div className=" items-center hidden justify-start gap-1">
            <img src={done} alt="" className="w-6 py-4" />
            <img src={eye} alt="" className="w-10 py-4" />
            <img src={heart} alt="" className="w-6 py-4" />
          </div> */}
            {/*  */}
          </div>
          <p className="text-black text-xl tracking-wide font-bold">{price}</p>
        </div>

        <hr className="w-full" />
      </div>
    </Link>
  );
};

export default ProductGrids;
