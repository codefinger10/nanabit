import { Button, ConfigProvider } from "antd";
import React from "react";
import styled from "styled-components";

const ReviewWrap = styled.div`
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  hr {
    color: #868686;
  }
`;
const ReviewBody = styled.div`
  width: 1150px;
`;
const ReviewTitle = styled.div`
  width: 1150px;
  padding-top: 50px;
  padding-bottom: 50px;
  span {
    color: #e9b25f;
    font-size: 70px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;
const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .orderListBt {
    width: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    p {
      font-size: 20px;
    }
  }
`;
const ReviewList = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  .listHeader {
    display: flex;
    justify-content: space-between;
  }
  .nameScore {
    width: 310px;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 50px;
    span {
      color: #868686;
    }
    b {
      color: #e9b25f;
    }
  }
  .productName {
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    p {
      width: 400px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    i {
      font-size: 30px;
      font-style: normal;
      color: #868686;
    }
  }
  .productReview {
    display: flex;
    justify-content: space-between;
    gap: 25px;
  }
`;

const ReviewPageCom = () => {
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
              <p>작성 가능한 리뷰 확인하기 </p>
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
          <hr />
          <ReviewList>
            <div className="listHeader">
              <div className="nameScore">
                <span>육아천재꼬물이엄마</span>
                <b>5점</b>
              </div>
              <div className="productName">
                <p>
                  [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로 아이 전용
                  미니 젓가락 3종 15묶음 세트 (파랑, 빨강, 노랑, 구찌 명품
                  에디션) [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로
                  아이 전용 [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로
                  아이 전용 미니 젓가락 3종 15묶음 세트 (파랑, 빨강, 노랑, 구찌
                  명품 에디션) 미니 젓가락 3종 15묶음 세트 (파랑, 빨강, 노랑,
                  구찌 명품 에디션)
                </p>
                <i>2024.01.04</i>
              </div>
            </div>
            <div className="productReview">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/defaultitemimg.svg"
                  }
                />
              </div>
              <div>
                <p>
                  우리 꼬물이가 벌써부터 포크말고 젓가락 연습을 하는 날이 오다니
                  정말 기대되네요. 꼬물이가 좋아하는 뽀로로라서 구매를 하게
                  되었고 꽤 높은 곳에서 떨어뜨렸는데 멀쩡해요. 안심하고 막
                  사용해도 괜찮을 것 같네요. 이제 막 포크에서 젓가락으로
                  넘어가려는 애기엄마라면 무조건 강추입니당. 열심히 젓가락질
                  하려고 하는 모습이 기특해서 사진을 얼마나 찍었는지요~ 사진을
                  두장밖에 못넣어서 아쉽네용 ㅎㅎ
                </p>
                <Button danger style={{ borderRadius: 0 }}>
                  리뷰삭제
                </Button>
              </div>
            </div>
          </ReviewList>
        </ReviewBody>
      </ConfigProvider>
    </ReviewWrap>
  );
};

export default ReviewPageCom;
