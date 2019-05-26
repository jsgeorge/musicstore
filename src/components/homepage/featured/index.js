import React from "react";
import Carousel from "./carousel";

const Featured = () => {
  return (
    <div className="featured-wrapper">
      <div
        className="jumbotron"
        style={{
          height: `${window.innerHeight}px`,
          overflow: "hidden"
        }}
      >
        <div className="container">
          <div className="jumboText" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
