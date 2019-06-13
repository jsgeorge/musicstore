import React from "react";
import Carousel from "./carousel";

const Featured = () => {
  return (
    <div className="banner">
      {/* <div
    //     className="jumbotron"
    //     style={{
    //       height: `${window.innerHeight}px`,
    //       overflow: "hidden"
    //     }}
    //   >
    //     <div className="container">
    //       <div className="jumboText" />
    //     </div>
    //   </div> */}
      {/* <img src={"resources/images/banner/img2.png"} alt="banner" /> */}

      <Carousel />
    </div>
  );
};

export default Featured;
