import React, { useState } from "react";
import pannel from "../Assests/solar 4.jpg";
import done from "../Assests/done.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

const BannerItem = ({ image, title1, title2, details, id, qualities }) => {
  return (
    <Link to={`product/${id}`}>
      <div className="hero-banner hero-container w-full py-4 h-full cursor-grab  ">
        {/* backgground image */}
        <img
          src={pannel}
          className="w-full object-cover h-full  absolute top-0 bottom-0 opacity-15"
          alt=""
        />
        {/*  */}
        <div className="flex md:flex-row flex-col items-center w-full justify-center p-4 mx-2">
          <div className=" w-full md:w-[35%]   h-full md:h-[35%]   px-4 ">
            <div className="w-full h-full  ">
              <img
                src={image}
                alt="banner image"
                className="object-contain w-full h-2/4 px-4"
              />
            </div>
          </div>
          <div className="p-4  w-full md:w-[35%]   h-full md:h-[35%]">
            <h1 className="text-justify text-white text-xl tracking-wider capitalize font-medium">
              {title1}
            </h1>
            <h1 className="text-6xl text-justify capitalize text-white font-bold py-2 ">
              {title2}
            </h1>
            <p className="text-2xl text-justify py-3 font-semibold">
              {details}
            </p>
            {qualities.map((e, i) => {
              return (
                <ul
                  key={i}
                  className="text-justify flex text-2xl capitalize text-white font-bold tracking-wide py-1"
                >
                  <img
                    src={done}
                    className="w-14 opacity-25   px-4 object-contain"
                    alt=""
                  />
                  <li>{e}</li>
                </ul>
              );
            })}
            <div className="py-4">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BannerItem;
