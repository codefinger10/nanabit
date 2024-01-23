import axios from "axios";

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

export const postSignCheck = async () => {
  try {
    const res = await axios.post(`/api/user/sign-up/check`);
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

export const putModify = async () => {
  try {
    const res = await axios.put(`/api/user/modify`);
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

export const postModify = async () => {
  try {
    const res = await axios.post(`/api/user/modify`);
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
    const res = await axios.delete(`/api/user/modify`);
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
