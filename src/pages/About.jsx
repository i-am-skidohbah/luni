import React from "react";
import AboutPageCaro, {
  AboutUs,
  Services,
  Team,
  Brands,
} from "../components/AboutPageCaro";
import Headings from "../components/Headings";



const About = () => {
  return (
    <section className="">
      <AboutPageCaro />

      <AboutUs />
      <Services />
      <Headings tips="our teams" title="meet with proffessionals" />
      <Team />

      <Brands />
    </section>
  );
};

export default About;
