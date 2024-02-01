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
export const deleteCart = async ({
  iproduct,
  successFn,
  failFn,
  errorFn,
  updateData,
}) => {
  try {
    const res = await jwtAxios.delete(`${host}?iproduct=${iproduct}`);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else if (status.charAt(0) === "4") {
      failFn("니가 잘못함");
    } else {
      failFn("제품삭제 호출 오류입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};

// 제품 수정하기
export const patchCart = async ({
  iproduct,
  productCnt,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const res = await jwtAxios.patch(
      `${host}??iproduct=${iproduct}&productCnt=${productCnt}`,
      { productCnt, iproduct },
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("상세정보 호출 오류입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};
