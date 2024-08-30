import React from "react";

const Buttons = () => {
  return (
    <div>
      <div className="flex w-full flex-col justify-center gap-4 items-center mt-4">
        <button className="px-4 py-3 text-center text-white text-2xl rounded-xl bg-green-500">
          Add to Cart
        </button>
        <button className="px-2 py-3 text-center text-2xl text-white rounded-xl bg-black">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Buttons;
