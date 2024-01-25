import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const MainSwiper = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/mainswiperimg1.svg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/mainswiperimg2.svg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/mainswiperimg3.svg"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
