import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const { ProductData } = useContext(ShopContext);

  const [productDetail, setProductDetail] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductDetail = async () => {
    ProductData.map((item) => {
      if (item._id == productId) {
        setProductDetail(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductDetail();
  }, [ProductData, productId]);

  return productDetail ? (
    <div className="flex common-padding md:h-screen items-center justify-center h-full ">
      <div className="flex md:flex-row  flex-col border border-black items-center md:items-stretch w-full md:w-3/4 px-6 py-5 gap-4">
        <div className="flex md:flex-col-reverse  w-full justify-center md:w-1/4 flex-row items-center px-4">
          {productDetail.image.map((item) => {
            return (
              <img
                src={item}
                alt=""
                className="w-44 overflow-auto overflow-y-auto"
                onClick={() => setImage(item)}
              />
            );
          })}
        </div>

        <div className="w-[40%] common-padding">
          <img src={image} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[35%] w-full ">
          <h2 className="py-3 capitalize">{productDetail.Name}</h2>
          <h3 className="py-2 font-bold">Rating</h3>
          <p className="text-black leading-10 py-2">{productDetail.details}</p>

          <div className="">
            <h1>Select Color</h1>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetails;
