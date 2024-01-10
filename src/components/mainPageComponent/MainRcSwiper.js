import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import styled from "@emotion/styled";
import MainItemBoxTag from "./MainItemBoxTag";
import {
  ItemDecArea,
  ItemImg,
  ItemPacket,
  ItemTagBoxDiv,
  ItemTitlePrice,
  ReviewWish,
  TextArea,
} from "../../styles/mainstyle";

const MainRcSwiper = ({ txt, title, review }) => {
  return (
    <div>
      <TextArea>
        <span>
          {txt}123123
          <br />
        </span>
        <i>{title}123123</i>
      </TextArea>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={45}
        slidesPerGroup={4}
      >
        <SwiperSlide>
          <ItemPacket>
            <ItemImg>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/defaultitemimg.svg"
                }
              />
            </ItemImg>
            <ItemDecArea>
              <ItemTagBoxDiv>
                <MainItemBoxTag txt={"인기상품"} type={1} />
                <MainItemBoxTag txt={"신상품"} type={2} />
              </ItemTagBoxDiv>
              <ReviewWish>
                <div>
                  <span>리뷰</span> <b>{review}1</b>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/heart.svg"}
                />
              </ReviewWish>
            </ItemDecArea>
            <ItemTitlePrice>
              <span>모유감성 PPSU 배앓이방지 젖병 젖꼭지 단계선택 리필</span>
              <br />
              <b>6,800원</b>
            </ItemTitlePrice>
          </ItemPacket>
        </SwiperSlide>
        <SwiperSlide>
          <ItemPacket>
            <ItemImg>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/defaultitemimg.svg"
                }
              />
            </ItemImg>
            <ItemDecArea>
              <ItemTagBoxDiv>
                <MainItemBoxTag txt={"인기상품"} type={1} />
                <MainItemBoxTag txt={"신상품"} type={2} />
              </ItemTagBoxDiv>
              <ReviewWish>
                <div>
                  <span>리뷰</span> <b>{review}1</b>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/heart.svg"}
                />
              </ReviewWish>
            </ItemDecArea>
            <ItemTitlePrice>
              <span>모유감성 PPSU 배앓이방지 젖병 젖꼭지 단계선택 리필</span>
              <br />
              <b>6,800원</b>
            </ItemTitlePrice>
          </ItemPacket>
        </SwiperSlide>
        <SwiperSlide>
          <ItemPacket>
            <ItemImg>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/defaultitemimg.svg"
                }
              />
            </ItemImg>
            <ItemDecArea>
              <ItemTagBoxDiv>
                <MainItemBoxTag txt={"인기상품"} type={1} />
                <MainItemBoxTag txt={"신상품"} type={2} />
              </ItemTagBoxDiv>
              <ReviewWish>
                <div>
                  <span>리뷰</span> <b>{review}1</b>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/heart.svg"}
                />
              </ReviewWish>
            </ItemDecArea>
            <ItemTitlePrice>
              <span>모유감성 PPSU 배앓이방지 젖병 젖꼭지 단계선택 리필</span>
              <br />
              <b>6,800원</b>
            </ItemTitlePrice>
          </ItemPacket>
        </SwiperSlide>
        <SwiperSlide>
          <ItemPacket>
            <ItemImg>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/defaultitemimg.svg"
                }
              />
            </ItemImg>
            <ItemDecArea>
              <ItemTagBoxDiv>
                <MainItemBoxTag txt={"인기상품"} type={1} />
                <MainItemBoxTag txt={"신상품"} type={2} />
              </ItemTagBoxDiv>
              <ReviewWish>
                <div>
                  <span>리뷰</span> <b>{review}1</b>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/heart.svg"}
                />
              </ReviewWish>
            </ItemDecArea>
            <ItemTitlePrice>
              <span>모유감성 PPSU 배앓이방지 젖병 젖꼭지 단계선택 리필</span>
              <br />
              <b>6,800원</b>
            </ItemTitlePrice>
          </ItemPacket>
        </SwiperSlide>
        <SwiperSlide>
          <ItemPacket>
            <ItemImg>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/defaultitemimg.svg"
                }
              />
            </ItemImg>
            <ItemDecArea>
              <ItemTagBoxDiv>
                <MainItemBoxTag txt={"인기상품"} type={1} />
                <MainItemBoxTag txt={"신상품"} type={2} />
              </ItemTagBoxDiv>
              <ReviewWish>
                <div>
                  <span>리뷰</span> <b>{review}1</b>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/heart.svg"}
                />
              </ReviewWish>
            </ItemDecArea>
            <ItemTitlePrice>
              <span>모유감성 PPSU 배앓이방지 젖병 젖꼭지 단계선택 리필</span>
              <br />
              <b>6,800원</b>
            </ItemTitlePrice>
          </ItemPacket>
        </SwiperSlide>
        <SwiperSlide>
          <ItemPacket>
            <ItemImg>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/defaultitemimg.svg"
                }
              />
            </ItemImg>
            <ItemDecArea>
              <ItemTagBoxDiv>
                <MainItemBoxTag txt={"인기상품"} type={1} />
                <MainItemBoxTag txt={"신상품"} type={2} />
              </ItemTagBoxDiv>
              <ReviewWish>
                <div>
                  <span>리뷰</span> <b>{review}1</b>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/heart.svg"}
                />
              </ReviewWish>
            </ItemDecArea>
            <ItemTitlePrice>
              <span>모유감성 PPSU 배앓이방지 젖병 젖꼭지 단계선택 리필</span>
              <br />
              <b>6,800원</b>
            </ItemTitlePrice>
          </ItemPacket>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainRcSwiper;
