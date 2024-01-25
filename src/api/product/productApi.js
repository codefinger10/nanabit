// productApi.js

import axios from "axios";
import { API_SERVER_HOST } from "../../util/util";
import jwtAxios from "../../util/jwtUtil";

// http://192.168.0.144:5223/
const prefix = `${API_SERVER_HOST}/api/product`;
export const getProductPage = async ({
  productParam,
  successFn,
  failFn,
  errorFn,
}) => {
  // console.log("getTodoIuser");
  console.log("getProductPage");

  try {
    // const query = `${prefix}/productBySubcategory?sortBy=${sortBy}?대분류=${대분류}?중분류=${중분류}?페이지=${페이지}`;
    // const query = `${prefix}/productBySubcategory`;
    // const query = `${prefix}/productBySubcategory?sortBy=${sortBy}`;
    // 예시 const query = `/api/todo/${iuser}?y=${year}&m=${month}&d=${day}`;

    console.log(productParam);
    // const res = await axios.get(query, { productParam });
    // const query = `${prefix}/productBySubcategory?sortBy=${productParam.sortBy}&대분류=${productParam.대분류}&중분류=${productParam.중분류}&페이지=${productParam.페이지}`;

    const url = `${prefix}/productByAgeRange`;
    console.log("제품 호출 : ", url);
    const res = jwtAxios.get(url, { params: productParam });

    console.log("목록 서버 데이터 :", res.data);

    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("잘못된 요청입니다.");
    }
  } catch (error) {
    const sampleData = {
      products: [
        {
          iproduct: 7,
          productNm: "데모데이터",
          price: 13720,
          rcFl: 0,
          popFl: 1,
          newFl: 1,
          reviewCnt: 0,
          likeProduct: 1,
          repPic: "사진",
        },
        {
          iproduct: 8,
          productNm: "eleifend",
          price: 13720,
          rcFl: 0,
          popFl: 0,
          newFl: 0,
          reviewCnt: 0,
          likeProduct: 0,
          repPic: "사진",
        },
        {
          iproduct: 9,
          productNm: "eleifend",
          price: 13720,
          rcFl: 1,
          popFl: 0,
          newFl: 0,
          reviewCnt: 0,
          likeProduct: 0,
          repPic: "사진",
        },
      ],
    };
    errorFn(sampleData);
  }
};
