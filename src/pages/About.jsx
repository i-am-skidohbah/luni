import React from "react";
import AboutPageCaro, {
  AboutUs,
  Services,
  Team,
  Brands,
} from "../components/AboutPageCaro";
import Headings from "../components/Headings";
import Footer from "../components/footer";

const About = () => {
  return (
    <section className="">
      <AboutPageCaro />

      <AboutUs />
      <Services />
      <Headings tips="our teams" title="meet with proffessionals" />
      <Team />
      <Headings tips="our brands" title="best of the bests" />
      <Brands />
      <Footer />
    </section>
  );
};

export default About;
