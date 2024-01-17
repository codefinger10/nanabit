// ProductCard.js
import React, { useState } from "react";

import { StyledLabel } from "../../styles/mainstyle";
import styled from "@emotion/styled";
import Heart from "../../components/product/Heart";

const CardContainer = styled.div`
  padding: 16px;
  margin: 16px;

  .card-img {
    width: 263px;
    height: 263px;
  }
`;

const ProductName = styled.h3`
  overflow: hidden;
  white-space: nowrap; /* 텍스트를 한 줄에 표시 */
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 '...'로 표시 */
`;

const ProductCard = ({ product }) => {
  return (
    <CardContainer>
      <img className="card-img" src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <p>{product.description}</p>
      <p>가격: {product.price} 원</p>
      <button>장바구니에 추가</button>
      <Heart />
    </CardContainer>
  );
};

export default ProductCard;
