import axios from "axios";
import { API_SERVER_HOST } from "../../util/util";

const prefix = `${API_SERVER_HOST}/api/product/productByAgeRange`;
// ?imiddle=0&imain=0&sortBy=0&page=0
export const getoist = async iproduct => {
  try {
    // http://192.168.0.144:5223/api/product/productByAgeRange?imiddle=0&imain=0&sortBy=0&page=0
    const res = await axios.get(`${prefix}/${iproduct}`);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      // console.log("성공");
      return res.data;
    } else {
      console.log("에러");
      return status.error;
    }
  } catch (error) {
    // HTTP 500 류의 오류 (서버에러)
    console.log(error);
  }
};

export const getList = async iproduct => {
  try {
    // "http://192.168.0.66:8080/api/todo/list?page=3&size=10"
    // const res = await axios.get(`${prefix}/list?page=${page}&size=${size}`);

    const res = await axios.get(`${prefix}/${iproduct}`, {
      // params: { ...param },
    });

    console.log(res.data);
    // HTTP 상태 코드 파악하여 별도로 처리하기
    const status = res.status.toString();

    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      // console.log("성공");
      return res.data;
    } else {
      console.log("에러");
      return status.error;
    }
  } catch (error) {
    // HTTP 500 류의 오류 (서버에러)
    console.log(error);
  }
};
