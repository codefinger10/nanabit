import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
// store 를 분할해서 Slice 를 만들겠다.
// 저장해둘 초기 값
const initState = {
  username: "",
};
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  // 로그인슬라이스에 내용을 갱신함수
  // 로그인 슬라이스에 값에 접근을 해서
  // CRUD
  reducers: {
    // 로그인
    // 무조건 2개만 들어올 수 있어요.
    login: (state, action) => {
      console.error;
      console.log("login.....");
      console.log(action.payload);
      // redux 상태 업데이트
      return { ...state, username: action.payload.username };
    },
    // 로그아웃
    logout: (state, action) => {
      console.log("logout.....");
    },
  },
});

// 슬라이스를 업데이트 해 주는 함수 내보내기
export const { login, logout } = loginSlice.actions;

// 외부에서 사용하도록 export 합니다.
// 아래는 그대로 사용하셔야 해요.
// reducer 라고 내보내야해요.
// 특히 조심하셔야 해요.
export default loginSlice.reducer;
