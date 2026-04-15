import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://media.about.nike.com/img/d436e535-3c11-4c54-a798-249accc1f071/rg11hh-p01-fa24-rtp-nike-electric-nouveau-sport-product-superiority-ta-oly-hero-pack-v1-r2.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjoyMzQsInRvcCI6MCwid2lkdGgiOjI1MzIsImhlaWdodCI6MTY4OH0sInJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MH19fQ%3D%3D&s=da91c4d8d2197eb68971fb1e5ffb5c2f2499638a011b5cea43c1cdd955f51bf3"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://miro.medium.com/0*DQjppkTFMfKMDy3f" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bedetti.it/wp-content/uploads/2022/11/banner-hublot-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2731168963/display_1500/stock-vector-ripped-gray-paper-background-that-have-word-exclusive-product-under-torn-part-2731168963.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
