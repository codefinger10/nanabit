import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

import { SearchBt, SearchWrap } from "../../styles/search/searchFormStyle";
import { GridContainer, PagiWarp } from "../../styles/product/ProductGridStyle";
import ProductCard from "../product/ProductCard";

const SearchPage = () => {
  const products = [
    {
      id: 1,
      name: "상품 1",
      description: "상품 1의 설명",
      price: 5000,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "상품 2",
      description: "상품 2의 설명",
      price: 7000,
      image: "https://via.placeholder.com/150",
    },
    // ... 다른 상품들
  ];
  const [isProperty, setIsProperty] = useState([]);
  const [productData, setProductData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("이유식");
  const [activeSubcategory, setActiveSubcategory] = useState("중분류1");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);

  // 더미데이터
  const generateDummyData = (start, end) => {
    const dummyData = [];
    for (let i = start; i <= end; i++) {
      dummyData.push({
        id: i,
        name: `상품 ${i}`,
        description: `상품 ${i}의 설명`,
        price: i * 5000,
        image: "https://via.placeholder.com/150",
      });
    }
    return dummyData;
  };

  const generateRandomDummyData = () => {
    const numItems = Math.floor(Math.random() * 30) + 1;
    return generateDummyData(1, numItems);
  };

  const handleClickSearch = value => {
    if (value === "") {
      setIsProperty([""]);
    } else if (isProperty.length === 0) {
      setIsProperty([""]);
    } else if (isProperty.includes(value)) {
      setIsProperty(isProperty.filter(e => e !== value));
    } else if (isProperty.length > 0) {
      setIsProperty([...isProperty.filter(e => e !== ""), value]);
    } else {
      setIsProperty([""]);
    }
  };

  // product

  return (
    <div>
      <SearchWrap>
        <div className="srech-init">
          <div className="searchWord">
            <h1>검색어</h1>
          </div>

          <div className="cateBt">
            <h1>카테고리</h1>
            <div className="mealwrap">
              <div className="input-cate">
                <h2>이유식</h2>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("장난감")}
                  active={isProperty.includes("장난감")}
                >
                  초기(4~6개월)
                </SearchBt>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("이유식초기")}
                  active={isProperty.includes("이유식초기")}
                >
                  중기(7~9개월)
                </SearchBt>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("이유식중기")}
                  active={isProperty.includes("이유식중기")}
                >
                  후기(10~12개월)
                </SearchBt>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("이유식후기")}
                  active={isProperty.includes("이유식후기")}
                >
                  완료기(12~24개월)
                </SearchBt>
              </div>
              <div className="input-cate">
                <h2>유아가전</h2>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("살균기")}
                  active={isProperty.includes("살균기")}
                >
                  살균기
                </SearchBt>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("기타제품")}
                  active={isProperty.includes("기타제품")}
                >
                  기타제품
                </SearchBt>
              </div>
              <div className="input-cate">
                <h2>놀이용품</h2>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("유아교구")}
                  active={isProperty.includes("유아교구")}
                >
                  유아교구
                </SearchBt>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("애착인형")}
                  active={isProperty.includes("애착인형")}
                >
                  애착인형
                </SearchBt>
              </div>
              <div className="input-cate">
                <h2>위생용품</h2>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("기저귀")}
                  active={isProperty.includes("기저귀")}
                >
                  기저귀
                </SearchBt>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("목욕용품")}
                  active={isProperty.includes("목욕용품")}
                >
                  목욕용품
                </SearchBt>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("기타 위생용품")}
                  active={isProperty.includes("기타 위생용품")}
                >
                  기타 위생용품
                </SearchBt>
              </div>
              <div className="input-cate">
                <h2>모유/수유용품</h2>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("수유용품")}
                  active={isProperty.includes("수유용품")}
                >
                  수유용품
                </SearchBt>
                <SearchBt
                  type="button"
                  onClick={() => handleClickSearch("모유용품")}
                  active={isProperty.includes("모유용품")}
                >
                  모유용품
                </SearchBt>
              </div>
            </div>
          </div>
          <div className="input-price">
            <h1>가격대</h1>
            <input type="text" placeholder="최소 가격" />
            <p>~</p>
            <input type="text" placeholder="최대 가격" />

            <button>검색</button>
          </div>
          <div className="input-search">
            <h1>검색</h1>
            <input type="text" />
          </div>
        </div>
      </SearchWrap>
      <GridContainer>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridContainer>
    </div>
  );
};

export default SearchPage;
