import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

import Blog from "../../layout/Blog";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Banner from "../../component/banner/Banner";
import Product from "../../component/product/Product";
import Slide from "../../layout/Slide";

const Home = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Header />
      <Slide />
      <Swiper
        autoplay
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Product title="PHÒNG MỚI RA MẮT" />
        </SwiperSlide>
        <SwiperSlide>
          <Product title="PHÒNG ĐƠN" />
        </SwiperSlide>
        <SwiperSlide>
          <Product title="PHÒNG ĐÔI" />
        </SwiperSlide>

      </Swiper>
      <Banner />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
