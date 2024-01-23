import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "@emotion/styled";
import CommunityTitle from "../../components/basic/CommunityTitle";
import { Pagination } from "antd";
import LowHighBt from "../../components/product/LowHighBt";
import { getList } from "../../api/product/productApi";
import {
  GridContainer,
  MealButton,
  PagiWarp,
  ProductWrap,
} from "../../styles/product/ProductGridStyle";
import useCustomMove from "../../hooks/useCustomMove";

// 데이터 초기화 값
const listState = {
  imiddle: 0,
  imain: 0,
  sortBy: 0,
  page: 0,
};
const initState = [
  {
    iproduct: 1,
    productNm: "string",
    price: 0,
    rcFl: 0,
    popFl: 0,
    newFl: 0,
    reviewCnt: 0,
    likeProduct: 0,
    productPic: ["string"],
  },
];

const ProductLayout = ({ iproduct }) => {
  const { imain, sortBy, page, moveToRead } = useCustomMove();
  const [productData, setProductData] = useState([]);

  const [activeCategory, setActiveCategory] = useState("");
  const [activeSubcategory, setActiveSubcategory] = useState("중분류1");
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(16);

  // 하나의 자료만 가져온다.
  useEffect(() => {
    getList({ iproduct })
      .then(result => {
        productData(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, [iproduct]);
  // 리스트목록
  const [serverData, setServerData] = useState([
    {
      iproduct: 1,
      productNm: "string",
      price: 0,
      rcFl: 0,
      popFl: 0,
      newFl: 0,
      reviewCnt: 0,
      likeProduct: 0,
      productPic: ["string"],
    },
  ]);
  useEffect(() => {
    getList({ imain, sortBy, page })
      .then(result => {
        console.log("결과", result);
        setServerData(result);
      })
      .catch(err => {
        console.log("호출에 실패", err);
        alert("데이터 호출에 실패하였습니다");
      });
  }, [imain, sortBy, page]);

  // 더미데이터
  const getList = (start, end) => {
    const dummyData = [];
    for (let i = start; i <= end; i++) {
      dummyData.push({
        id: i,
        iproduct: 0,
        imiddle: 0,
        productNm: `상품인데에dkdkdk에에에에에에에 ${i}`,
        popFl: 1,
        newFl: 1,
        sortBy: 0,
        reviewCnt: i + 2,
        description: `상품 ${i}의 설명`,
        price: i * 5000,
        pics: ["https://via.placeholder.com/150"],
      });
    }
    return dummyData;
  };

  const generateRandomDummyData = () => {
    const numItems = Math.floor(Math.random() * 30) + 1;
    // return generateDummyData(1, numItems);
  };

  const dummyDataByCategory = {
    이유식: [
      { name: "중분류1", data: generateRandomDummyData() },
      { name: "중분류2", data: generateRandomDummyData() },
      { name: "중분류3", data: generateRandomDummyData() },
      { name: "중분류4", data: generateRandomDummyData() },
    ],
  };

  const handleCategoryClick = category => {
    setActiveCategory(category);
    // 기본적으로 첫 번째 중분류 선택
    setActiveSubcategory(dummyDataByCategory[category][0].name);
    setCurrentPage(1);
  };

  const handleSubcategoryClick = subcategory => {
    setActiveSubcategory(subcategory);
    setCurrentPage(1);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const displayedProducts = productData.slice(startIndex, endIndex);

  return (
    <ProductWrap>
      <div>
        <div className="protitle">
          <CommunityTitle
            maintxt="이유식"
            subtxt="배송 및 상품관련 공지사항을 확인해 주세요."
          />
        </div>

        <div>
          {serverData.iproduct.map(item => (
            <MealButton
              key={item.iproduct}
              onClick={() => handleSubcategoryClick(item.name)}
              active={activeSubcategory === item.imiddle}
            >
              {item.name}
            </MealButton>
          ))}
        </div>

        <LowHighBt />

        <GridContainer>
          {serverData.iproduct.map(item => (
            <ProductCard
              key={item.iproduct}
              // index={index + startIndex}
              wishlist={item}
              moveToRead={item.iproduct}
            />
          ))}
        </GridContainer>
        <PagiWarp>
          <Pagination
            current={currentPage}
            onChange={handlePageChange}
            total={productData.length}
            className="pagination"
          />
        </PagiWarp>
      </div>
    </ProductWrap>
  );
};

export default ProductLayout;
