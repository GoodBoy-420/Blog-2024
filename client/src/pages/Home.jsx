import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import BlogList from "../components/BlogList";

const Home = () => {
  return (
    <>
      <Menu />
      <Slider />
      <section className="container my-5">
        <h2>Latest Blogs</h2>
        <BlogList />
      </section>
      <section className="container my-5">
        <h2>Custom Section</h2>
        <p>This is a custom section for your agency.</p>
      </section>
      <Footer />
    </>
  );
};

export default Home;
