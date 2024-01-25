import axios from "axios";
import jwtAxios from "../../util/jwtUtil";

export const postSign = async ({ values, successFn, failFn, errFn }) => {
  console.log(values);
  try {
    const res = await axios.post(`/api/user/sign-up`, { ...values });
    console.log(res.data);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return successFn(res.data);
    } else {
      return failFn(status.error);
    }
  } catch (error) {
    errFn(error);
  }
};

export const getList = async () => {
  try {
    const res = await axios.get("/api/user/sign-up");
    console.log(res);

    // HTTP 상태 코드 파악하기
    const status = res.status.toString();
    // 문자열 예) "200" 또는 "404" 의 0번 위치 글자를 알아낸다.
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      // console.log("성공");
      return res.data;
    } else {
      // console.log("실패");
      return "잘못된 정보를 전달함.";
    }
  } catch (error) {
    console.log(error);
  }
};

export const postSignCheck = async userObject => {
  try {
    const res = await axios.post(`/api/user/sign-up/check-id`, userObject);
    console.log(res);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return res.data;
    } else {
      return "잘못된 정보를 전달함.";
    }
  } catch (error) {
    console.log(error);
  }
};

export const putModify = async values => {
  console.log(values);
  try {
    const res = await jwtAxios.put(`/api/user/modify`, values);
    console.log(res);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return res.data;
    } else {
      return "잘못된 정보를 전달함.";
    }
  } catch (error) {
    console.log(error);
  }
};

export const postModify = async values => {
  console.log(values);
  // {upw: "xptmxm123!@#"}
  try {
    const res = await jwtAxios.post(`/api/user/modify`, values);
    console.log(res);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return res.data;
    } else {
      return "잘못된 정보를 전달함.";
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteModify = async () => {
  try {
    const res = await jwtAxios.delete(`/api/user/modify`);
    console.log(res);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return res.data;
    } else {
      return "잘못된 정보를 전달함.";
    }
  } catch (error) {
    console.log(error);
  }
};
