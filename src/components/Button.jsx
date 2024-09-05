import React from "react";
import { Link } from "react-router-dom";
const Button = ({ path }) => {
  return (
    <div className="flex items-center flex-col md:flex-row justify-center gap-4 w-full md:w-[300px] my-4 ">
      <button className="text-center w-full text-base capitalize p-4 text-black bg-white font-bold rounded-lg">
        learn more
      </button>

      <button className="text-center text-base w-full capitalize p-4 text-white bg-black font-bold rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default Button;
