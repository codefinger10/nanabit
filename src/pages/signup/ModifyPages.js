import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  MyInput,
  addbt,
  babyInfo,
  babyInfoPush,
} from "../../styles/signup/signup";

import ChildComponent from "../../components/signup/ChildComponent ";
import {
  ModifyBt,
  ModifyEventInfo,
  ModifyInfo,
  modifyAdd,
  modifyCancel,
  modifyInfo,
  modifyInfoBt,
  modifyInputBt,
  modifyWithdrawal,
  modifybabyInfo,
  modifybabyInfoPush,
} from "../../styles/signup/Modify";

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

  const [components, setComponents] = useState([]);

  console.log(components);

  const addComponent = () => {
    if (components.length < 3) {
      const uniqueValue = uuidv4(); // 고유한 값 생성
      setComponents([...components, { uniqueValue }]);
    }
  };

  const deleteComponent = uniqueValue => {
    console.log(uniqueValue);
    const updatedComponents = components.filter(
      comp => comp.uniqueValue !== uniqueValue,
    );
    setComponents(updatedComponents);
  };

  return (
    <div style={modifyInfo}>
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
          <Input style={modifyInputBt} />
        </Form.Item>
        <div>현재 비밀번호</div>
        <Form.Item name="password">
          <Input.Password style={modifyInputBt} />
        </Form.Item>

        <div>새 비밀번호</div>
        <Form.Item name="newpassword">
          <Input.Password style={modifyInputBt} />
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
          <Input style={modifyInputBt} />
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
          <Input style={modifyInputBt} />
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
        <Form.List name="baby">
          {(fields, { add, remove }) => (
            <>
              <div style={babyInfo}>
                <div style={babyInfoPush}>우리아이 정보입력</div>
                <Form.Item>
                  <Button
                    type="primary"
                    style={addbt}
                    onClick={() => fields.length < 3 && add()}
                  >
                    추가하기
                  </Button>
                </Form.Item>
              </div>

              {fields.map(({ key, name }) => (
                <ChildComponent
                  key={key}
                  name={name}
                  onSelet={() => remove(name)}
                />
              ))}
            </>
          )}
        </Form.List>
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
            <Button type="primary" style={modifyWithdrawal}>
              회원탈퇴
            </Button>
          </Form.Item>
          <div className="ModifyBt-two">
            <Form.Item>
              <Button type="primary" htmlType="submit" style={modifyInfoBt}>
                회원정보수정
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={modifyCancel}>
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