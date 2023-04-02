import React from "react";
import { Carousel } from "react-bootstrap";
import './slider.css'
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.png';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';

const Slider = () => {
  return (
    <div className="slider">
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://icac3n.in/ICAC3N_2023/Header_ICAC3n-2023.jpeg"
            alt="First slide"
          />
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="First slide"
          />
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>IEEE ICAC3N-18</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Honorable Chairman Shri Suneel Galgotia and CEO Mr. Dhruv Galgotia with Honorable Prime Minister of India Shri Narendra Modi</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Honorable CEO Mr. Dhruv Galgotia with Late President Shri Pranab Mukherjee</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img6}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Honorable Chairman Shri Suneel Galgotia with Honorable Chief Minister Shri Yogi Adityanath.</p>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
    </div>
  );
};

export default Slider;
