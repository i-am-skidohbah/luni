import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import BannerItem from "./BannerItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const { BannerData } = useContext(ShopContext);
  const [Data, setData] = useState([]);
  useEffect(() => {
    setData(BannerData.slice(0, 2));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" w-full h-auto relative bg-white ">
      <Slider {...settings}>
        {Data.map((each, index) => {
          return (
            <BannerItem
              key={index}
              title1={each.title1}
              title2={each.title2}
              image={each.image}
              details={each.details}
              qualities={each.qualities}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
