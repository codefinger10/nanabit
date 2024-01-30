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
  },
];

const ReviewPageCom = () => {
  const { page, size, moveToRead } = useCustomMove();
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
  const [current, setCurrent] = useState(3);
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

  const handleDeleteClick = index => {
    console.log(index);
    deleteReviewList({ reviewData: index, successFn, failFn, errorFn });
    setRefresh(true);
  };

  // console.log("reviewData", reviewData);

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
              >
                <p>주문 조회</p>
              </Button>
            </div>
          </ReviewHeader>
          {reviewData.map(index => (
            <ReviewList key={index.ireview}>
              <div className="listHeader">
                <div className="nameScore">
                  <p>{index.nm}</p>
                  <b>
                    <Rate disabled defaultValue={index.productScore} />
                  </b>
                </div>
                <div className="productName">
                  <p>{index.productNm}</p>
                  <i>{index.createdAt}</i>
                </div>
              </div>
              <div className="productReview">
                <ReviewImgSection>
                  <>
                    {index.pics.map(pic => (
                      <Swiper
                        scrollbar={{
                          hide: true,
                        }}
                        modules={[Scrollbar]}
                        className="mySwiper"
                        key={pic}
                      >
                        <SwiperSlide>
                          <img src={pic.pics} />
                        </SwiperSlide>
                      </Swiper>
                    ))}
                  </>
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
          <Pagination current={current} onChange={onChange} total={50} />
        </ReviewFooter>
      </ConfigProvider>
    </ReviewWrap>
  );
};
export default ReviewPageCom;
