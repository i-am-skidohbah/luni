import React, { useState } from "react";
import pannel from "../Assests/solar 4.jpg";
import done from "../Assests/done.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

const BannerItem = ({ image, title1, title2, details, id, qualities }) => {
  return (
    // <Link to={`product/${id}`}>
    <div className="hero-banner hero-container w-full py-4 h-full cursor-grab rounded-lg ">
      {/* backgground image */}
      <img
        src={pannel}
        className="w-full object-cover h-full  absolute top-0 bottom-0 opacity-15"
        alt=""
      />
      {/*  */}
      <div className="flex md:flex-row flex-col items-center w-full justify-center px-2 md:px-6 gap-0 y-4 mx-2">
        <div className=" w-full md:w-2/4 flex flex-row   items-center justify-center  h-full md:h-2/4  ">
          <div className="w-3/4 h-full  ">
            <img
              src={image}
              alt="banner image"
              className="object-contain w-full h-2/4 "
            />
          </div>
        </div>
        <div className="p-4  w-full md:w-2/4  h-full md:h-auto">
          <h1 className="text-justify text-white text-base  capitalize font-medium">
            {title1}
          </h1>
          <h1 className="text-4xl text-justify capitalize text-white font-bold py-1 ">
            {title2}
          </h1>
          <p className="text-xl text-justify py-2 font-normal">{details}</p>
          {qualities.map((e, i) => {
            return (
              <ul
                key={i}
                className="text-justify flex text-xl capitalize text-white font-normal py-1"
              >
                <img
                  src={done}
                  className="w-8 px-2 opacity-25   object-contain"
                  alt=""
                />
                <li>{e}</li>
              </ul>
            );
          })}
          <div className="mt-20">
            <Button />
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default BannerItem;
