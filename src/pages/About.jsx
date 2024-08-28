import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="w-44 h-[100px] flex items-center justify-center px-4 bg-green-200">
        <h1>example1</h1>
      </div>
      <div className="w-44 h-[100px] flex items-center justify-center px-4 bg-green-200">
        <h1>example2</h1>
      </div>
      <div className="w-44 h-[100px] flex items-center justify-center px-4 bg-green-200">
        <h1>example3</h1>
      </div>
      <div className="w-44 h-[100px] flex items-center justify-center px-4 bg-green-200">
        <h1>example4</h1>
      </div>
    </Slider>
  );
};

export default About;
