import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestOfferCarosel from "./BestOfferCarosel";

import { ShopContext } from "../Context/ShopContext";

import { useState, useContext } from "react";
const BestOffer = () => {
  const { BestOffer } = useContext(ShopContext);

  // fitering the best sellers products using the object property "bestSellers"

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full  h-full border bg-white ">
      <Slider {...settings}>
        {BestOffer.map((e, i) => {
          return (
            <BestOfferCarosel
              price={e.price}
              Details={e.Details}
              image={e.image}
              advert={e.advert}
              time={e.time}
              category={e.category}
              key={i}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default BestOffer;
