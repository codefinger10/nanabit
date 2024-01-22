import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "@emotion/styled";
import CommunityTitle from "../../components/basic/CommunityTitle";
import { Pagination } from "antd";
import LowHighBt from "../../components/product/LowHighBt";
import {
  GridContainer,
  MealButton,
  PagiWarp,
  ProductWrap,
} from "../../styles/product/ProductGridStyle";

const ProductLayout = () => {
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

  const dummyDataByCategory = {
    이유식: [
      { name: "중분류1", data: generateRandomDummyData() },
      { name: "중분류2", data: generateRandomDummyData() },
      { name: "중분류3", data: generateRandomDummyData() },
      { name: "중분류4", data: generateRandomDummyData() },
    ],
  };

  const [wishlist, setWishlist] = useState(
    Array(dummyDataByCategory[activeCategory][0].data.length).fill(false),
  );

  const handleCheckboxChange = index => {
    setWishlist(prevWishlist => {
      const updatedWishlist = [...prevWishlist];
      updatedWishlist[index] = !updatedWishlist[index];
      return updatedWishlist;
    });
  };

  useEffect(() => {
    const selectedSubcategory = dummyDataByCategory[activeCategory].find(
      category => category.name === activeSubcategory,
    );
    setProductData(selectedSubcategory.data);
    setWishlist(Array(selectedSubcategory.data.length).fill(false));
  }, [activeCategory, activeSubcategory]);

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = productData.slice(startIndex, endIndex);

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
          {dummyDataByCategory[activeCategory].map(subcategory => (
            <MealButton
              key={subcategory.name}
              onClick={() => handleSubcategoryClick(subcategory.name)}
              active={activeSubcategory === subcategory.name}
            >
              {subcategory.name}
            </MealButton>
          ))}
        </div>

        <LowHighBt />

        <GridContainer itemsPerPage={itemsPerPage}>
          {displayedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index + startIndex}
              wishlist={wishlist}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </GridContainer>
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
    </ProductWrap>
  );
};

export default ProductLayout;
