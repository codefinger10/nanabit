import { API_SERVER_HOST } from "../../util/util";
import jwtAxios from "../../util/jwtUtil";

const prefix = `${API_SERVER_HOST}/api/order`;
// const API_SERVER_HOST = "";
export const getOrderListPage = async ({
  orderParam,
  successFn,
  failFn,
  errorFn,
}) => {
  // console.log("getTodoIuser");
  // console.log("orderParam");

  try {
    // console.log(orderParam);
    const url = `${prefix}`;
    const res = await jwtAxios.get(url, { params: orderParam });

    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      console.log("데이터임", res.data);
      successFn(res.data);
    } else {
      failFn("잘못된 요청입니다.");
    }
  } catch (error) {
    errorFn("목록호출안된다");
  }
};
// 112.222.157.156:5223/api/order?iorder=1
// export const deleteOne = async ({ iorder, successFn, failFn, errorFn }) => {
//   try {
//     // http://192.168.0.144:5223/api/user/address?iaddress=45
//     const url = `${prefix}`;
//     const res = await jwtAxios.delete(url, { data: { iorder } });

//     const status = res.status.toString();
//     if (status.charAt(0) === "2") {
//       successFn(res.data);
//     } else {
//       failFn("제품삭제 호출 오류입니다.");
//     }
//   } catch (error) {
//     errorFn(error);
//   }
// };

export const deleteOne = async ({ iorder, successFn, failFn, errorFn }) => {
  try {
    // http://192.168.0.144:5223/api/user/address?iaddress=45
    const url = `${prefix}?iorder=${iorder}`;
    const res = await jwtAxios.delete(url);

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

export const postOne = async ({ idetails, successFn, failFn, errorFn }) => {
  try {
    // http://192.168.0.144:5223/api/user/address?iaddress=45
    const url = `${prefix}/${idetails}`;
    const res = await jwtAxios.delete(url);

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
