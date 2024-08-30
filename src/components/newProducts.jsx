import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import NewProductsItem from "./newProductsItem";

const NewProducts = () => {
  const { ProductData } = useContext(ShopContext);
  const [newProduct, setNewProduct] = useState([]);
  console.log(ProductData);

  useEffect(() => {
    setNewProduct(ProductData.slice(0, 8));
  }, []);

  return (
    <>
      <div className="bg-white py-6 px-4 grid border place-items-center gap-2 grid-cols-2 md:grid-cols-4">
        {newProduct &&
          newProduct.map((items, index) => {
            return (
              <NewProductsItem
                key={index}
                id={items.id}
                Name={items.Name}
                image={items.image}
                Details={items.details}
                category={items.category}
                price={items.price}
              />
            );
          })}
      </div>
    </>
  );
};

export default NewProducts;
