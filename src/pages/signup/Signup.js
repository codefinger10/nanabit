import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import Address from "../../components/signup/Address";
import ChildComponent from "../../components/signup/ChildComponent ";
import {
  MyInput,
  SignupWrap,
  addbt,
  agreeItem,
  babyInfo,
  babyInfoPush,
  buttonPrimaryStyle,
  buttonStyle,
  emailtitle,
  flexContainer,
  formStyle,
  inputBt,
} from "../../styles/signup/signup";
const initState = {
  name: "",
  userid: "",
  password: "",
  confirm: "",
  zonecode: "",
  address: "",
  detailedAddress: "",
  phone: "",
  email: "",
  baby: [{ month: "", gender: "" }],
  agreement: true,
};

const Signup = () => {
  const [memberInfo, setMemberInfo] = useState(initState);
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");

  const updateAddressInfo = ({ zonecode, address }) => {
    // 주소 정보 업데이트
    setZonecode(zonecode);
    setAddress(address);
  };

  const onFinish = values => {
    setMemberInfo({ ...values });
    values.address = address;
    values.zonecode = zonecode;

    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  // 예시: 중복확인 요청에 대한 예외 처리
  const handleCheckDuplicate = async values => {
    try {
      const response = await fetch(`/api/checkDuplicate/${values.userid}`);
      const data = await response.json();

      if (data.isDuplicate) {
        console.log("아이디가 중복됩니다. 다른 아이디를 입력해주세요.");
      } else {
        console.log("아이디가 사용 가능합니다.");
      }
    } catch (error) {
      console.error("중복확인 요청에 실패했습니다:", error.message);
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <>
      <SignupWrap>
        <div className="signimg">
          <img src={process.env.PUBLIC_URL + "/assets/images/signup.svg"} />
        </div>
        <span>
          회원가입시 첫 구매 10% 할인쿠폰이 지급됩니다! (30,000원 이상 구매시)
        </span>
        <div className="signinfo">회원정보입력</div>
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
            userid: memberInfo.userid,
            password: memberInfo.password,
            confirm: memberInfo.confirm,
            // zonecode: memberInfo.zonecode,1
            address: memberInfo.address,
            detailedAddress: memberInfo.detailedAddress,
            phone: memberInfo.phone,
            email: memberInfo.email,
            baby: [{ month: "", gender: "" }],

            agreement: memberInfo.agreement,
          }}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div style={formStyle}>이름*</div>
          <Form.Item
            name="name"
            rules={[
              {
                type: "text",
              },
            ]}
          >
            <Input style={inputBt} />
          </Form.Item>

          <div style={formStyle}>아이디*</div>
          <div style={flexContainer}>
            <Form.Item
              name="userid"
              rules={[
                {
                  required: true,
                  message: "아이디를 입력하세요!",
                },
              ]}
            >
              <Input style={{ width: "973px", height: "50px" }} />
            </Form.Item>
            <Form.Item>
              <Button
                type="button"
                onClick={values => handleCheckDuplicate(values)}
                style={buttonStyle}
              >
                중복확인
              </Button>
            </Form.Item>
          </div>

          <div>비밀번호*</div>
          <Form.Item name="password">
            <Input.Password style={inputBt} />
          </Form.Item>
          <div>비밀번호 확인*</div>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("비밀번호 다시 확인해주세요!"),
                  );
                },
              }),
            ]}
          >
            <Input.Password style={inputBt} />
          </Form.Item>

          <Address onAddressChange={updateAddressInfo} />
          <div>휴대전화*</div>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "전화번호를 입력 해주세요",
              },
            ]}
          >
            <Input style={emailtitle} />
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
          <Form.Item
            style={agreeItem}
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("잘못된 정보 입니다.")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox style={{ marginTop: "20px" }}>동의하시겠습니까?</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={buttonPrimaryStyle}>
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </SignupWrap>
    </>
  );
};

export default Signup;
