import axios from "axios";

// export const getList = async ({ param, successFn, failFn, errorFn }) => {
//     try {
//       const res = await axios.get(`${host}/list`, { params: param });
//       const status = res.status.toString();
//       if (status.charAt(0) === "2") {
//         successFn(res.data);
//       } else {
//         failFn("목록 호출 오류입니다.");
//       }
//     } catch (error) {
//       errorFn("목록 호출 서버 에러에요");
//     }
//   };

// 더미데이터 연동 확인
export const getDemoList = ({ setDemoData }) => {
  axios
    .get("demodataformain/mainitemdemodata.json")
    .then(res => {
      setDemoData(res.data);
      return res; // 이 부분을 추가하여 Promise를 반환하도록 함
    })
    .catch(error => {
      console.log(error);
    });
};
