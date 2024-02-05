import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../styles/signup/styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const slideData = [
  {
    title: "레시피",
    pic: "https://i.namu.wiki/i/WGsJjdq_YZ55OqLwDcVy03tPUDeuy2bFGjbv7hGdqeTxhugt9oQVd9skQTplZArzk64Id35mmLbkbcMwWEo2-g.webp",
  },
  {
    title: "레시피",
    pic: "https://file2.nocutnews.co.kr/newsroom/image/2023/01/21/202301210408091762_0.jpg",
  },
  {
    title: "레시피",
    pic: "https://img.sbs.co.kr/newsnet/etv/upload/2023/08/28/30000871570_1280.jpg",
  },
  {
    title: "레시피",
    pic: "https://img.sbs.co.kr/newsnet/etv/upload/2023/08/28/30000871570_1280.jpg",
  },
];

export default function ImgSwiper({ productData, iproduct }) {
  console.log(productData);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let imgUrl = `http://192.168.0.144:5223/pic/product/${iproduct}/`;

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {productData.productPics.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={imgUrl+item} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {productData.productPics.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={imgUrl+item} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
