import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartItems = ({ cardData }) => {
  //   const { cart, dispatch } = useContext(ShopContext);
  //   const Increasement = (id) => {
  //     const Index = cart.findIndex((p) => p.id === id);
  //     if (cart[Index].quantity < 10) {
  //       dispatch({ type: "Increament", id });
  //     }
  //   };

  // yet to be implemented

  //   const Decreasement = (id) => {
  //     const Index = cart.findIndex((p) => p.id === id);
  //     if (cart[Index].quantity > 1) {
  //       dispatch({ type: "Decreament", id });
  //     }
  //   };
  console.log(cardData);
  return (
    <div className=" w-full flex items-start ">
      <div className="flex flex-col justify-between w-full items-center">
        {cardData &&
          cardData.map((e, i) => {
            return (
              <div
                key={i}
                className="flex justify-center md:flex-row flex-col gap-6 border w-full md:w-2/4 items-center"
              >
                <img src={e.imgs[0]} alt="" className="w-28 h-28" />
                <div className="  w-2/4">
                  <h2 className="text-black">{e.Brand}</h2>
                  <p className="text-black text-2xl font-normal">{e.price}</p>
                  <p className="text-sm leading-normal text-black">{e.title}</p>
                  <div className="flex justify-center items-center gap-3 border my-2 ">
                    <button className="border w-full bg-gray-700 text-white px-2 py-2">
                      <b>+</b>
                    </button>
                    <h3 className="text-2xl px-4">{e.quantity}</h3>
                    <button className="border w-full bg-gray-700 text-white px-2 py-2">
                      <b>-</b>
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CartItems;
