import React from "react";
import panel from "../Assests/panel.jpg";
import panel2 from "../Assests/solar 2.jpg";
import panel3 from "../Assests/solar 3.jpg";

const Fields = () => {
  return (
    <div className="px-5 py-10  bg-white">
      <div className="grid grid-col-1 gap-x-4 gap-y-2 md:grid-cols-3  items-center justify-center w-full">
        <div className="h-[500px] hero   rounded-xl flex items-center relative justify-center py-6 px-2">
          <img
            src={panel}
            className="w-full object-cover h-full absolute top-0  opacity-25"
            alt=""
          />
          <div className="w-3/4 py-5 px-2 relative flex flex-col items-center ">
            <h1 className="text-center text-base text-white py-1 capitalize font-thin">
              Reliablity
            </h1>
            <h1 className="text-3xl text-center text-white py-2 uppercase font-bold">
              perfect Energy for EveryOne
            </h1>
            <hr className="w-12  h-1 bg-white " />
            <p className="text-xl py-4 mb-5 text-white text-center font-semibold capitalize">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              dignissimos?
            </p>
            <button className="text-center px-4 py-2 font-bold capitalize text-white bg-black rounded-xl">
              learn more
            </button>
          </div>
        </div>
        <div className="h-[500px] relative hero rounded-xl flex items-center justify-center py-6 px-2">
          <img
            src={panel2}
            className="w-full object-cover h-full absolute top-0  opacity-25"
            alt=""
          />
          <div className="w-3/4 py-5 px-2 relative flex flex-col items-center">
            <h1 className="text-center text-base text-white py-1 capitalize font-thin">
              High Qualities
            </h1>
            <h1 className="text-3xl text-center text-white py-2 uppercase font-bold">
              Choice of Professional
            </h1>
            <hr className="w-12  h-1 bg-white " />
            <p className="text-xl py-2 mb-5 text-white text-center font-semibold capitalize">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              dignissimos?
            </p>
            <button className="text-center px-4 py-2 font-bold capitalize text-white bg-black rounded-xl">
              learn more
            </button>
          </div>
        </div>
        <div className="h-[500px] relative  hero rounded-xl flex items-center justify-center py-6 px-2">
          <img
            src={panel3}
            className="w-full object-cover h-full absolute top-0  opacity-25"
            alt=""
          />
          <div className="w-3/4 py-5 px-2 relative flex flex-col items-center">
            <h1 className="text-center text-base text-white py-1 capitalize font-thin">
              Convenience
            </h1>
            <h1 className="text-3xl text-center text-white py-1 uppercase font-bold">
              satisfaction Guaranteed
            </h1>
            <hr className="w-12  h-1 bg-white " />
            <p className="text-xl py-2 text-white text-center mb-5 font-semibold capitalize">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              dignissimos?
            </p>
            <button className="text-center px-4 py-2 font-bold capitalize text-white bg-black rounded-xl">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fields;
