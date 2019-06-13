import React from "react";
import Slider from "react-slick";
//import slide1 from "../../../../src/resources/images/banner/img2.png";
//import slide1 from "../../../../src/resources/images/slide1.png";
//import slide3 from "../../../../src/resources/images/slide1.png";
//import slide4 from "../../../../src/resources/images/slide1.png";
//import slide5 from "../../../src/resources/images/concert_five.jpg";
import slide1 from "../../../resources/images/banner/banner1.png";
import slide2 from "../../../resources/images/banner/banner2.png";
import slide3 from "../../../resources/images/banner/banner3.png";
import slide4 from "../../../resources/images/banner/banner4.png";
const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={slide1} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={slide2} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={slide3} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
