import React from "react";

const HeroHome = () => {
  return (
    <div className="flex w-full  flex-col md:flex-row justify-center ">
      <div className="w-full flex items-center relative  h-[500px] banner">
        <div className="absolute bottom-2">
          <h1 className=" px-14 text-sm text-white tracking-wide uppercase">
            worry less satisfaction
          </h1>
          <h1 className=" px-14 text-4xl font-semibold capitalize text-white">
            your power House
          </h1>

          <div className="px-14 w-full  md:w-[70%]">
            <p className="text-xl font-bold  tracking-wide space-x-4 pt-4 pb-4">
              5KVA inverter system on a 5Kwh lithium iron Phosphate (LiFePO4) backup
            </p>
          </div>
          <div className="px-14">
            <button className="text-center md:w-44 w-full p-4 font-bold bg-white rounded-full text-black text-xl capitalize">
              {" "}
              learn More
            </button>
          </div>
        </div>
      </div>

      {/* the second banner */}

      <div className=" w-full flex items-center h-[500px] relative banner2">
        <div className="absolute bottom-2">
          <h1 className=" px-14 text-sm text-white tracking-wide uppercase">
            worry less satisfaction
          </h1>
          <h1 className=" px-14 text-4xl font-semibold capitalize text-white">
            your power House
          </h1>

          <div className="px-14  w-full md:w-[70%]">
            <p className="text-xl font-bold  tracking-wide space-x-4 pt-4 pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              labore voluptatum sit quae tenetur?
            </p>
          </div>
          <div className="px-14 w-full">
            <button className="text-center md:w-44 w-full  p-4 font-bold bg-white rounded-full text-black text-xl capitalize">
              {" "}
              learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
