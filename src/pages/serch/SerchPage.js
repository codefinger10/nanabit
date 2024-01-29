import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

import {
  SearchBt,
  SearchGridContainer,
  SearchPagiWarp,
  SearchWrap,
  SearchWrapf,
} from "../../styles/search/searchFormStyle";
import { GridContainer, PagiWarp } from "../../styles/product/ProductGridStyle";
import ProductCard from "../product/ProductCard";
import { SearchBox } from "../../styles/search/resetBtnStyle";
import LowHighBt from "../../components/product/LowHighBt";
import { Pagination } from "antd";
import { getProductPage } from "../../api/product/productApi";
import { getSearchPage, postSearchPage } from "../../api/product/searchApi";
import { useLocation } from "react-router";

const initState = {
  iproduct: 0,
  productNm: "",
  price: 0,
  rcFl: 0,
  popFl: 0,
  newFl: 0,
  reviewCnt: 0,
  likeProduct: 0,
  repPic: "",
};

const SearchPage = () => {
  const locationInfo = useLocation();
  // console.log("useNavigate 의 sate 활용해보자", locationInfo);
  const { searchTextInput } = locationInfo.state;
  // console.log(searchTextInput);

  const [productData, setProductData] = useState([]);
  const [serverData, setServerData] = useState(initState);
  //버튼
  const [selectedButtons, setSelectedButtons] = useState([]);

  const [activeSubcategory, setActiveSubcategory] = useState();
  const [itemsPerPage] = useState(16);

  const fetchData = subcategory => {
    postSearchPage({
      searchParam: {
        keyword: "string",
        minPrice: 0,
        maxPrice: 0,
        sortBy: 0,
        cat: [
          {
            imiddle: 1,
            imain: 2,
          },
        ],
        page: 0,
      },
      successFn,
      failFn,
      errorFn,
    });
  };

  const successFn = data => {
    console.log("successFn : ", data);
    // setProductData(data.products);
    // setServerData(Array(data.products.length).fill(false));
  };
  const failFn = data => {
    console.log("failFn : ", data);
    alert("failFn : 데이터 호출에 실패하였습니다.");
  };

  const errorFn = data => {
    console.log("errorFn : ", data);
    alert("서버상태 불안정 그래서, 데모테스트했음.");
    // setProductData(data.products);
    // setServerData(Array(data.products.length).fill(false));
  };

  // 버튼 3개만
  const handleClickSearch = value => {
    if (value === "" || activeSubcategory.length === 3) {
      setActiveSubcategory([""]); // 선택된 카테고리 초기화
    } else if (activeSubcategory.includes(value)) {
      setActiveSubcategory(activeSubcategory.filter(e => e !== value)); // 해당 카테고리 제거
    } else {
      setActiveSubcategory([...activeSubcategory.filter(e => e !== ""), value]); // 기존 카테고리 제거 후 새로운 카테고리 추가
    }
  };

  // 페이지

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  useEffect(() => {
    fetchData(activeSubcategory);
  }, [currentPage]);

  // start x버튼 (검색을 해야만 x버튼이 보이게)
  const [searchText, setSearchText] = useState("");

  const handleInputChange = e => {
    setSearchText(e.target.value);
  };

  const handleResetButtonClick = () => {
    setSearchText("");
  };
  // end  x버튼

  return (
    <div>
      <SearchWrap>
        <div className="srech-init">
          <div className="border-word">
            <div className="searchWord">
              <h1>검색어: {searchTextInput}</h1>
            </div>

            <div className="cateBt">
              <h1>카테고리</h1>
              <div className="mealwrap">
                <div className="input-cate">
                  <h2>이유식</h2>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(1)}
                    active={activeSubcategory === 1}
                  >
                    초기(4~6개월)
                  </SearchBt>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(2)}
                    active={activeSubcategory === 2}
                  >
                    중기(7~9개월)
                  </SearchBt>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(3)}
                    active={activeSubcategory === 3}
                  >
                    후기(10~12개월)
                  </SearchBt>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(4)}
                    active={activeSubcategory === 4}
                  >
                    완료기(12~24개월)
                  </SearchBt>
                </div>
                <div className="input-cate">
                  <h2>유아가전</h2>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(5)}
                    active={activeSubcategory === 5}
                  >
                    살균기
                  </SearchBt>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(6)}
                    active={activeSubcategory === 6}
                  >
                    기타제품
                  </SearchBt>
                </div>
                <div className="input-cate">
                  <h2>놀이용품</h2>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(7)}
                    active={activeSubcategory === 7}
                  >
                    유아교구
                  </SearchBt>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(8)}
                    active={activeSubcategory === 8}
                  >
                    애착인형
                  </SearchBt>
                </div>
                <div className="input-cate">
                  <h2>위생용품</h2>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(9)}
                    active={activeSubcategory === 9}
                  >
                    기저귀
                  </SearchBt>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(10)}
                    active={activeSubcategory === 10}
                  >
                    목욕용품
                  </SearchBt>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch("기타 위생용품")}
                    active={activeSubcategory === 11}
                  >
                    기타 위생용품
                  </SearchBt>
                </div>
                <div className="input-cate">
                  <h2>모유/수유용품</h2>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(12)}
                    active={activeSubcategory === 12}
                  >
                    수유용품
                  </SearchBt>
                  <SearchBt
                    type="button"
                    onClick={() => handleClickSearch(13)}
                    active={activeSubcategory === 13}
                  >
                    모유용품
                  </SearchBt>
                </div>
              </div>
            </div>
            <div className="input-price">
              <h1>가격대</h1>
              <input type="number" placeholder="최소 가격" />

              <p>~</p>
              <input type="number" placeholder="최대 가격" />

              {/* <input type="submit" /> */}
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
                <button>검색</button>
              </SearchBox>
            </div>
          </div>
        </div>
      </SearchWrap>

      <LowHighBt />

      <SearchPagiWarp>
        <div className="srech-initf">
          <SearchGridContainer>
            {productData.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SearchGridContainer>
        </div>
      </SearchPagiWarp>

      <PagiWarp>
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={productData.length}
          pageSize={itemsPerPage}
          className="pagination"
        />
      </PagiWarp>
    </div>
  );
};

export default SearchPage;
