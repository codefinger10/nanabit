import styled from "@emotion/styled";
import { Button, Form } from "antd";
import React, { useState } from "react";
import PrettyCounter from "../../components/signup/Count";

const ItemWrap = styled.div`
  min-height: 680px;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  .itemimg {
    img {
      margin-top: 70px;
      width: 500px;
      height: 500px;
    }
  }
  .itemtext {
    margin: 70px 0 0 120px;
    font-size: 30px;
  }
  .itemspan {
    font-size: 25px;
    color: #e9b25f;
    margin-left: 120px;
    span {
      font-size: 25px;
      font-weight: 800;
    }
  }
`;
const ItemInfo = styled.div`
  display: flex;
  font-size: 3rem;
  height: 80px;
  justify-content: center;
  align-items: center;
  gap: 250px;
  cursor: pointer;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  background-color: #f9f9f9;
  div {
    &:hover {
      border-bottom: 3px solid #e9b25f;
      color: #e9b25f;
    }
  }
`;
const StyledDiv = styled.div`
  display: flex;
  width: 1220px;
  margin-top: 150px;
  color: #868686;
  font-family: "Roboto";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  gap: 150px;
  border-bottom: 1px solid #868686;
  padding-bottom: 50px;
  margin: 0 auto;

  .reviewtext {
    width: 750px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    .reviewtotal {
      font-size: 20px;
      span {
        font-size: 25px;
        font-weight: 800;
      }
    }
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  margin-right: 15px;
  color: #d9d9d9;

  &:hover {
    color: #e9b25f; /* Change the color for hover effect */
  }
`;

const ItemPage = () => {
  const [form] = Form.useForm();

  const onGenderChange = value => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
    }
  };
  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: "우리 꼬물이가 벌써부터 포크말고 젓가락 연습을 하는 날이 오다니 정말 기대되네요. 꼬물이가 좋아하는 뽀로로라서 구매를 하게 되었고 꽤 높은 곳에서 떨어뜨렸는데 멀쩡해요. 안심하고 막 사용해도 괜찮을 것 같네요. 이제 막 포크에서 젓가락으로 넘어가려는 애기엄마라면 무조건 강추입니당. 열심히 젓가락질 하려고 하는 모습이 기특해서 사진을 얼마나 찍었는지요~ 사진을 두장밖에 못넣어서 아쉽네용 ㅎㅎ.",
      rating: 5,
      date: "2024-01-09",
    },
    {
      id: 2,
      text: "고품질이며 가격 대비 훌륭합니다.",
      rating: 4,
      date: "2024-01-08",
    },
    {
      id: 3,
      text: "빠른 배송 서비스에 감사드립니다.",
      rating: 5,
      date: "2024-01-05",
    },
    {
      id: 4,
      text: "상품 너무 별로네요.",
      rating: 2,
      date: "2024-01-04",
    },
    {
      id: 5,
      text: "배송이 너무 느려요.",
      rating: 3,
      date: "2024-01-02",
    },
    // ... 다른 리뷰 데이터
  ]);

  const [selectedSection, setSelectedSection] = useState("productInfo");
  const showProductInfo = () => {
    setSelectedSection("productInfo");
  };

  const showPurchaseInfo = () => {
    setSelectedSection("purchaseInfo");
  };

  const showReviews = () => {
    setSelectedSection("reviews");
  };

  const sortReviewsByDate = () => {
    const sortedReviews = [...reviews].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    setReviews(sortedReviews);
    console.log(sortedReviews);
  };

  const sortReviewsByRatingHigh = () => {
    const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);
    setReviews(sortedReviews);
  };

  const sortReviewsByRatingLow = () => {
    const sortedReviews = [...reviews].sort((a, b) => a.rating - b.rating);
    setReviews(sortedReviews);
  };

  return (
    <>
      <ItemWrap>
        <div className="itemimg">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/majpg.jpg"}
            alt="baby item"
          />
        </div>
        <div>
          <div style={{ paddingBottom: 250 }}>
            <div className="itemtext">
              [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로 아이 전용 미니
              젓가락
            </div>
            <span className="itemspan">
              평점 <span>{4.8}</span> 리뷰 <sapn>{52}</sapn>
            </span>
          </div>
          <div>
            <PrettyCounter />
          </div>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#FFF",
              border: "1px solid #D68000 ",
              color: "#D68000",
              width: 150,
              height: 50,
              fontWeight: "bold",
              marginRight: "20px",
              marginLeft: "535px",
              marginTop: "20px",
            }}
          >
            장바구니
          </Button>
          <Button
            type="primary"
            style={{
              backgroundColor: "#D68000",
              color: "#FFFFFF",
              border: "none",
              fontWeight: "bold",
              width: 150,
              height: 50,
            }}
          >
            바로구매
          </Button>
        </div>
      </ItemWrap>
      <div>
        <ItemInfo>
          <div
            onClick={() => {
              showProductInfo();
            }}
          >
            상품정보
          </div>
          <div
            onClick={() => {
              showPurchaseInfo();
            }}
          >
            구매안내
          </div>
          <div
            onClick={() => {
              showReviews();
            }}
          >
            리뷰
          </div>
        </ItemInfo>
        {selectedSection === "productInfo" && (
          <div style={{ textAlign: "center", margin: "100px 0" }}>
            {/* 상품 정보 표시 */}
            <img
              style={{}}
              src={process.env.PUBLIC_URL + "/assets/images/mama.jpg"}
            />
          </div>
        )}
        {selectedSection === "purchaseInfo" && (
          <div style={{ textAlign: "center", margin: "100px 0" }}>
            {/* 구매 안내 표시 */}
            <img
              style={{ height: "1000px" }}
              src={process.env.PUBLIC_URL + "/assets/images/itemguidebook.svg"}
            />
          </div>
        )}
        {selectedSection === "reviews" && (
          <div
            style={{ borderBottom: "1px solid #868686", paddingBottom: "50px" }}
          >
            {/* 리뷰 표시 */}
            <div style={{ margin: "100px 0" }}>
              <StyledDiv>
                <div className="reviewtext">
                  <div>
                    [뽀로로] 우리아기가 좋아하는 젓가락 뽀롱뽀롱 뽀로로 아이
                    전용 미니 젓가락
                    <div className="reviewtotal">
                      리뷰 총 <span>{52}</span> 개
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: 472,
                    height: 108,
                    color: "#E9B25F",
                    background: "#FFF7EC",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "7rem",
                    fontWeight: 900,
                  }}
                >
                  <span>평점 {4.8}</span>
                </div>
              </StyledDiv>
              <div
                style={{ margin: "0 auto", width: "1220px", marginTop: "25px" }}
              >
                <div>
                  <StyledButton onClick={sortReviewsByDate}>
                    최신순
                  </StyledButton>
                  <StyledButton onClick={sortReviewsByRatingHigh}>
                    평점높은순
                  </StyledButton>
                  <StyledButton onClick={sortReviewsByRatingLow}>
                    평점낮은순
                  </StyledButton>
                </div>
                <ul>
                  {reviews.map(review => (
                    <li key={review.id}>
                      <div
                        style={{
                          width: 1220,
                          height: 60,
                          display: "flex",
                          justifyContent: "space-between",
                          paddingTop: 30,
                          fontSize: 20,
                        }}
                      >
                        <p>
                          {review.id}
                          <span> {review.rating}</span>
                        </p>

                        <p>날짜: {review.date}</p>
                      </div>
                      <p>{review.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemPage;
