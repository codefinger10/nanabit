import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import {
  ItemDecArea,
  ItemImg,
  ItemPacket,
  ItemTagBoxDiv,
  ItemTitlePrice,
  ReviewWish,
  StyledLabel,
  TextArea,
} from "../../styles/mainstyle";
import MainItemBoxTag from "./MainItemBoxTag";
import { getDemoList } from "../../api/mainpageapi/MainPageApi";

const MainRcSwiper = ({ txt, title, review }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleCheckboxChange = () => {
    // 체크박스의 상태를 업데이트
    setIsChecked(!isChecked);
  };

  // 데모데이터 자료연동
  const [demoData, setDemoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDemoList({ setDemoData });
        console.log("알이에스", res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // 비동기 함수 호출
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 useEffect가 실행되도록 함

  // demoData를 사용하여 UI를 렌더링하는 로직 작성
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

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={45}
          slidesPerGroup={4}
        >
          {demoData.map(Item => (
            <SwiperSlide key={Item.id}>
              <ItemPacket>
                <ItemImg>
                  <img src={Item.이미지} />
                </ItemImg>
                <ItemDecArea>
                  <ItemTagBoxDiv>
                    <MainItemBoxTag txt={"인기상품"} type={1} />
                    <MainItemBoxTag txt={"신상품"} type={2} />
                  </ItemTagBoxDiv>
                  <ReviewWish>
                    <div>
                      <span>리뷰</span> <b>{Item.리뷰수}1</b>
                    </div>
                    <StyledLabel
                      htmlFor="fileInput"
                      isChecked={isChecked}
                      isHovered={isHovered}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <img
                        src={
                          isChecked
                            ? process.env.PUBLIC_URL +
                              "/assets/images/heart.svg"
                            : process.env.PUBLIC_URL +
                              "/assets/images/heartoff.svg"
                        }
                        alt="wishlist"
                      />
                      <input
                        type="checkbox"
                        id="fileInput"
                        style={{ display: "none" }}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </StyledLabel>
                  </ReviewWish>
                </ItemDecArea>
                <ItemTitlePrice>
                  <span>
                    모유감성 PPSU 배앓이방지 젖병 젖꼭지 단계선택 리필
                  </span>
                  <br />
                  <b>6,800원</b>
                </ItemTitlePrice>
              </ItemPacket>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 인기상품 */}
      <div>
        <TextArea>
          <span>
            육아 3회차 MD가 추천하는
            <br />
          </span>
          <i>🔎 MD 추천상품 🔎</i>
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
                  <StyledLabel htmlFor="fileInput" isChecked={isChecked}>
                    <img
                      src={
                        isChecked
                          ? process.env.PUBLIC_URL + "/assets/images/heart.svg"
                          : process.env.PUBLIC_URL +
                            "/assets/images/heartoff.svg"
                      }
                      alt="wishlist"
                    />
                    <input
                      type="checkbox"
                      id="fileInput"
                      style={{ display: "none" }}
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  </StyledLabel>
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
      {/* 신상품 */}
      <div>
        <TextArea>
          <span>
            육아 3회차 MD가 추천하는
            <br />
          </span>
          <i>🔎 MD 추천상품 🔎</i>
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
                  <StyledLabel htmlFor="fileInput" isChecked={isChecked}>
                    <img
                      src={
                        isChecked
                          ? process.env.PUBLIC_URL + "/assets/images/heart.svg"
                          : process.env.PUBLIC_URL +
                            "/assets/images/heartoff.svg"
                      }
                      alt="wishlist"
                    />
                    <input
                      type="checkbox"
                      id="fileInput"
                      style={{ display: "none" }}
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  </StyledLabel>
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
    </div>
  );
};

export default MainRcSwiper;
