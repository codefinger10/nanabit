import React from "react";
import LoginForm from "../components/loginpage/LoginForm";
import {
  FindBt,
  LoginBox,
  LoginBtArea,
  LoginFooter,
  LoginHeader,
  LoginMain,
  LoginPageBt,
  LoginPageWrap,
} from "../styles/loginpage/loginpagestyle";
import useCustomMove from "../hooks/useCustomMove";

const LoginPage = () => {
  const { moveToSignUp } = useCustomMove();
  
  return (
    <>
      <LoginPageWrap>
        <LoginHeader />

        <LoginMain>
          <LoginBox>
            <img src={process.env.PUBLIC_URL + "/assets/images/logo.svg"} />
          </LoginBox>

          <LoginForm />

          <LoginBtArea>
            <LoginPageBt onClick={moveToSignUp}>
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
