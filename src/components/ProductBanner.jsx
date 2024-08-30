import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductItems from "./ProductItems";
const ProductBanner = () => {
  const { ProductData } = useContext(ShopContext);

  console.log(ProductData);
  const [LatestProduct, setLatestProduct] = useState([]);

  // slider responsiveness
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

  //

  useEffect(() => {
    setLatestProduct(ProductData.slice(0, 10));
  }, []);

  //  making the slider with third party Api
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: size,
    slidesToScroll: 2,
  };

  //
  return (
    <div className="w-full max-h-[500px] min-h-[auto] py-6 bg-white">
      <Slider {...settings} className=" px-4  flex flex-col md:flex-row  ">
        {/* rendering the Latest  Products  */}

        {LatestProduct.map((each, index) => {
          return (
            <ProductItems
              key={index}
              image={each.image}
              id={each.id}
              Name={each.Name}
              price={each.price}
              Details={each.details}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductBanner;
