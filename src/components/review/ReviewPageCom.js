import { Button, ConfigProvider, Image, Pagination, Rate } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { Scrollbar } from "swiper/modules";
import {
  ReviewBody,
  ReviewFooter,
  ReviewHeader,
  ReviewImgSection,
  ReviewList,
  ReviewTitle,
  ReviewWrap,
} from "../../styles/review/reviewstyle";
import { Swiper, SwiperSlide } from "swiper/react";
import useCustomMove from "../../hooks/useCustomMove";
import { deleteReviewList, getReviewList } from "../../api/reviewapi/reviewApi";
import { API_SERVER_HOST } from "../../util/util";
const initState = [
  {
    ireview: "",
    nm: "",
    productScore: "",
    contents: "",
    reqReviewPic: null,
    createdAt: "",
    pics: [],
    productNm: "",
    iproduct: 0,
  },
];
const ReviewPageCom = () => {
  const { page, size, moveToOl } = useCustomMove();
  const [reviewData, setReviewData] = useState(initState);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const param = { page, size: 5 };
    // 데이터 연동 처리 결과
    const successFn = result => {
      setReviewData(result);
      // console.log(result);
    };
    const failFn = result => {
      console.log(result);
    };
    const errorFn = result => {
      console.log("에러에옹", result);
    };
    getReviewList({ param, successFn, failFn, errorFn });
  }, [page, size, refresh]);
  // 페이지네이션
  // const Pagi = styled.div`
  //   background-color: red;
  //   margin: 0;
  // `;
  const [current, setCurrent] = useState(1);

  const onChange = page => {
    console.log(page);
    setCurrent(page);
  };
  const successFn = result => {
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log("에러에옹", result);
  };
  const handleDeleteClick = async index => {
    console.log(index);
    try {
      await deleteReviewList({ reviewData: index, successFn, failFn, errorFn });
      setRefresh(prevRefresh => !prevRefresh);
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };
  const handleClickToOl = () => {
    moveToOl();
  };
  return (
    <ReviewWrap>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#E9B25F",
              colorPrimaryActive: "#CB8C2E",
              colorPrimaryBorder: "#E9B25F",
              colorPrimaryHover: "#DF9E3C",
            },
            Pagination: {
              colorPrimary: "#E9B25F",
              colorPrimaryActive: "#CB8C2E",
              colorPrimaryBorder: "#E9B25F",
              colorPrimaryHover: "#DF9E3C",
            },
          },
        }}
      >
        <ReviewBody>
          <ReviewHeader>
            <ReviewTitle>
              <span>MY-Review</span>
            </ReviewTitle>
            <div className="orderListBt">
              <span>작성 가능한 리뷰 확인하기 </span>
              <Button
                type="primary"
                style={{
                  borderRadius: 0,
                  width: "170px",
                  height: "70px",
                  fontSize: "20px",
                }}
                onClick={handleClickToOl}
              >
                <p>주문 조회</p>
              </Button>
            </div>
          </ReviewHeader>
          {reviewData.map(index => (
            <ReviewList key={index.ireview}>
              <div className="productName">
                <p>{index.productNm}</p>
                <i>{index.createdAt}</i>
              </div>
              <div className="productReview">
                <ReviewImgSection>
                  <Swiper
                    modules={{ scroll }}
                    className="mySwiper"
                    style={{ height: "200px", width: "200px" }}
                  >
                    {index.pics.map((pic, picIndex) => (
                      <SwiperSlide key={picIndex}>
                        <img
                          src={
                            pic.pics === ""
                              ? process.env.PUBLIC_URL +
                                "/assets/images/defaultitemimg.svg"
                              : `${API_SERVER_HOST}/pic/review/${index.ireview}/${pic}`
                          }
                          alt={index.productNm}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </ReviewImgSection>
                <div className="reviewRight">
                  <div>
                    <p>{index.contents}</p>
                  </div>
                  <div className="buttonDiv">
                    <Button
                      danger
                      style={{ borderRadius: 0 }}
                      onClick={() => handleDeleteClick(index.ireview)}
                    >
                      리뷰삭제
                    </Button>
                  </div>
                </div>
              </div>
            </ReviewList>
          ))}
        </ReviewBody>
        <ReviewFooter>
          <Pagination
            current={current}
            onChange={onChange}
            total={reviewData.length}
            pageSize={5}
            showSizeChanger={false}
          />
        </ReviewFooter>
      </ConfigProvider>
    </ReviewWrap>
  );
};
export default ReviewPageCom;
