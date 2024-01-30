import jwtAxios from "../../util/jwtUtil";
import { API_SERVER_HOST } from "../../util/util";

const host = `${API_SERVER_HOST}/api/product/cart`;

// 제품 목록가져오기
export const getCart = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await jwtAxios.get(host);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("목록 호출 오류입니다.");
    }
  } catch (error) {
    errorFn("목록 호출 서버 에러에요");
  }
};

// 제품 삭제하기
export const deleteOne = async ({ iaddress, successFn, failFn, errorFn }) => {
  try {
    // http://192.168.0.144:5223/api/user/address?iaddress=45
    const res = await jwtAxios.delete(`${host}?iaddress=${iaddress}`);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("제품삭제 호출 오류입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};
//
