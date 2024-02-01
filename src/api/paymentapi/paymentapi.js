import axios from "axios";
import { API_SERVER_HOST } from "../../util/util";

const host = `${API_SERVER_HOST}/api/order`;

// 구매할 목록 가져오기
// http://192.168.0.144:5223/api/order/confirm?iorder=1
export const getPayItemList = async ({
  iorder,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const res = await axios.get(`${host}/confirm`, { params: { iorder } });
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

// 결제완료 페이지로 넘기기
// http://192.168.0.144:5223/api/order
export const putOrderPage = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios.put(`${host}`);
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
