import React from "react";
import { ShopContext } from "../Context/ShopContext";
import Slider from "react-slick";
import HeroHome from "./HeroHome";
import Headings from "./Headings";
import BestOffer from "./BestOffer";
import ProductBanner from "./ProductBanner";
import HeroCarousel from "./heroCarousel";
import Banner from "./Banner";
import { useContext, useEffect } from "react";

import { useState } from "react";
import NewProducts from "./newProducts";
import ProductList from "./productList";
import ViewAll from "./viewAll";
import Fields from "./Fields";
import Contact from "./contact";
import Footer from "./footer";

const Hero = () => {
  const { productCarousel } = useContext(ShopContext);

  const [caroData, setCaroData] = useState([]);

  useEffect(() => {
    setCaroData(productCarousel.slice(0, 2));
  }, []);

  // slider using third party Api
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //
  return (
    <section className="z-0 p-0   md:px-12">
      <Slider {...settings}>
        {caroData.map((i, index) => {
          return (
            <HeroCarousel
              key={index}
              title1={i.title1}
              title2={i.title2}
              details={i.details}
              price={i.price}
              image={i.image}
              qualities={i.qualities}
            />
          );
        })}
      </Slider>
      <HeroHome />
      <ProductBanner />
      <Headings tips="special offer" title="choose the best" />
      <BestOffer />
      <Headings tips="new Arrivals" title="something new for you" />
      <NewProducts />
      <Banner />
      <Headings tips="Accessories" title="choosing in one style" />
      <ProductList />
      <ViewAll />
      <Fields />
      <Contact />
      <Footer />
    </section>
  );
};

export default Hero;
