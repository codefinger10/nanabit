import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { getDemoList } from "../../api/mainpageapi/MainPageApi";
import {
  ItemDecArea,
  ItemImg,
  ItemPacket,
  ItemTagBoxDiv,
  ItemTitlePrice,
  RcSwiperWrap,
  ReviewWish,
  StyledLabel,
  TextArea,
} from "../../styles/mainstyle";
import MainItemBoxTag from "./MainItemBoxTag";

const MainRcItem = () => {
  const [heartCheckedMap, setHeartCheckedMap] = useState({});

  const handleHeartButtonClick = itemId => {
    setHeartCheckedMap(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // 데모데이터 자료연동
  const [demoData, setDemoData] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchDataAndCenterSwiper = async () => {
      try {
        const res = await getDemoList({ setDemoData });

        // 찜 여부 값이 true와 false로 되어 있을 경우
        const initialHeartCheckedMap = {};
        res.forEach(item => {
          initialHeartCheckedMap[item.id] = item.찜여부 === 1;
        });
        setHeartCheckedMap(initialHeartCheckedMap);

        // 데이터를 가져온 후 Swiper 인스턴스가 생성되어 있으면 가운데 정렬
        if (swiperRef.current) {
          swiperRef.current.center();
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAndCenterSwiper(); // 비동기 함수 호출
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 useEffect가 실행

  if (!demoData) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {/* 사용자기준 추천상품 추후 사용자 토큰에 따라 ... */}
      <div>
        <TextArea>
          <span>
            우리 아이를 위한 나나빛의 Pick
            <br />
          </span>
          <i>👶🏻 내 자녀를 위한 추천상품 👶🏻</i>
        </TextArea>

        <RcSwiperWrap>
          <div
            style={{
              width: "1150px",
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="swiperDiv"
          >
            <Swiper
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
              navigation={{
                nextEl: ".swiperDiv .slide-next-bt",
                prevEl: ".swiperDiv .slide-prev-bt",
              }}
              modules={[Navigation]}
              className="mainSlideSett"
              slidesPerView={4}
              slidesPerGroup={4}
            >
              {demoData.map(Item => (
                <SwiperSlide
                  key={Item.id}
                  style={{ width: "230px", height: "330px" }}
                  className="slotWidthSett"
                >
                  <ItemPacket>
                    <ItemImg>
                      <img src={Item.이미지} />
                    </ItemImg>
                    <ItemDecArea>
                      <ItemTagBoxDiv>
                        {Item.인기상품 ? (
                          <MainItemBoxTag txt={"인기상품"} type={1} />
                        ) : null}
                        {Item.신상품 ? (
                          <MainItemBoxTag txt={"신상품"} type={2} />
                        ) : null}
                      </ItemTagBoxDiv>
                      <ReviewWish>
                        <div>
                          <span>리뷰</span>
                          <b>{Item.리뷰수 > 99 ? 99 + "+" : Item.리뷰수}</b>
                        </div>
                        <StyledLabel htmlFor={`heartInput-${Item.id}`}>
                          <img
                            src={
                              heartCheckedMap[Item.id]
                                ? process.env.PUBLIC_URL +
                                  "/assets/images/heart.svg"
                                : process.env.PUBLIC_URL +
                                  "/assets/images/heartoff.svg"
                            }
                            alt="wishlist"
                          />
                          <input
                            type="checkbox"
                            id={`heartInput-${Item.id}`}
                            style={{ display: "none" }}
                            checked={heartCheckedMap[Item.id]}
                            onChange={() => handleHeartButtonClick(Item.id)}
                          />
                        </StyledLabel>
                      </ReviewWish>
                    </ItemDecArea>
                    <ItemTitlePrice>
                      <p>{Item.제품명}</p>
                      <b>{Item.가격.toLocaleString()}원</b>
                    </ItemTitlePrice>
                  </ItemPacket>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="slide-prev-bt">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/slidebt.svg"}
                alt=""
              />
            </button>
            <button className="slide-next-bt">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/slidebt.svg"}
                alt=""
              />
            </button>
          </div>
        </RcSwiperWrap>
      </div>
      <div style={{ height: "300px" }} />
    </div>
  );
};

export default MainRcItem;
