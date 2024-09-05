import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItems from "./ProductItems";

const RelatedCategory = ({ category }) => {
  const { ProductData } = useContext(ShopContext);

  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    if (ProductData.length > 0) {
      let ProductDataCopy = ProductData.slice();

      ProductDataCopy = ProductDataCopy.filter(
        (item) => category === item.category
      );
      setCategoryData(ProductDataCopy.slice(0, 5));
    }
  }, [ProductData]);

  return (
    <>
      {categoryData.map((each, index) => {
        return (
          <ProductItems
            key={index}
            image={each.imgs}
            productId={each.id}
            brand={each.Brand}
            category={each.category}
            price={each.price}
            title={each.title}
          />
        );
      })}
    </>
  );
};

export default RelatedCategory;
