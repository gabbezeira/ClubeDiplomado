import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Banner from "../../assets/images/banner.svg";
import BannerMobile from "../../assets/images/banner-mobile.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container, Image } from "./styles";

import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <Container>
      <Swiper
        style={{
          "--swiper-navigation-color": "#FFF",
          "--swiper-navigation-size": "30px",
          "--swiper-pagination-color": "#FFF",
          "--swiper-pagination-bullet-inactive-color": "#FFF",
          "--swiper-pagination-bullet-inactive-opacity": "0.4",
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper desktop"
      >
        <SwiperSlide>
          <div className="img-container">
            <Image src={Banner} alt="Banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <Image src={Banner} alt="Banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <Image src={Banner} alt="Banner" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* mobile */}

      <Swiper
        style={{
          "--swiper-navigation-color": "#FFF",
          "--swiper-navigation-size": "30px",
          "--swiper-pagination-color": "#FFF",
          "--swiper-pagination-bullet-inactive-color": "#FFF",
          "--swiper-pagination-bullet-inactive-opacity": "0.4",
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mobile"
      >
        <SwiperSlide>
          <div className="img-container">
            <Image src={BannerMobile} alt="Banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <Image src={BannerMobile} alt="Banner" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <Image src={BannerMobile} alt="Banner" />
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
