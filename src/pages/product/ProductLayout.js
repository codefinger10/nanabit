import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "@emotion/styled";
import CommunityTitle from "../../components/basic/CommunityTitle";

const ProductLayout = () => {
  const MealButton = styled.button`
    border: 1px solid ${props => (props.active ? "#e9b25f" : "#d9d9d9")};
    background: #fff;
    color: ${props => (props.active ? "#e9b25f" : "#bababa")};
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 25%;
    height: 75px;
    cursor: pointer;
    margin-bottom: 50px;
  `;

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 20px;
  `;

  const [productData, setProductData] = useState([]);
  const [activeButton, setActiveButton] = useState("임신/출산 (~0개월)");

  const dummyDataByButton = {};

  // 임신/출산 (~0개월) 데이터 생성
  dummyDataByButton["임신/출산 (~0개월)"] = [];
  for (let i = 1; i <= 16; i++) {
    dummyDataByButton["임신/출산 (~0개월)"].push({
      id: i,
      name: `상품 ${i}`,
      description: `상품 ${i}의 설명`,
      price: i * 5000,
      image: "https://via.placeholder.com/150",
    });
  }

  // 신생아 (1~3개월) 데이터 생성
  dummyDataByButton["신생아 (1~3개월)"] = [];
  for (let i = 9; i <= 16; i++) {
    dummyDataByButton["신생아 (1~3개월)"].push({
      id: i,
      name: `상품 ${i}`,
      description: `상품 ${i}의 설명`,
      price: i * 5000,
      image: "https://via.placeholder.com/150",
    });
  }

  // 베이비 (4~23개월) 데이터 생성
  dummyDataByButton["베이비 (4~23개월)"] = [];
  for (let i = 17; i <= 24; i++) {
    dummyDataByButton["베이비 (4~23개월)"].push({
      id: i,
      name: `상품 ${i}`,
      description: `상품 ${i}의 설명`,
      price: i * 5000,
      image: "https://via.placeholder.com/150",
    });
  }

  // 키즈(24개월~) 데이터 생성
  dummyDataByButton["키즈(24개월~)"] = [];
  for (let i = 25; i <= 32; i++) {
    dummyDataByButton["키즈(24개월~)"].push({
      id: i,
      name: `상품 ${i}`,
      description: `상품 ${i}의 설명`,
      price: i * 5000,
      image: "https://via.placeholder.com/150",
    });
  }

  useEffect(() => {
    setProductData(dummyDataByButton[activeButton]);
  }, [activeButton]);

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <CommunityTitle
        maintxt="이유식"
        subtxt="배송 및 상품관련 공지사항을 확인해 주세요."
      />
      <div>
        <MealButton
          onClick={() => handleButtonClick("임신/출산 (~0개월)")}
          active={activeButton === "임신/출산 (~0개월)"}
        >
          임신/출산 (~0개월)
        </MealButton>
        <MealButton
          onClick={() => handleButtonClick("신생아 (1~3개월)")}
          active={activeButton === "신생아 (1~3개월)"}
        >
          신생아 (1~3개월)
        </MealButton>
        <MealButton
          onClick={() => handleButtonClick("베이비 (4~23개월)")}
          active={activeButton === "베이비 (4~23개월)"}
        >
          베이비 (4~23개월)
        </MealButton>
        <MealButton
          onClick={() => handleButtonClick("키즈(24개월~)")}
          active={activeButton === "키즈(24개월~)"}
        >
          키즈(24개월~)
        </MealButton>
      </div>
      <GridContainer>
        {productData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridContainer>
    </div>
  );
};

export default ProductLayout;
