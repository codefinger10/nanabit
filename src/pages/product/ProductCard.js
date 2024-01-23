import React, { useState } from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  padding: 16px;
  margin: 16px;

  .card-img {
    width: 263px;
    height: 263px;
    object-fit: cover;
  }

  .productNm {
    overflow: hidden;
    color: #595959;
    width: 260px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "Noto Sans KR";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .price {
    color: #2d2d2d;

    font-family: "Noto Sans KR";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const CardFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 263px;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  .tagform {
    display: flex;
  }
  .review {
    display: flex;
    align-items: center;
  }
  p {
    font-size: 20px;
  }
`;

const HeartButton = styled.button`
  width: 16px;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    filter: ${({ checked }) => (checked ? "none" : "grayscale(100%)")};
  }
`;
const TagStyle = styled.div`
  width: 77px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  ${({ color, borderColor, letterSpacing }) => `
    border: 1px solid ${borderColor};
    color: ${color};
    letter-spacing: ${letterSpacing};
  `}
  text-align: left;

  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ProductCard = ({ iproduct }) => {
  // 체크박스 0, 1
  const [isHeartChecked, setHeartChecked] = useState(
    iproduct.isHeartChecked === 1,
  );
  const handleHeartButtonClick = () => {
    const newValue = !isHeartChecked ? 1 : 0;
    setHeartChecked(!isHeartChecked);
    console.log(newValue);
  };

  // 인기상품, 신상품

  return (
    <CardContainer>
      <img
        className="card-img"
        src={iproduct.productPic}
        alt={iproduct.productPic}
      />
      <CardFlex>
        <div className="tagform">
          {iproduct.popFl === 1 && (
            <TagStyle
              color="#FF4F4F"
              borderColor="#FF4F4F"
              letter-spacing="0.75px"
            >
              인기상품
            </TagStyle>
          )}
          {iproduct.newFl === 1 && (
            <TagStyle
              color="#4F95FF"
              borderColor="#4F95FF"
              letter-spacing="3px"
            >
              신상품
            </TagStyle>
          )}
        </div>

        <div className="review">
          <p>리뷰{iproduct.reviewCnt}</p>
          <HeartButton
            key={iproduct.likeProduct}
            checked={isHeartChecked}
            onClick={handleHeartButtonClick}
          >
            <img
              src={
                isHeartChecked
                  ? process.env.PUBLIC_URL + "/assets/images/heart.svg"
                  : process.env.PUBLIC_URL + "/assets/images/heartoff.svg"
              }
              alt="heart"
              className="heart-icon"
            />
          </HeartButton>
        </div>
      </CardFlex>
      <p className="productNm">{iproduct.productNm}</p>
      <h2 className="price">{iproduct.price}원</h2>
    </CardContainer>
  );
};

export default ProductCard;
