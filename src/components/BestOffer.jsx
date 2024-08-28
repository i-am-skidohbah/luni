import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { Offer, TimeCountData } from "../constants";
import { useState } from "react";
import Slider from "react-slick";
const BestOffer = () => {
  const [OfferData, setOfferDate] = useState(Offer);
  const [TimeCount, setTimeCount] = useState(TimeCountData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full  h-full border bg-white ">
      {OfferData.map((each) => {
        return (
          <div className="flex items-center justify-center md:flex-row flex-col w-full h-full  gap-6 p-6">
            <div className=" w-full md:w-[40%] h-full">
              <img
                src={each.image}
                alt="offer page"
                className="w-full rounded-xl object-cover"
              />
            </div>

            <div className="h-full  w-full md:w-[30%]">
              <div className=" h-full w-full px-4 ">
                <h2 className="  text-black  text-2xl md:text-4xl uppercase ">
                  {each.advert}{" "}
                </h2>
                <h2 className="text-black  capitalize font-semibold tracking-tighter">
                  best price:{" "}
                  <span className="text-green-500 font-bold">
                    {" "}
                    {each.price}
                  </span>
                </h2>
                <div className="flex items-center w-full h-full justify-between gap-4">
                  {TimeCount.map((time) => {
                    return (
                      <div className="w-full h-auto  items-center py-8  ">
                        <div className="flex text-white text-xl rounded-xl flex-col items-center border border-green-600 justify-center">
                          <h1 className="text-black text-xl ">{time.time}</h1>
                          <h1 className="text-green-300 text-sm">
                            {time.category}
                          </h1>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-black  text-base md:text-2xl tracking-wider capitalize ">
                  {each.Details}
                </p>
              </div>
              <Button />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BestOffer;
