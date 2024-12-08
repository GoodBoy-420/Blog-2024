import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const About = () => {
  return (
    <>
      <Menu />
      <section className="container my-5">
        <h2>Our Services-</h2>
        <ServiceList />
      </section>
      <Footer />
    </>
  );
};

export default About;
