// ProductCard.js

import React, { useState } from "react";
import {
  CardContainer,
  CardFlex,
  HeartButton,
  TagStyle,
} from "../../styles/product/productCardStyle";

const initData = {
  iproduct: 0,
  productNm: "",
  price: 0,
  rcFl: 0,
  popFl: 0,
  newFl: 0,
  reviewCnt: 0,
  repPic: "",
};
const ProductCard = ({ product }) => {
  const [isHeartChecked, setHeartChecked] = useState();

  const handleHeartButtonClick = () => {
    const newValue = !isHeartChecked ? 1 : 0;
    setHeartChecked(!isHeartChecked);
    console.log(newValue);
  };

  return (
    <CardContainer>
      <img className="card-img" src={product.repPic} alt={product.repPic} />
      <CardFlex>
        <div className="tagform">
          {product.popFl === 1 && (
            <TagStyle
              color="#FF4F4F"
              borderColor="#FF4F4F"
              letter-spacing="0.75px"
            >
              인기상품
            </TagStyle>
          )}
          {product.newFl === 1 && (
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
          <p>리뷰{product.reviewCnt}</p>
          <HeartButton
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
      <p className="productNm">{product.productNm}</p>
      <h2 className="price">{product.price}원</h2>
    </CardContainer>
  );
};

export default ProductCard;
