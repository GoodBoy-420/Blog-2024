import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import TeamList from "../components/TeamList";

const About = () => {
  return (
    <>
      <Menu />
      <section className="container my-5">
        <h2>About Us</h2>
        <p>We are a professional blog agency offering top-tier services.</p>
        <h1>Meet Our team members-</h1>
        <TeamList />
      </section>
      <Footer />
    </>
  );
};

export default About;
