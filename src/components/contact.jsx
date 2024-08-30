import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-white h-[500px] py-8">
      <div className="flex w-full items-center justify-center px-6 py-4">
        <div className="w-3/4">
          <form className="w-full" action="">
            <h1 className="text-center text-black uppercase text-base font-normal tracking-wider">
              <span className="text-green-400">special offer</span> for
              subscribers
            </h1>
            <h1 className="uppercase text-2xl md:text-4xl  text-black py-2 text-center font-bold">
              new offer every week + discount systerm + best prices
            </h1>
            <p className="text-center text-base text-black py-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              assumenda nostrum ipsum sed.
            </p>
            <div className="flex justify-center items-center gap-2">
              <input
                type="email"
                required
                className="w-3/4 bg-gray-300 font-bold capitalize rounded-xl px-6 py-2"
                placeholder="Enter your Email "
              />
              <button className="text-center font-bold px-4 py-2 text-black bg-green-400 rounded-xl capitalize">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
