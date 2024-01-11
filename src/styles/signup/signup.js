import styled from "@emotion/styled";
import { Input } from "antd";

export const SignupWrap = styled.div`
  width: 1220px;
  margin: 0 auto;
  padding-top: 10rem;
  .signimg {
    margin-bottom: 1rem;
  }
  span {
    font-size: 2rem;
  }
  .signinfo {
    border-top: 3px solid #868686;
    border-bottom: 3px solid #868686;
    font-size: 2.5rem;
    margin-top: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;
export const MyInput = styled(Input)`
  width: 1220px;
  height: 50px;
`;
export const MyPw = styled(Input.Password)`
  width: 1220px;
  height: 50px;
`;

export const themeObj = {
  bgColor: "#FFFFFF",
  pageBgColor: "#FFFFFF",
  postcodeTextColor: "#C05850",
  emphTextColor: "#222222",
};

export const postCodeStyle = {
  width: "260px",
  height: "380px",
};
