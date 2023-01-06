import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "react-device-detect";
import Banner from "../../assets/images/banner.svg";
import BannerMobile from "../../assets/images/banner-mobile.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Image } from "./styles";
import { Pagination, Navigation } from "swiper";

export function Slider() {

  return (
    <div id="slider">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
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
      >
        <SwiperSlide>
          <Image src={isMobile ? BannerMobile : Banner} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={isMobile ? BannerMobile : Banner} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={isMobile ? BannerMobile : Banner} alt="Banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
