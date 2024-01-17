import Icon from "@ant-design/icons/lib/components/Icon";
import { Button, Form } from "antd";
import React, { useState } from "react";
import PrettyCounter from "../../components/Count";
import {
  ItemHeart,
  ItemHover,
  ItemInfo,
  ItemMain,
  ItemPrice,
  ItemWrap,
  StyledButton,
  StyledDiv,
} from "../../styles/signup/item";
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
  const HeartSvg = () => (
    <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  );
  const [bbb, setBbb] = useState(false);
  const aaa = tno => {
    if (!bbb) {
      setBbb(true);
      console.log(`상품${tno}번 찜했습니다.`);
    } else {
      setBbb(false);
    }
  };
  const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

  return (
    <ItemMain>
      <ItemWrap>
        <div className="itemimg">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/majpg.jpg"}
            alt="baby item"
          />
        </div>
        <div style={{ width: "800px" }}>
          <div style={{ paddingBottom: 220 }}>
            <ItemHover>
              <div className="itemtext">
                [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로 아이 전용
                미니 젓가락
              </div>
              <ItemHeart onClick={() => aaa(1)}>
                <HeartIcon
                  style={bbb ? { color: "red" } : { color: "#D9D9D9" }}
                />
              </ItemHeart>
            </ItemHover>
            <span className="itemspan">
              평점 <span>{4.8}</span> 리뷰 <sapn>{52}</sapn>
            </span>
          </div>
          <ItemPrice>
            <div>
              <PrettyCounter />
            </div>
            <div>
              <div className="itemFree">무료배송</div>
              <div className="itemOnePrice">
                1개 <b>8,500</b> <sapn>원</sapn>
              </div>
            </div>
          </ItemPrice>

          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#FFF",
              border: "1px solid #D68000 ",
              color: "#D68000",
              width: "48%",
              height: 50,
              fontWeight: "bold",
              marginRight: "20px",
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
              width: "48%",
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
    </ItemMain>
  );
};

export default ItemPage;