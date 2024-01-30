import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return ( 
      <Slider {...settings}>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%" }}
            src="http://127.0.0.1:5500/img/banner/banner2.png"
            alt=""
          />
        </div>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%" }}
            src="http://127.0.0.1:5500/img/banner/banner.png"
            alt="Slide 1"
          />
        </div>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%", height:"673px"}}
            src="https://khachsan.webmatrix.vn/wp-content/uploads/2017/06/banner2-1400x721.jpg"
            alt=""
          />
        </div>

        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%", height:"673px"}}
            src="https://khachsan.webmatrix.vn/wp-content/uploads/2017/06/banner1-1400x721.jpg"
            alt=""
          />
        </div>
      </Slider>
  );
}

export default Slide;
