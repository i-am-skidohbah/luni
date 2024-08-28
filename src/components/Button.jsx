import React from "react";

const Button = ({ color }) => {
  return (
    <div className="flex items-center justify-center gap-4 w-full md:w-[300px] my-4 ">
      <button className="text-center w-full text-base capitalize p-4 text-white bg-green-400 rounded-full">
        learn more
      </button>
      <button className="text-center text-base w-full capitalize p-4 text-white bg-black rounded-full">
        Add to Cart
      </button>
    </div>
  );
};

export default Button;
