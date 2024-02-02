import axios from "axios";
import jwtAxios from "../../util/jwtUtil";

export const getIBorad = async () => {
  try {
    const res = await jwtAxios.get(`/api/board/write`);
    // console.log(res);

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
export const getList = async (param, search) => {
  try {
    const res = await axios.get(`/api/board`, {
      params: { ...param, keyword: search },
    });
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

export const getOne = async id => {
  try {
    const res = await jwtAxios.get(`/api/board/${id}`);
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

export const getPage = async param => {
  try {
    const res = await jwtAxios.get(`/api/board/pagenation`, {
      params: { ...param },
    });
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

export const postImage = async (
  iboard,
  { pics, successFn, failFn, errorFn },
) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await jwtAxios.post(
      `/api/board/image-upload?iboard=${iboard}`,
      pics,
      header,
    );
    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      // successFn(res.data);
      return res.data;
    } else {
      failFn("업로드 실패입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};
