import styled from "@emotion/styled";
import { Button, Form, Select } from "antd";
import React, { useState } from "react";
import PrettyCounter from "../../components/Count";
import BasicLayout from "../../layouts/BasicLayout";

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
    margin-top: 70px;
    font-size: 30px;
  }
  span {
    font-size: 25px;
    color: #e9b25f;
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
    { id: 1, text: '매우 만족스러운 상품입니다.', rating: 5, date: '2024-01-09' },
    { id: 2, text: '고품질이며 가격 대비 훌륭합니다.', rating: 4, date: '2024-01-08' },
    { id: 3, text: '빠른 배송 서비스에 감사드립니다.', rating: 5, date: '2024-01-07' },
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
    const sortedReviews = [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
    setReviews(sortedReviews);
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
    <BasicLayout>
      <ItemWrap>
        <div className="itemimg">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/babyitem.jpg"}
            alt="baby item"
          />
        </div>
        <div>
          <div className="itemtext">
            [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로 아이 전용 미니
            젓가락
          </div>
          <span className="itemspan">
            평점{} 리뷰{}
          </span>
          <div style={{ marginBottom: "200px" }}>
            <Select
              style={{ width: "604px", height: "54px" }}
              placeholder="옵션 없음"
              onChange={onGenderChange}
              allowClear
            >
              <Select.Option value="male">male</Select.Option>
              <Select.Option value="female">female</Select.Option>
              <Select.Option value="other">other</Select.Option>
            </Select>
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
          <div>
            {/* 상품 정보 표시 */}
            상세설명이 나오는 부분
          </div>
        )}
        {selectedSection === "purchaseInfo" && (
          <div style={{ textAlign: "center", margin: "100px 0 100px 0" }}>
            {/* 구매 안내 표시 */}
            <img
              style={{ height: "1000px" }}
              src={process.env.PUBLIC_URL + "/assets/images/itemguidebook.svg"}
            />
          </div>
        )}
        {selectedSection === "reviews" && (
          <div style={{borderBottom:"1px solid #868686" ,paddingBottom:"50px" }}>
            {/* 리뷰 표시 */}
            <div style={{ display: "flex", marginTop: "150px"}}>
              <div>
                <span>
                  [뽀로로] 우리아기가 좋아하는 젓가락 뽀롱뽀롱 뽀로로 아이 전용
                  미니 젓가락
                </span>
                <div>리뷰 총 {}개</div>
              </div>

              <div>평점 {}</div>
            </div>
            <div>
            <button onClick={sortReviewsByDate}>최신순</button>
            <button onClick={sortReviewsByRatingHigh}>평점높은순</button>
            <button onClick={sortReviewsByRatingLow}>평점낮은순</button>
          </div>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{review.text}</p>
                <p>평점: {review.rating}</p>
                <p>날짜: {review.date}</p>
              </li>
            ))}
          </ul>
            <div>

            </div>
          </div>
        )}
      </div>
    </BasicLayout>
  );
};

export default ItemPage;
