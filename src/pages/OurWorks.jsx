import React, { useEffect } from 'react'
import "./home/home.css"
import astonmartinLogo from "../assets/images/astonmartinlogo.png"
import ferrariLogo from "../assets/images/ferrari.png"
import lamborghiniLogo from "../assets/images/lamborghini.png"
import saffronLogo from "../assets/images/saffron.png"
import seabreeze from "../assets/images/seabreeze.svg"
import pashaLogo from "../assets/images/pasha.svg"
import redbullLogo from "../assets/images/redbull.svg"
import caferErolLogo from "../assets/images/cafererol.jpeg"
import celtLogo from "../assets/images/celt.jpeg"
import automallLogo from "../assets/images/automall.png"
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';


const OurWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="our-works" id="our-works">
    <div className="our-works-in">
      <h1>OUR WORKS</h1>
      <div className="works">
        <a href="#">MOBILINGO</a>
        <a href="#">DOCUMOOD</a>
        <a href="#">MANATRIX</a>
        <a href="#">COSHGUNUN SAYT</a>
        <a href="#">DAYIOGLU SAYT</a>
        <a href="#">BUTASCARF</a>
      </div>
      <div className="works-swiper">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={astonmartinLogo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ferrariLogo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lamborghiniLogo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={saffronLogo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seabreeze} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pashaLogo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={redbullLogo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={caferErolLogo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={celtLogo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={automallLogo} alt="logo" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  </div>
  )
}

export default OurWorks