import { Button, Form, Input, Radio } from "antd";
import React, { useState } from "react";
import { MyInput } from "../../styles/signup/signup";
import styled from "@emotion/styled";

const initState = {
  name: "",
  password: "",
  newpassword: "",
  confirm: "",
  phone: "",
  email: "",
  gender: "",
  month: "",
};

const ModifyPages = () => {
  const [memberInfo, setMemberInfo] = useState(initState);

  const onFinish = values => {
    setMemberInfo({ ...values });
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const ModifyEventInfo = styled.div`
    border: 5px solid #d9d9d9;
    width: 1220px;
    height: 190px;
    margin-top: 5rem;
    padding-left: 3rem;
    padding-top: 3rem;
    .ModifyEventInfo-ing {
      border-bottom: 3px solid #d9d9d9;
      width: 1116px;
      height: 15px;
      margin-bottom: 1rem;
      padding-bottom: 3rem;
    }
  `;
  const ModifyInfo = styled.div`
    border-top: 3px solid #868686;
    border-bottom: 3px solid #868686;
    padding: 20px 0;
    color: #868686;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 1220px;
  `;
  const ModifyBt = styled.div`
    display: flex;
    padding-top: 50px;
    width: 59%;
    justify-content: space-between;
    .ModifyBt-two {
      display: flex;
      gap: 10px;
    }
  `;
  const [childInfo, setChildInfo] = useState([]);
  const handleClickAdd = () => {
    // 최대 3개까지만 추가할 수 있도록 조건 추가
    if (childInfo.length < 3) {
      // 새로운 월령/개월 수 및 우리아이 성별 정보를 추가합니다.
      const newChildInfo = [...childInfo, { month: "", gender: "" }];
      setChildInfo(newChildInfo);
    }
  };
  const handleClickRemove = index => {
    // 최소 하나는 유지해야 하므로, childInfo의 길이가 1보다 작으면 삭제하지 않습니다.
    if (childInfo.length > 1) {
      const newChildInfo = [...childInfo];
      newChildInfo.splice(index, 1);
      setChildInfo(newChildInfo);
    }
  };

  return (
    <div style={{ margin: "0 auto", width: 1220, padding: "80px 0" }}>
      <ModifyInfo>회원정보</ModifyInfo>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
          name: memberInfo.name,
          password: memberInfo.password,
          newpassword: memberInfo.newpassword,
          confirm: memberInfo.confirm,
          phone: memberInfo.phone,
          email: memberInfo.email,
          gender: memberInfo.gender,
          month: memberInfo.month,
        }}
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div style={{ marginTop: "20px" }}>이름*</div>
        <Form.Item
          name="name"
          rules={[
            {
              type: "text",
            },
          ]}
        >
          <Input style={{ width: "1220px", height: "50px" }} />
        </Form.Item>
        <div>현재 비밀번호</div>
        <Form.Item name="password">
          <Input.Password style={{ width: 1220, height: 50 }} />
        </Form.Item>

        <div>새 비밀번호</div>
        <Form.Item name="newpassword">
          <Input.Password style={{ width: 1220, height: 50 }} />
        </Form.Item>
        <div>새 비밀번호 확인</div>
        <Form.Item
          name="confirm"
          dependencies={["newpassword"]}
          hasFeedback
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newpassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("비밀번호 다시 확인해주세요!"));
              },
            }),
          ]}
        >
          <Input style={{ width: 1220, height: 50 }} />
        </Form.Item>

        <div>휴대전화</div>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "전화번호를 입력 해주세요",
            },
          ]}
        >
          <Input style={{ width: 1220, height: 50 }} />
        </Form.Item>
        <div>이메일*</div>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <MyInput />
        </Form.Item>
        <div
          style={{
            display: "flex",
            gap: 20,
            borderBottom: "3px solid #C5C5C5",
            paddingBottom: 50,
          }}
        >
          <div
            style={{
              color: "#E9B25F",
              fontFamily: "Noto Sans KR",
              fontSize: "50px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            우리아이 정보입력
          </div>
          <Form.Item>
            <Button
              type="primary"
              style={{
                backgroundColor: "#E9B25F",
                width: "115px",
                height: "50px",
                marginTop: "1rem", // 추가: 버튼 위 간격 조절을 위한 속성
              }}
              onClick={handleClickAdd}
            >
              추가하기
            </Button>
          </Form.Item>
        </div>

        {childInfo.map((item, index) => (
          <div key={index}>
            <div style={{ paddingTop: 30 }}>월령/개월 수*</div>
            <Form.Item name={`month${index}`} style={{ height: 50 }}>
              <Radio.Group
                style={{
                  width: "1220px",
                  display: "flex",
                  paddingBottom: "50px",
                }}
              >
                <Radio.Button
                  value="1"
                  style={{
                    height: 50,
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  임신/출산 (~0개월)
                </Radio.Button>
                <Radio.Button
                  value="2"
                  style={{
                    height: 50,
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  신생아 (1~3개월)
                </Radio.Button>
                <Radio.Button
                  value="3"
                  style={{
                    height: 50,
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  베이비 (4~23개월)
                </Radio.Button>
                <Radio.Button
                  value="4"
                  style={{
                    height: 50,
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  키즈(24개월~)
                </Radio.Button>
              </Radio.Group>
            </Form.Item>

            <div>우리아이 성별*</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "3px solid #C5C5C5",
              }}
            >
              <Form.Item name={`gender${index}`} style={{ paddingBottom: 50 }}>
                <Radio.Group style={{ display: "flex" }}>
                  <Radio.Button
                    value="a"
                    style={{ height: 50, lineHeight: "50px" }}
                  >
                    남
                  </Radio.Button>
                  <Radio.Button
                    value="b"
                    style={{ height: 50, lineHeight: "50px" }}
                  >
                    여
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  value={item.id}
                  style={{
                    border: "1px solid #FF4E4E ",
                    color: "#FF4E4E",
                    backgroundColor: "#FFFFFF",
                    width: "115px",
                    height: "50px",
                    marginTop: "1rem", // 추가: 버튼 위 간격 조절을 위한 속성
                  }}
                  onClick={() => handleClickRemove(item.id)}
                >
                  삭제하기
                </Button>
              </Form.Item>
            </div>
          </div>
        ))}
        <ModifyEventInfo>
          <div className="ModifyEventInfo-ing">
            회원정보 수정 시 적립금을 지급하는 이벤트를 진행중입니다
          </div>
          <div>
            - 이벤트 기간 : 2025년 12월 31일 00시까지 <br />
            - 아래의 조건을 충족한 경우 적립금 1,000원이 지급됩니다. <br />
            -이메일 수신동의(필수), SMS 수신동의(필수)
          </div>
        </ModifyEventInfo>
        <ModifyBt>
          <Form.Item>
            <Button
              type="primary"
              style={{
                border: "1px solid #FF4E4E",
                backgroundColor: "#FFF",
                color: "#FF4E4E",
                width: "110px",
                height: "50px",
                marginTop: "1rem",
                // 추가: 버튼 위 간격 조절을 위한 속성\
              }}
            >
              회원탈퇴
            </Button>
          </Form.Item>
          <div className="ModifyBt-two">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  background: "#D68000",
                  width: "110px",
                  height: "50px",
                  marginTop: "1rem",
                  paddingLeft: "12px", // 추가: 버튼 위 간격 조절을 위한 속성\
                }}
              >
                회원정보수정
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                style={{
                  background: "#868686",
                  width: "110px",
                  height: "50px",
                  marginTop: "1rem", // 추가: 버튼 위 간격 조절을 위한 속성\
                }}
              >
                취소
              </Button>
            </Form.Item>
          </div>
        </ModifyBt>
      </Form>
    </div>
  );
};

export default ModifyPages;
