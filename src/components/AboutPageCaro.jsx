import React from "react";
import pannel from "../Assests/panel.jpg";
import solar from "../Assests/solar 2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Brand } from "../constants";

const AboutPageCaro = () => {
  return (
    <div className="w-full h-[650px]   relative">
      <div className="w-full  h-full sticky">
        <img
          src={pannel}
          className="w-full h-full object-fill opacity-100"
          alt=""
        />
      </div>
      <div className="absolute top-36 left-0 right-0 bottom-0">
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-center text-white py-4 text-6xl uppercase">
            LIGHTUP NIGERIA
          </h1>
          <hr className="w-32 bg-white h-1" />
          <p className="text-center text-white text-2xl py-4">
            “Lightup Nigeria Solar Power Ltd offers innovative, affordable, and sustainable solar energy solutions to empower homes and businesses across Nigeria, 
            reducing energy costs and promoting environmental responsibility.”
          </p>
        </div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <section className=" px-3 bg-white pb-24 md:pt-36">
      <div className="flex items-center md:flex-row flex-col gap-3 justify-center w-full">
        <div className=" w-full md:w-[35%]">
          <h1 className="text-balance text-base text-justify pt-6 md:py-4">
            About us
          </h1>
          <h1 className="text-black text-5xl py-6 font-bold">Welcome to Our World of Solar Power Excellence!</h1>
          <hr className="w-24" />
          <p className="text-justify text-black  py-4 text-xl">

Lightup Nigeria Solar Power Ltd was incorporated in August 2020 with Corporate Affairs Commission under the Company and Allied Masters Act Laws of the Federation of Nigeria with RC No: 1700859. 
            
          </p>
        </div>

        <div className=" w-full md:w-[35%] ">
          <p className=" text-justify text-black text-xl py-2">
           We offer innovative, afforable, and sustainable solar energy solutions to power homes and businesses across Nigeria, 
            reducing energy costs and promoting environmental responsibility with the use of lithium phosphate technology
          </p>
        </div>
      </div>
    </section>
  );
};

export const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white p-4">
      <div className="flex items-center md:flex-row flex-col justify-center px-4 gap-4  py-6">
        <div className=" w-full md:w-1/4">
          <div className="w-full">
            <img src={solar} className="w-full rounded-xl" alt="" />
          </div>
          <div>
            <h1 className="text-center py-4 font-bold text-2xl">
              Installation
            </h1>
            <p className="text-center text-black text-xl text-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto in
              cum ducimus fugiat magnam.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-1/4">
          <div className="w-full">
            <img src={solar} className="w-full rounded-xl" alt="" />
          </div>
          <div>
            <h1 className="text-center font-bold py-4 text-2xl">Vendor</h1>
            <p className="text-center text-black text-xl text-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto in
              cum ducimus fugiat magnam.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-1/4">
          <div className="w-full">
            <img src={solar} className="w-full rounded-xl" alt="" />
          </div>
          <div>
            <h1 className="text-center font-bold py-4 text-2xl">Fixing</h1>
            <p className="text-center text-black text-xl text-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto in
              cum ducimus fugiat magnam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Team = () => {
  return (
    <div className="bg-white  px-6 md:px-44">
      <div className=" grid grid-cols-1 place-items-center gap-4 w-full justify-center md:grid-cols-3 ">
        <div className="w-full h-[600px] ">
          <div className=" w-full h-3/4 bg-green-300"></div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-full h-[600px] ">
          <div className=" w-full h-3/4 bg-green-300"></div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[600px] ">
          <div className=" w-full h-3/4 bg-green-300"></div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Brands = () => {
  return (
    <div className="bg-white px-36 pb-32">
      <div className="w-full md:grid hidden gap-6 place-items-center justify-center md:grid-cols-5">
        {Brand.map((e, i) => {
          return (
            <div key={i} className="w-full">
              <img src={e} alt="" className="w-32" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AboutPageCaro;
