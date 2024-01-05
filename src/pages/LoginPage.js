import React from "react";
import LoginForm from "../components/LoginForm";
import {
  LoginBox,
  LoginBtArea,
  LoginFooter,
  LoginHeader,
  LoginMain,
  LoginPageBt,
  LoginPageWrap,
} from "../styles/loginpagestyle";
import styled from "@emotion/styled";

const FindBt = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  button {
    font-size: 15px;
    margin: 0 95px;
    border: none;
    background: transparent;
  }
`;

const LoginPage = () => {
  return (
    <>
      <LoginPageWrap>
        <LoginHeader />

        <LoginMain>
          <LoginBox>
            <img src={process.env.PUBLIC_URL + "/assets/images/logo.svg"} />
          </LoginBox>

          <LoginForm />

          <FindBt>
            <button>아이디 찾기</button>
            <button>비밀번호 찾기</button>
          </FindBt>

          <LoginBtArea>
            <LoginPageBt>
              <h1>아직 계정이 없으신가요?</h1>
              <h3>회원가입 바로가기</h3>
            </LoginPageBt>
          </LoginBtArea>
        </LoginMain>
        <LoginFooter>
          <h2>COPYRIGHT @ 나나빛 브랜드 공식몰 ALL RIGHTS RESERVED.</h2>
        </LoginFooter>
      </LoginPageWrap>
    </>
  );
};

export default LoginPage;
