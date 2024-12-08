import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/man-writing-blog-paper-wooden-working-table_218381-6369.jpg?w=1060"
          alt="First slide"
          style={{ width: "800px", height: "500px" }}
        />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>Welcome to Blog Agency</h3>
          <p style={{ color: "black" }}>
            Your one-stop solution for blogging needs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/cut-paper-inscription-blogger-red-background_134398-11545.jpg?w=1060"
          alt="Second slide"
          style={{ width: "800px", height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Quality Content</h3>
          <p>We provide top-notch blog content for your website.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
