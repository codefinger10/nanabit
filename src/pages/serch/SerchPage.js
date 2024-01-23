import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

import {
  SearchBt,
  SearchWrap,
  SearchWrapf,
} from "../../styles/search/searchFormStyle";
import { GridContainer, PagiWarp } from "../../styles/product/ProductGridStyle";
import ProductCard from "../product/ProductCard";
import { SearchBox } from "../../styles/search/resetBtnStyle";
import LowHighBt from "../../components/product/LowHighBt";

const SearchPage = () => {
  const [isProperty, setIsProperty] = useState([]);

  // 검색어를 상태에 저장
  const [searchedText, setSearchedText] = useState("");
  const handleSearch = text => {
    setSearchedText(text);
  };
  // start x버튼 (검색을 해야만 x버튼이 보이게)
  const [searchText, setSearchText] = useState("");

  const handleInputChange = e => {
    setSearchText(e.target.value);
  };

  const handleResetButtonClick = () => {
    setSearchText("");
  };
  // end  x버튼

  const products = [
    {
      id: 1,
      iproduct: 0,
      imiddle: 0,
      productNm: `상품인데에dkdkdk에에에에에에에 `,
      popFl: 1,
      newFl: 1,
      sortBy: 0,
      reviewCnt: 3,

      price: 5000,
      pics: ["https://via.placeholder.com/150"],
    },
    {
      id: 1,
      iproduct: 0,
      imiddle: 0,
      productNm: `상품인데에dkdkdk에에에에에에에 `,
      popFl: 1,
      newFl: 1,
      sortBy: 0,
      reviewCnt: 3,

      price: 5000,
      pics: ["https://via.placeholder.com/150"],
    },
    {
      id: 1,
      iproduct: 0,
      imiddle: 0,
      productNm: `상품인데에dkdkdk에에에에에에에 `,
      popFl: 1,
      newFl: 1,
      sortBy: 0,
      reviewCnt: 3,

      price: 5000,
      pics: ["https://via.placeholder.com/150"],
    },
    {
      id: 1,
      iproduct: 0,
      imiddle: 0,
      productNm: `상품인데에dkdkdk에에에에에에에 `,
      popFl: 1,
      newFl: 1,
      sortBy: 0,
      reviewCnt: 3,

      price: 5000,
      pics: ["https://via.placeholder.com/150"],
    },
    {
      id: 1,
      iproduct: 0,
      imiddle: 0,
      productNm: `상품인데에dkdkdk에에에에에에에 `,
      popFl: 1,
      newFl: 1,
      sortBy: 0,
      reviewCnt: 3,

      price: 5000,
      pics: ["https://via.placeholder.com/150"],
    },
    {
      id: 1,
      iproduct: 0,
      imiddle: 0,
      productNm: `상품인데에dkdkdk에에에에에에에 `,
      popFl: 1,
      newFl: 1,
      sortBy: 0,
      reviewCnt: 3,

      price: 5000,
      pics: ["https://via.placeholder.com/150"],
    },
    {
      id: 1,
      iproduct: 0,
      imiddle: 0,
      productNm: `상품인데에dkdkdk에에에에에에에 `,
      popFl: 1,
      newFl: 1,
      sortBy: 0,
      reviewCnt: 3,

      price: 5000,
      pics: ["https://via.placeholder.com/150"],
    },
    // ... 다른 상품들
  ];

  // start 카테고리 태그 중복선택하게 하는..
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
  // end 카테고리 태그 중복선택하게 하는..

  // product
  const SearchGridContainer = styled.div`
    /* width: 1280px; */
    display: grid;
    grid-template-columns: repeat(4, 305px);
    // itemsPerPage에 따라 동적으로 행의 수 계산
    gap: 20px;
    /* margin: 20px; */
    padding-right: 20px;
    > * {
      grid-column: span 1;
      grid-row: span 1; /* 각 카드가 1행을 차지하도록 수정 */
    }
    /* margin: 0 auto; */
  `;

  const SearchPagiWarp = styled.div`
    width: 100%;
    width: 1280px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    margin: 0 auto;
  `;
  return (
    <div>
      <SearchWrap>
        <div className="srech-init">
          <div className="border-word">
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
              {/* <input type="text" /> */}

              <SearchBox showResetButton={!!searchText}>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  autoFocus
                  value={searchText}
                  onChange={handleInputChange}
                />
                <button
                  className="btn-reset"
                  type="reset"
                  onClick={handleResetButtonClick}
                >
                  X
                </button>
              </SearchBox>
            </div>
          </div>
        </div>
      </SearchWrap>

      <LowHighBt />

      <SearchPagiWarp>
        <div className="srech-initf">
          <SearchGridContainer>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SearchGridContainer>
        </div>
      </SearchPagiWarp>
    </div>
  );
};

export default SearchPage;
