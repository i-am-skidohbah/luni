import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItems from "../components/ProductItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductGrids from "../components/AllProducts";

import grid from "../Assests/grid.png";

const Products = () => {
  const { ProductData } = useContext(ShopContext);

  const [List, SetList] = useState([]);

  useEffect(() => {
    SetList(ProductData.slice(0, 6));
  }, []);
  return (
    <>
      <section className="bg-white w-full h-full common-padding">
        <div className="w-full flex justify-center flex-col items-center ">
          <div className=" py-6  flex justify-start w-3/4">
            <h1 className="text-bold  text-justify text-2xl">
              Popular Products
            </h1>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-6  place-items-center gap-x-0 gap-y-1 justify-center w-full md:w-3/4">
            {List.map((each, index) => {
              return (
                <ProductItems
                  key={index}
                  image={each.imgs}
                  productId={each.id}
                  brand={each.Brand}
                  price={each.price}
                  title={each.title}
                />
              );
            })}
          </div>{" "}
        </div>

        <AllProducts />
        <TopSearch />
      </section>
      <Advert />
    </>
  );
};

const AllProducts = () => {
  const { ProductData } = useContext(ShopContext);

  const [List, SetList] = useState([]);
  const [show, Setshow] = useState(true);
  const Show = () => {
    Setshow(!show);
  };
  useEffect(() => {
    SetList(ProductData);
  }, []);
  return (
    <section className="bg-white w-full h-full common-padding">
      <div className="w-full flex justify-center flex-col items-center ">
        <div className="flex justify-start gap-6 w-full md:w-3/4  py-5 px-8">
          <h1 className="md:py-5  text-justify text-xl">All Products</h1>
          <div className="flex justify-center items-center px-4">
            <button
              className="w-1/4 font-bold   px-4
              py-5 text-center"
              onClick={Show}
            >
              <img src={grid} className="w-56" alt="" />
            </button>
          </div>
          <div className="md:w-1/4 w-full">
            <select name="" id="" className="w-full px-4 py-5 border ">
              <option value="">filter</option>
              <option value="Pannel">Pannel</option>
              <option value="Inverter">Inverter</option>
              <option value="batter">battery</option>
            </select>
          </div>

          <div className="md:w-1/4 w-full">
            <input type="text" className="w-full  px-4 py-5 border" />
          </div>
        </div>
        {show ? (
          <div className="grid md:grid-cols-4  grid-cols-2 place-items-center gap-x-0 gap-y-1 justify-center w-full md:w-3/4">
            {List.map((each, index) => {
              return (
                <ProductItems
                  key={index}
                  image={each.imgs}
                  productId={each.id}
                  brand={each.Brand}
                  price={each.price}
                  title={each.title}
                />
              );
            })}
          </div>
        ) : (
          <div className="  place-items-center gap-x-0 gap-y-1 justify-center  w-full md:w-3/4">
            {List.map((each, index) => {
              return (
                <ProductGrids
                  key={index}
                  image={each.imgs}
                  productId={each.id}
                  brand={each.Brand}
                  title={each.title}
                  price={each.price}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
const TopSearch = () => {
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
    slidesToScroll: 1,
  };
  const { ProductData } = useContext(ShopContext);

  const [search, Setsearch] = useState([]);

  useEffect(() => {
    Setsearch(ProductData.slice(2, 6));
  }, []);
  return (
    <div className="w-full flex justify-center flex-col items-center bg-white common-padding">
      <div className=" py-6  flex justify-start w-3/4">
        <h1 className="text-bold  text-justify text-2xl">Top Searches</h1>
      </div>
      <div className=" grid-cols-1 md:grid-cols-6   place-items-center gap-x-0 gap-y-1 justify-center w-full md:w-3/4">
        <Slider {...settings}>
          {search.map((each, index) => {
            return (
              <ProductItems
                key={index}
                image={each.imgs}
                productId={each.id}
                brand={each.Brand}
                price={each.price}
                title={each.title}
              />
            );
          })}
        </Slider>
      </div>{" "}
    </div>
  );
};

const Advert = () => {
  return (
    <div className="flex justify-center items-center  bg-green-600 common-padding ">
      <div className="flex justify-center w-1/4 items-center p-4">
        <h1 className="text-2xl  uppercase text-white">
          dont miss your choice
        </h1>
      </div>
      <div className="flex justify-center items-center p-4">
        <p>only 200 promo code on discount</p>
      </div>
      <div className="flex justify-center  items-center p-4 gap-4">
        <input
          type="text"
          className="w-full text-bold bg-transparent text-white"
          required
          placeholder="Enter Your Email "
        />
        <button className="border border-white text-white rounded-xl py-2 px-6 text-center font-bold">
          submit
        </button>
      </div>
    </div>
  );
};
export default Products;
