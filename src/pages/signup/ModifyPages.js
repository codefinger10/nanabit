import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import {
  MyInput,
  addbt,
  babyInfo,
  babyInfoPush,
} from "../../styles/signup/signup";

import {
  deleteModify,
  postModify,
  putModify,
} from "../../api/signupapi/SignupApi";
import ChildComponent from "../../components/signup/ChildComponent ";
import {
  ModifyBt,
  ModifyEventInfo,
  ModifyInfo,
  modifyCancel,
  modifyInfo,
  modifyInfoBt,
  modifyInputBt,
  modifyWithdrawal,
} from "../../styles/signup/Modify";
import { useLocation, useParams } from "react-router-dom";

const initState = {
  nm: "",
  upw: "",
  phoneNumber: "",
  email: "",
  children: [{ ichildAge: "", gender: "" }],
};

const ModifyPages = () => {
  const [modifyArray, setModifyArray] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setModifyArray(location.state);
  }, [location]);

  console.log("들어왔지요", modifyArray);
  const [memberInfo, setMemberInfo] = useState(initState);
  // const [modifyId,setModifyId] = useState(location.state);
  // console.log(modifyId)

  const onFinish = values => {
    setMemberInfo({ ...values });
    console.log("Success:", values);
    putModify(values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const handleClickDelete = () => {
    deleteModify();
  };

  // useEffect(()=>{
  //   postModify(setModifyId);
  // },[])
  const handleChangeModify = e => {
    // e.target.name
    // e.taget.value
    memberInfo[e.target.name] = e.target.value;
    setMemberInfo({ ...memberInfo });
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
          nm: memberInfo.nm,
          upw: memberInfo.upw,
          phoneNumber: memberInfo.phoneNumber,
          email: memberInfo.email,
          children: [{ ichildAge: "", gender: "" }],
        }}
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div style={{ marginTop: "20px" }}>이름*</div>
        <Form.Item
          valuePropName="nm"
          rules={[
            {
              type: "text",
            },
          ]}
        >
          <Input
            style={modifyInputBt}
            value={modifyArray.nm}
            onChange={e => handleChangeModify(e)}
          />
        </Form.Item>
        <div>현재 비밀번호</div>
        <Form.Item>
          <Input.Password style={modifyInputBt} autocomplete="new-password" />
        </Form.Item>

        <div>새 비밀번호</div>
        <Form.Item name="upw">
          <Input.Password style={modifyInputBt} autocomplete="new-password" />
        </Form.Item>
        <div>새 비밀번호 확인</div>
        <Form.Item>
          <Input.Password style={modifyInputBt} autocomplete="new-password" />
        </Form.Item>

        <div>휴대전화</div>
        <Form.Item
          valuePropName="phoneNumber"
          rules={[
            {
              required: true,
              message: "전화번호를 입력 해주세요",
            },
          ]}
        >
          <Input
            style={modifyInputBt}
            value={modifyArray.phoneNumber}
            onChange={e => handleChangeModify(e)}
          />
        </Form.Item>
        <div>이메일*</div>
        <Form.Item
          valuePropName="email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <MyInput
            value={modifyArray.email}
            onChange={e => handleChangeModify(e)}
          />
        </Form.Item>
        <Form.List name="children">
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
                  valueArray={location.state.children}
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
            <Button
              type="primary"
              style={modifyWithdrawal}
              onClick={handleClickDelete}
            >
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
