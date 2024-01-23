import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";
import { login, loginPostAsync } from "../../slices/loginSlice";

// 초기값
const initState = {
  uid: "winter123",
  upw: "xptmxm123!@#",
};

const LoginForm = () => {
  // 전체 로그인 폼 style

  // 커스텀 훅 사용하기
  const { doLogin, moveToPath } = useCustomLogin();

  const [loginParam, setLoginParam] = useState(initState);
  const handleChange = e => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };

  const dispatch = useDispatch();
  const handleClick = e => {
    // dispatch(login(loginParam));
    // dispatch(loginPostAsync({ loginParam, successFn, failFn, errorFn }));

    doLogin({ loginParam, successFn, failFn, errorFn });
  };

  const successFn = result => {
    console.log("성공", result);
    moveToPath("/");
  };

  const failFn = result => {
    console.log("실패", result);
    alert("이메일 및 비밀번호 확인하세요.");
  };

  const errorFn = result => {
    console.log("에러", result);
  };

  return (
    <Form
      style={{
        width: "540px",
        maxWidth: 800,
        height: "252px",
        margin: "0  auto  74px auto",
      }}
      initialValues={{
        remember: true,
        uid: loginParam.uid,
        upw: loginParam.upw,
      }}
      autoComplete="off"
      layout="vertical"
      requiredMark={false}
    >
      {/* 유저 아이디 style */}
      <Form.Item
        name="uid"
        label={<label style={{ color: "#E9B25F", fontSize: "20px" }}>ID</label>}
        rules={[
          {
            required: true,
            message: "아이디를 입력해주세요!",
            whitespace: true,
          },
        ]}
        style={{ height: "80px" }}
      >
        {/* 유저 아이디 인풋 스타일 */}
        <Input
          placeholder="아이디를 입력하세요."
          style={{
            fontSize: "20px",
            borderRadius: "0px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            outline: "none",
            boxShadow: "none",
          }}
        />
      </Form.Item>

      {/* 유저 패스워드 style */}
      <Form.Item
        name="upw"
        label={<label style={{ color: "#E9B25F", fontSize: "20px" }}>PW</label>}
        rules={[
          {
            required: true,
            message: "비밀번호를 입력해주세요!",
          },
        ]}
        style={{ height: "80px" }}
      >
        {/* 유저 패스워드 인풋 스타일 */}
        <Input.Password
          placeholder="비밀번호를 입력하세요."
          style={{
            fontSize: "20px",
            borderRadius: "0px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            outline: "none",
            boxShadow: "none",
          }}
        />
      </Form.Item>

      {/* 버튼 창 길이조절 */}
      <Form.Item>
        {/* 버튼 style */}
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => handleClick()}
          // onClick={handleClick()}
          style={{
            width: "540px",
            height: "60px",
            background: "#E9B25F",
            fontSize: "25px",
          }}
        >
          로그인
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
