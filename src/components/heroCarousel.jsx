import Button from "../components/Button";

const HeroCarousel = ({ title1, title2, details, price, qualities, image }) => {
  return (
    <div className="w-full hero-container h-full ">
      <div className="w-full md:h-screen h-full hero flex-container">
        <div className=" w-full md:w-[45%]">
          <h2 className=" text-xl md:text-2xl px-4  md:pt-0 pt-8 uppercase text-white">
            {title1}
          </h2>
          <h1 className="md:text-6xl text-4xl text- text-white px-4 capitalize">
            {title2}
          </h1>

          <div className="px-4 text-2xl -tracking-wide my-4  text-white space-x-4">
            <p className="text-2xl p-2 capitalize space-x-4">{details}</p>

            {qualities.map((e, index) => {
              return (
                <ul key={index} className="text-2xl space-y-2 my-2">
                  <li>{e}</li>
                </ul>
              );
            })}
          </div>

          <div className="flex justify-between items-center mt-12 px-4 flex-row">
            <div>
              <h3 className="text-white text-3xl text-pretty text-center">
                Best Price:{price}
              </h3>
            </div>

            <div className="flex flex-row w-full md:w-46 gap-4">
              <Button />
            </div>
          </div>
        </div>
        <div className=" md:w-[40%]  w-full">
          <div className="w-full h-full">
            <img src={image} alt="placeholder" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
