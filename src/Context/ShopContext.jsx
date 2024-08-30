import { createContext } from "react";
import {
  ProductData,
  productCarousel,
  BestOffer,
  BannerData,
} from "../constants";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const deliveryFee = "$10";
  const value = {
    ProductData,
    deliveryFee,
    productCarousel,
    BestOffer,
    BannerData,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
