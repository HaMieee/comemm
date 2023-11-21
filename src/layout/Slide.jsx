import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Slide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div style={{width :'100%'}}>
        <img style={{width :'100%'}}
          src="https://static.comem.vn/uploads/November2023/2294x796_(2).jpg"
          alt=""
        />
      </div>
      <div style={{width :'100%'}}>
        <img style={{width :'100%'}}
          src="https://static.comem.vn/uploads/September2023/6.jpg"
          alt="Slide 1"
        />
      </div>
      <div style={{width :'100%'}}>
        <img style={{width :'100%'}}
          src="https://static.comem.vn/uploads/July2023/1a51e9aec24712194b56.jpg"
          alt="Slide 2"
        />
      </div>
      <div style={{width :'100%'}}>
        <img style={{width :'100%'}}
          src="https://static.comem.vn/uploads/October2023/2294x796-3.jpg"
          alt="Slide 3"
        />
      </div>
      <div style={{width :'100%'}}>
        <img style={{width :'100%'}}
          src="https://static.comem.vn/uploads/August2023/2294x796.jpg"
          alt="Slide 4"
        />
      </div>
    </Slider>
  );
}

export default Slide;
