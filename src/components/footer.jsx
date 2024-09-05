import React from "react";
import logo from "../Assests/luni_logo_124503.png";
import logo1 from "../Assests/facebook.png";
import logo2 from "../Assests/whatsapp.png";
import logo3 from "../Assests/instagram.png";
const Footer = () => {
  return (
    <div className="w-full flex justify-center h-full  md:h-[500px] bg_footer">
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-4 h-[80%] place-items-start border-b border-green-100 py-5 px-4">
        <div className="  px-6 py-4">
          <section>
            <div className="flex items-center  ">
              <img
                src={logo}
                className="w-44  h-44 object-contain px-6"
                alt=""
              />
              <h2 className="text-white capitalize">light Up Nigerial LTD</h2>
            </div>
            <div>
              <p className="font-extralight text-center italic text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente voluptate
              </p>
            </div>
          </section>
        </div>

        {/* the first */}
        <div className="flex  px-6 py-4  flex-col  ">
          <div>
            <h2 className="text-white text-bold capitalize text-2xl py-4">
              important LInks
            </h2>
            <p className="text-xl leading-normal capitalize">product</p>
            <p className="text-xl leading-normal capitalize ">home</p>
            <p className="text-xl leading-normal capitalize ">about</p>
            <p className="text-xl leading-normal capitalize ">carts</p>
          </div>

          <div>
            <h2 className="text-white text-bold capitalize text-2xl py-1">
              services
            </h2>
            <p className="text-xl leading-normal capitalize ">product</p>
            <p className="text-xl leading-normal capitalize ">home</p>
          </div>
        </div>
        <div className="flex r  px-6 py-4  flex-col ">
          <div>
            <h2 className="text-white text-bold capitalize text-2xl py-4">
              Comapany LInks
            </h2>
            <p className="text-xl leading-normal capitalize ">installation</p>
            <p className="text-xl leading-normal capitalize ">fixing</p>
            <p className="text-xl leading-normal capitalize ">vendor</p>
            <p className="text-xl leading-normal capitalize ">repair</p>
          </div>
          <div>
            <h2 className="text-white text-bold capitalize text-2xl py-4">
              Address
            </h2>
            <p className="text-xl leading-normal capitalize ">installation</p>
            <p className="text-xl leading-normal capitalize ">fixing</p>
          </div>
        </div>
        <div className="flex  flex-col px-6 py-4  w-full ">
          <h2 className="text-base capitalize text-white">get in out</h2>
          <div className="w-2/4 flex justify-start items-center gap-6 py-5">
            <img src={logo1} className="w-8 h-8" alt="" />
            <img src={logo2} className="w-8 h-8" alt="" />
            <img src={logo3} className="w-8 h-8" alt="" />
          </div>
          <div className="relative">
            <input type="text" className="bg-white  rounded-lg w-full" />
            <button className="text-white   px-2 py-2 text-bold ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
