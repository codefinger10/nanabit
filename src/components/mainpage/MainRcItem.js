import React, { useEffect, useRef, useState } from "react";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import required modules
import { getPoPNewList } from "../../api/mainpageapi/mainPageApi";
import useCustomLogin from "../../hooks/useCustomLogin";
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
  // 패스이동 =========================================
  const { moveToPath, moveToObj } = useCustomLogin();
  const moveToProduct = item => {
    moveToObj("/item", item.iproduct);
  };
  // 패스이동 =========================================
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
    getPoPNewList({ successFn, failFn, errorFn });
  }, []);
  if (!setData) {
    return <p>Loading...</p>;
  }
  // 인기상품 필터
  const filteredPopFl = data.filter(item => item.popFl === 1);
  // 신상품 필터
  const filteredNewFl = data.filter(item => item.newFl === 1);
  return (
    <div>
      {/* 인기상품 */}
      <div>
        <TextArea>
          <span>
            품절되기 전에 확인하세요!
            <br />
          </span>
          <i>:불: Hot한 인기상품 :불:</i>
        </TextArea>
        <RcSwiperWrap>
          <div
            style={{
              width: "1150px",
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="popFlDiv"
          >
            <Swiper
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
              navigation={{
                nextEl: ".popFlDiv .slide-next-bt",
                prevEl: ".popFlDiv .slide-prev-bt",
              }}
              modules={[Navigation]}
              className="mainSlideSett"
              slidesPerView={4}
              slidesPerGroup={4}
            >
              {filteredPopFl.map(item => (
                <SwiperSlide
                  key={item.iproduct}
                  style={{ width: "230px", height: "330px" }}
                  className="slotWidthSett"
                >
                  <ItemPacket>
                    <ItemImg
                      onClick={() => {
                        moveToProduct(item);
                      }}
                    >
                      <img src={item.repPic} />
                    </ItemImg>
                    <ItemDecArea>
                      <ItemTagBoxDiv
                        onClick={() => {
                          moveToProduct(item);
                        }}
                      >
                        {item.popFl ? (
                          <MainItemBoxTag txt={"인기상품"} type={1} />
                        ) : null}
                        {item.newFl ? (
                          <MainItemBoxTag txt={"신상품"} type={2} />
                        ) : null}
                      </ItemTagBoxDiv>
                      <ReviewWish>
                        <div
                          onClick={() => {
                            moveToProduct(item);
                          }}
                        >
                          <span>리뷰</span>
                          <b>
                            {item.reviewCnt > 99 ? 99 + "+" : item.reviewCnt}
                          </b>
                        </div>
                        <MainHeartBt item={item} />
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
      {/* 신상품 */}
      <div>
        <TextArea>
          <span>
            모두가 기다렸던 그 상품 지금 바로 OPEN
            <br />
          </span>
          <i>:전구: 드디어 출시, 신상품 :전구:</i>
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
              {filteredNewFl.map(item => (
                <SwiperSlide
                  key={item.iproduct}
                  style={{ width: "230px", height: "330px" }}
                  className="slotWidthSett"
                >
                  <ItemPacket>
                    <ItemImg
                      onClick={() => {
                        moveToProduct(item);
                      }}
                    >
                      <img src={item.repPic} />
                    </ItemImg>
                    <ItemDecArea>
                      <ItemTagBoxDiv
                        onClick={() => {
                          moveToProduct(item);
                        }}
                      >
                        {item.popFl ? (
                          <MainItemBoxTag txt={"인기상품"} type={1} />
                        ) : null}
                        {item.newFl ? (
                          <MainItemBoxTag txt={"신상품"} type={2} />
                        ) : null}
                      </ItemTagBoxDiv>
                      <ReviewWish>
                        <div
                          onClick={() => {
                            moveToProduct(item);
                          }}
                        >
                          <span>리뷰</span>
                          <b>
                            {item.reviewCnt > 99 ? 99 + "+" : item.reviewCnt}
                          </b>
                        </div>
                        <MainHeartBt item={item} />
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