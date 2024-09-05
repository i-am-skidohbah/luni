import React, { useEffect, useState, useContext } from "react";
import Headings from "../components/Headings";
import { ShopContext } from "../Context/ShopContext";
import CartItems from "../components/CartItems";

const Carts = () => {
  const { cart } = useContext(ShopContext);

  const [Data, setData] = useState([]);
  useEffect(() => {
    setData(cart);
  }, [cart]);

  return (
    <section className="bg-white h-full common-padding">
      <div className="py-10">
        <Headings tips="shopping Carts" title="check your products" />
      </div>
      {/* <CartItems cardData={Data} /> */}
    </section>
  );
};

export default Carts;
