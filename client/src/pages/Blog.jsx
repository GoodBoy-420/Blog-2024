import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";

const About = () => {
  return (
    <>
      <Menu />
      <section className="container my-5">
        <h2>Our Blogs</h2>
        <BlogList />
      </section>
      <Footer />
    </>
  );
};

export default About;
