/* eslint-disable react/prop-types */
"use client";

import { useEffect } from "react";
import Slider from "react-slick";

// Import CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  useEffect(() => {
    // Dynamically import CSS to avoid SSR issues
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 images on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Under 1024px
        settings: {
          slidesToShow: 1, // Show 1 image under 1024px
        },
      },
    ],
  };

  return (
    <div className=" max-w-screen-lg mx-auto ">
      <Slider {...sliderSettings}>
        {images.map((src, index) => (
          <div key={index} className="outline-none">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-cover " // Set a fixed height for all images
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
