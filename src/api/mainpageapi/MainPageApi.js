import axios from "axios";
import { API_SERVER_HOST } from "../../util/util";
import jwtAxios from "../../util/jwtUtil";

const host = `${API_SERVER_HOST}/api/product`;

// 더미데이터 연동 확인
export const getDemoList = ({ setDemoData }) => {
  axios
    .get("demodataformain/mainitemdemodata.json")
    .then(res => {
      setDemoData(res.data);
      return res; // 이 부분을 추가하여 Promise를 반환하도록 함
    })
    .catch(error => {
      console.log(error);
    });
};

// 메인 제품 가져오기
// http://192.168.0.144:5223/api/product/main
// export const getMainList = async ({ successFn, failFn, errorFn }) => {
//   try {
//     const header = { headers: { "Content-Type": "application/json" } };
//     const res = await jwtAxios.get(`${host}`, header);
//     const status = res.status.toString();
//     if (status.charAt(0) === "2") {
//       successFn(res.data);
//     } else {
//       failFn("목록 호출 오류입니다.");
//     }
//   } catch (error) {
//     errorFn("목록 호출 서버 에러에요", error);
//   }
// };

// 메인 제품 가져오기
// http://192.168.0.144:5223/api/product/main
export const getMainList = async ({ successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await jwtAxios.get(`${host}/main`, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("목록 호출 오류입니다.");
    }
  } catch (error) {
    errorFn("목록 호출 서버 에러에요", error);
  }
};

// 찜 기능
// http://192.168.0.144:5223/api/product/wish?iproduct=4
export const getWish = async ({ iproduct, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await jwtAxios.get(`${host}/wish`, iproduct, header);
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("목록 호출 오류입니다.");
    }
  } catch (error) {
    errorFn("목록 호출 서버 에러에요", error);
  }
};
