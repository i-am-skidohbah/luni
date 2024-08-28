import React, { useEffect, useState } from "react";
import { ProductBannerData } from "../constants/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import eye from "../Assests/eye.jpg";
import done from "../Assests/done.jpg";
import heart from "../Assests/heart.jpg";
import Button from "./Button";
const ProductBanner = () => {
  const [Data, setData] = useState(ProductBannerData);
  const Numberone = 1;
  const Numberfour = 4;
  const [size, setSize] = useState(
    window.innerWidth < 760 ? Numberone : Numberfour
  );
  const changeSize = () => {
    if (window.innerWidth < 760) {
      setSize(Numberone);
    } else {
      setSize(Numberfour);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: size,
    slidesToScroll: 2,
  };
  return (
    <div className="w-full max-h-[500px] min-h-[auto] py-6 bg-white">
      <Slider {...settings} className=" px-4  flex flex-col md:flex-row  ">
        {Data.map((each) => {
          return (
            <div className="w-full px-6  shadow h-full group cursor-grab relative">
              <div className="w-full h-full flex items-center justify-center backdrop-blur">
                <img
                  src={each.image}
                  alt=""
                  className="  w-44  md:w-48 h-full "
                />
                <div className="group-hover:flex flex-col gap-4 items-center hidden justify-center absolute top-0 bottom-10">
                  <Button />
                </div>
              </div>

              <div className="w-full h-full ">
                <h1 className="text-orange-300  uppercase text-sm ">
                  {each.version}
                </h1>
                <h1 className="text-black text-xl group-hover:duration-75 group-hover:text-green-400">
                  Home Saver
                </h1>

                <div className="py-4 relative">
                  <p className="text-sm  text-black font-normal">
                    {each.details}
                  </p>
                  {/* the hovering effect yet to be activated */}
                  <div className=" items-center hidden justify-start gap-1">
                    <img src={done} alt="" className="w-6 py-4" />
                    <img src={eye} alt="" className="w-10 py-4" />
                    <img src={heart} alt="" className="w-6 py-4" />
                  </div>
                  {/*  */}
                </div>
                <p className="text-black text-xl tracking-wide space-x-4 font-bold">
                  {each.price}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductBanner;
