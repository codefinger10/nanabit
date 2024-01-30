import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { getMainList } from "../../api/mainpageapi/mainPageApi";
import {
  ItemDecArea,
  ItemImg,
  ItemPacket,
  ItemTagBoxDiv,
  ItemTitlePrice,
  RcSwiperWrap,
  ReviewWish,
  TextArea,
} from "../../styles/mainstyle";
import MainHeartBt from "./MainHeartBt";
import MainItemBoxTag from "./MainItemBoxTag";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = [
  {
    iproduct: 0,
    productNm: "",
    price: 0,
    rcFl: 0,
    popFl: 0,
    newFl: 0,
    reviewCnt: 0,
    likeProduct: 0,
    repPic: "",
  },
];

const MainRcItem = () => {
  // 데이터 자료연동
  const [data, setData] = useState(initState);
  const swiperRef = useRef(null);

  useEffect(() => {
    // 데이터 연동 처리 결과

    const successFn = result => {
      setData(result);
      // console.log(result);
    };
    const failFn = result => {
      console.log(result);
    };
    const errorFn = result => {
      console.log("에러에옹", result);
    };
    getMainList({ successFn, failFn, errorFn });
  }, []);

  if (!setData) {
    return <p>Loading...</p>;
  }

  const chunkSize = 8;
  const divideDataIntoChunks = data => {
    // Array.from({ length: 배열 내 요소의 수 }
    // (_, index) => index) 순서대로 ?
    return Array.from(
      // 새로운 배열의 길이 설정
      { length: Math.ceil(data.length / chunkSize) },
      //  "_"는 현재 요소의 값, "index"는 해당 요소의 인덱스
      // 새로 생성된 배열의 각 요소에 대해 실행
      (_, index) => data.slice(index * chunkSize, (index + 1) * chunkSize),
    );
  };

  const dividedData = divideDataIntoChunks(data);

  const [textArray, setTextArray] = useState([
    {
      title: "우리 아이를 위한 나나빛의 Pick",
      subtitle: "👶🏻 내 자녀를 위한 추천상품 👶🏻",
    },
    {
      title: "품절되기 전에 확인하세요!",
      subtitle: "🔥 Hot한 인기상품 🔥",
    },
    {
      title: "모두가 기다렸던 그 상품 지금 바로 OPEN",
      subtitle: "💡 드디어 출시, 신상품 💡",
    },
  ]);

  const { isLogin } = useCustomLogin;

  return (
    <div>
      {dividedData.map((chunk, chunkIndex) => (
        <div key={`chunk_${chunkIndex}`}>
          <TextArea>
            <span>
              {textArray[chunkIndex].title}
              <br />
            </span>
            <i>{textArray[chunkIndex].subtitle}</i>
          </TextArea>

          <RcSwiperWrap>
            <div
              style={{
                width: "1150px",
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
              }}
              className={`chunk swiperDiv swiperDiv-${chunkIndex}`}
            >
              <Swiper
                onSwiper={swiper => {
                  swiperRef.current = swiper;
                }}
                navigation={{
                  nextEl: `.swiperDiv-${chunkIndex} .slide-next-bt`,
                  prevEl: `.swiperDiv-${chunkIndex} .slide-prev-bt`,
                }}
                modules={[Navigation]}
                className="mainSlideSett"
                slidesPerView={4}
                slidesPerGroup={4}
              >
                {chunk.map((item, itemIndex) => (
                  <SwiperSlide
                    key={`item_${itemIndex}`}
                    style={{ width: "230px", height: "330px" }}
                    className="slotWidthSett"
                  >
                    <ItemPacket>
                      <ItemImg>
                        <img src={item.repPic} alt={item.productNm} />
                      </ItemImg>
                      <ItemDecArea>
                        <ItemTagBoxDiv>
                          {item.popFl ? (
                            <MainItemBoxTag txt={"인기상품"} type={1} />
                          ) : null}
                          {item.rcFl ? (
                            <MainItemBoxTag txt={"신상품"} type={2} />
                          ) : null}
                        </ItemTagBoxDiv>
                        <ReviewWish>
                          <div>
                            <span>리뷰</span>
                            <b>
                              {item.reviewCnt > 99 ? 99 + "+" : item.reviewCnt}
                            </b>
                          </div>
                          <MainHeartBt likeProduct={item.likeProduct} />
                        </ReviewWish>
                      </ItemDecArea>
                      <ItemTitlePrice>
                        <p>{item.productNm}</p>
                        <b>{item.price.toLocaleString()}원</b>
                      </ItemTitlePrice>
                    </ItemPacket>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className={`slide-prev-bt slide-prev-bt-${chunkIndex}`}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/slidebt.svg"}
                  alt=""
                />
              </button>
              <button className={`slide-next-bt slide-next-bt-${chunkIndex}`}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/slidebt.svg"}
                  alt=""
                />
              </button>
            </div>
          </RcSwiperWrap>
        </div>
      ))}
      <div style={{ height: "300px" }} />
    </div>
  );
};

export default MainRcItem;
