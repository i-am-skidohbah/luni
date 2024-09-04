import React from "react";
import AboutPageCaro from "../components/AboutPageCaro";
import img from "../Assests/solar 4.jpg";
import Headings from "../components/Headings";
import Contacts from "../components/contact";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-white">
      <AboutPageCaro
        Title={`contact us`}
        detail={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
            cum.`}
        image={img}
      />
      <Headings
        tips={`our contacts`}
        title={`we are ready for your questions`}
      />
      <Contacts />
    </div>
  );
};


export default Contact;
