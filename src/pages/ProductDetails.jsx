import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import star from "../Assests/star.png";
import RelatedCategory from "../components/Related";
import Headings from "../components/Headings";

const ProductDetails = () => {
  const { productId } = useParams();
  const { ProductData, dispatch } = useContext(ShopContext);

  const [productDetail, setProductDetail] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductDetail = async () => {
    ProductData.map((item) => {
      if (item.id == productId) {
        setProductDetail(item);
        setImage(item.imgs[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductDetail();
  }, [ProductData, productId]);

  return productDetail ? (
    <section className="w-full md:px-44 bg-white px-4">
      <div className="flex common-padding  items-center border justify-center h-full bg-white ">
        <div className="flex md:flex-row  flex-col  w-full  h-full  py-5">
          <div className="flex md:flex-col-reverse   w-full justify-center md:w-1/4 flex-row items-center px-4 ">
            {productDetail.imgs.map((item) => {
              return (
                <img
                  src={item}
                  alt=""
                  className="md:w-36 w-full h-48 overflow-hidden"
                  onClick={() => setImage(item)}
                />
              );
            })}
          </div>

          <div className="md:w-2/4 w-full h-full common-padding">
            <img
              src={image}
              alt=""
              className="w-full h-3/4 object-contain px-6"
            />
          </div>

          <div className="md:w-2/4 w-full ">
            <h2 className="py-3 text-2xl capitalize">{productDetail.Brand}</h2>

            <div className="flex justify-start items-start w-1/4">
              <div>
                {" "}
                <img src={star} alt="" className="w-6" />
              </div>
              <div>
                <img src={star} alt="" className="w-6" />
              </div>
              <div>
                <img src={star} alt="" className="w-6" />
              </div>
              <div>
                <img src={star} alt="" className="w-6" />
              </div>
              <div>
                <img src={star} alt="" className="w-6" />
              </div>
              <h1 className="px-4 text-bold border rounded-lg py-1">
                {productDetail.rating}
              </h1>
            </div>
            <h3 className="py-2 font-bold">Rating</h3>

            <h2 className="text-2xl">{productDetail.price}</h2>
            <p className="text-black leading-10 py-2">
              {productDetail.details}
            </p>

            <div className="flex gap-4">
              <h2> Status</h2>
              <h2>
                {productDetail.inStock.length < 10 ? "9 unit Remainnig" : ""}
              </h2>
            </div>

            <div className="flex flex-col w-full  py-3">
              <h2 className="text-justify text-xl">Specifications</h2>
              <h2 className=" font-normal leading-normal text-sm px-6">
                {productDetail.specs}
              </h2>
            </div>

            <div className="flex">
              <button
                onClick={() =>
                  dispatch({ type: "Add", products: productDetail })
                }
                className="text-center rounded-lg px-4 py-5 bg-black text-white text-xl font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full pb-6 ">
        <h2 className="text-justify text-xl">Disclamer</h2>
        <h2 className="text-xl font-normal leading-10 px-4 ">
          You are expected to recieve your goods within 7 days of purchase{" "}
          <br />
          consult us if the delay pass one the expected duration
        </h2>
      </div>
      <Headings tips={`chose from `} title={`related category`} />
      <div className="grid md:grid-cols-5  grid-cols-2 common-padding border-b">
        <RelatedCategory category={productDetail.category} />
      </div>

      <h2>Reviews</h2>
      <div className="w-full h-auto grid md:grid-cols-4  grid-cols-1 py-8">
        {productDetail.reviews.map((e, i) => {
          return (
            <div key={i} className="px-4">
              <h2>{e.title}</h2>
              <p className="text-black text-sm">{e.content}</p>
              <div className="flex justify-between w-3/4 border-t py-6">
                <h3 className="text-start text-bold text-xl"> By :{e.name}</h3>
                <p className="text-black text-base">ratings{e.rating}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  ) : (
    <div className="opacity-0"> Not available</div>
  );
};



export default ProductDetails;

