import { Button, Form, Input } from "antd";
import React from "react";
import styled from "styled-components";
import { postModify } from "../../api/signupapi/SignupApi";

const ModifyPwWrap = styled.div`
  width: 1220px;
  margin: 0 auto;
  padding-top: 200px;
  padding-bottom: 200px;
  .pwtitle {
    color: #e9b25f;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 70px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .pwbg {
    color: #868686;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const ModifyPw = () => {
  const onFinish = values => {
    postModify(values);
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <ModifyPwWrap>
      <div className="pwtitle">비밀번호 확인</div>
      <div className="pwbg">
        회원정보 수정을 위해 비밀번호 확인이 필요합니다.
      </div>
      <Form
        style={{
          width: "540px",
          maxWidth: 800,
          height: "252px",
          margin: "0  auto  74px auto",
        }}
        initialValues={{
          remember: true,
          upw: "",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <div style={{ paddingTop: 100 }}>
          <Form.Item
            name="upw"
            label={
              <label style={{ color: "#E9B25F", fontSize: "20px" }}>PW</label>
            }
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
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "540px",
                height: "60px",
                background: "#E9B25F",
                fontSize: "25px",
              }}
            >
              비밀번호 확인
            </Button>
          </Form.Item>
        </div>
      </Form>
    </ModifyPwWrap>
  );
};

export default ModifyPw;
