import React from "react";
import image from "../Assests/assets/category/gaming.png";
import Slider from "react-slick";
import HeroHome from "./HeroHome";
import Headings from "./Headings";
import BestOffer from "./BestOffer";
import Button from "./Button";
import ProductBanner from "./ProductBanner";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="z-0 p-0 md:px-12">
      <div className="w-full hero-container h-full  ">
        <div className="w-full h-screen  hero flex-container">
          <div className=" w-full md:w-[45%]">
            <h2 className=" text-xl md:text-2xl px-4 uppercase text-white">
              sunlight Power
            </h2>
            <h1 className="md:text-6xl text-4xl text- text-white px-4 capitalize">
              real power Supply
            </h1>

            <div className="px-4 text-2xl -tracking-wide my-4  text-white space-x-4">
              <p className="text-2xl p-2 capitalize space-x-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                reiciendis rerum Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit.
              </p>

              <ul className="text-2xl space-y-2 my-2">
                <li>20,000h of high votage</li>
                <li>20,000h of high votage</li>
                <li>20,000h of high votage</li>
              </ul>
            </div>

            <div className="flex justify-between items-center mt-12 px-4 flex-row">
              <div>
                <h3 className="text-white text-3xl text-pretty text-center">
                  Best Price: $50
                </h3>
              </div>

              <div className="flex flex-row w-full md:w-46 gap-4">
                <Button />
              </div>
            </div>
          </div>
          <div className=" md:w-[40%]  w-full">
            <div className="w-full h-full">
              <img src={image} alt="placeholder" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <HeroHome />
      <ProductBanner />
      <Headings />
      <BestOffer />
    </section>
  );
};

export default Hero;
