import "./Slides.css";
import React, { useMemo } from "react";
import { Carousel } from "3d-react-carousal";
export default function Slides() {
  let slides = useMemo(() => [
    <img src="/image/carousel-image1.jpg" alt="1" className="slide-images" />,
    <img src="/image/carousel-image2.jpg" alt="2" className="slide-images" />,
    <img src="/image/carousel-image3.jpg" alt="5" className="slide-images" />,
  ],[]);
  return (
    <div>
      <Carousel slides={slides} autoplay={true} interval={3000} />
      <div id="welcome-browser-text">
        {" "}
        <p id="welcome-text">Welcome to Avowal Greens!!!</p>
        <p id="welcome-browse-text">
          Browse through different categories and grab your favourite
          microgreens now!
        </p>
      </div>
    </div>
  );
}