import jwtAxios from "../../util/jwtUtil";
import { API_SERVER_HOST } from "../../util/util";

// http://112.222.157.156:5223/api/review?page=1
const host = `${API_SERVER_HOST}/api/review`;

// 리뷰 목록가져오기
export const getReviewList = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await jwtAxios.get(`${host}`, { params: param }, header);

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
