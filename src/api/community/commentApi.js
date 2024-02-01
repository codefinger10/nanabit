import jwtAxios from "../../util/jwtUtil";

export const getList = async id => {
  try {
    const res = await jwtAxios.get(`/api/comment?iboard=${id}`);
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
