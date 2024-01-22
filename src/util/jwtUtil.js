import axios from "axios";

// intercepter 진용 axios 생성
// 로그인 제외 및 일반적 api 요청들을 제외
// 인증이 필요한 경우에 활용하는 용도
const jwtAxios = axios.create();

// 요청(request) intercepter
// request 가 문제가 있든, 없든 실행될 내용 작성
const beforeReq = config => {
  console.log("요청전 전달 ...", config);
  return config;
};

// fail Request 요청보내서 실패했을때
const failReq = err => {
  console.log("요청후 실패시 ...", err);
  return Promise.reject(err);
};

// 응답(Response) 처리 코드

// Response 전처리
const beforeRes = async res => {
  console.log("Response 전처리...", res);
};

// Response Fail 처리
const responseFail = err => {
  console.log("Response Fail Err"), err;
  return Promise.reject(err);
};

//axios 인터셉터 적용
jwtAxios.interceptors.request.use(beforeReq, responseFail);
jwtAxios.interceptors.request.use(beforeRes, responseFail);

export default jwtAxios;