import { Link } from "react-router-dom";
import Buttons from "./Buttons";
const ProductItems = ({ image, Name, Details, price, id }) => {
  return (
    <Link to={`products/${id}`}>
      <div className="w-full px-6 border-r  h-full group cursor-grab relative">
        <div className="w-full h-full flex items-center justify-center  backdrop-blur">
          <img src={image} alt="" className="  w-full  md:w-48 h-full " />
          <div className="group-hover:flex flex-col  items-center hidden justify-center absolute top-0 bottom-10">
            <Buttons />
          </div>
        </div>

        <div className="w-full h-full ">
          <h1 className="text-orange-300  uppercase text-sm ">{Name}</h1>
          <h1 className="text-black text-xl group-hover:duration-75 group-hover:text-green-400">
            Home Saver
          </h1>

          <div className="py-4 relative">
            <p className="text-sm  text-black font-normal">{Details}</p>
            {/* the hovering effect yet to be activated */}
            {/* <div className=" items-center hidden justify-start gap-1">
            <img src={done} alt="" className="w-6 py-4" />
            <img src={eye} alt="" className="w-10 py-4" />
            <img src={heart} alt="" className="w-6 py-4" />
          </div> */}
            {/*  */}
          </div>
          <p className="text-black text-xl tracking-wide space-x-4 font-bold">
            {price}
          </p>
        </div>

        <hr className="w-full" />
      </div>
    </Link>
  );
};

export default ProductItems;
