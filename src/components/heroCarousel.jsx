import Button from "../components/Button";

const HeroCarousel = ({ title1, title2, details, price, qualities, image }) => {
  return (
    <div className="w-full hero-container h-full ">
      <div className="w-full md:h-screen h-full hero flex-container common-padding px-4 md:px-32">
        <div className=" w-full md:w-2/4 py-4">
          <h2 className=" text-xl  uppercase text-white">{title1}</h2>
          <h1 className="text-4xl text-white capitalize">{title2}</h1>
          <div className=" ">
            <p className="text-xl  capitalize leading-normal py-1">{details}</p>
            {qualities.map((e, index) => {
              return (
                <p key={index} className="text-xl leading-normal">
                  {e}
                </p>
              );
            })}
          </div>

          <div className="flex justify-around items-center w-full flex-col md:flex-row ">
            <div className="md:w-2/4  w-full ">
              <h3 className="text-white text-2xl text-pretty py-2 ">
                Best Price:{price}
              </h3>
            </div>

            <div className="flex  w-full md:w-2/4  gap-4">
              <Button />
            </div>
          </div>
        </div>
        <div className=" md:w-2/4 flex items-center justify-center w-full">
          <div className="w-3/4 h-full">
            <img src={image} alt="placeholder" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
