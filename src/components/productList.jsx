import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItems from "./ProductItems";
import ViewAll from "./viewAll";

const ProductList = () => {
  const { ProductData } = useContext(ShopContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(ProductData.slice(0, 17));
  }, []);
  return (
    <div className="w-full flex justify-center items-center flex-col bg-white common-padding">
      <div className="grid grid-cols-1 md:grid-cols-6  border place-items-center gap-x-0 gap-y-1 justify-center w-full ">
        {list.map((each, index) => {
          return (
            <ProductItems
              key={index}
              category={each.category}
              image={each.imgs}
              productId={each.id}
              brand={each.Brand}
              price={each.price}
              title={each.title}
            />
          );
        })}
      </div>
      <ViewAll />
    </div>
  );
};

export default ProductList;
