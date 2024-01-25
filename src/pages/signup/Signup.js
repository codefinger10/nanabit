import { Button, Checkbox, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import {
  getList,
  postSign,
  postSignCheck,
} from "../../api/signupapi/SignupApi";
import Address from "../../components/signup/Address";
import ChildComponent from "../../components/signup/ChildComponent ";
import {
  MyInput,
  SignupWrap,
  addbt,
  babyInfo,
  babyInfoPush,
  buttonPrimaryBack,
  buttonPrimaryStyle,
  buttonStyle,
  emailtitle,
  flexContainer,
  formStyle,
  inputBt,
} from "../../styles/signup/signup";
const initState = {
  nm: "",
  uid: "",
  upw: "",
  confirm: "",
  zipCode: "",
  address: "",
  addressDetail: "",
  phoneNumber: "",
  email: "",
  children: [{ ichildAge: "", gender: "" }],
};

const Signup = () => {
  const [memberInfo, setMemberInfo] = useState(initState);
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [agreeBt, setAgreeBt] = useState([]);

  const updateAddressInfo = ({ zonecode, address }) => {
    // 주소 정보 업데이트
    setZonecode(zonecode);
    setAddress(address);
  };

  const onFinish = values => {
    setMemberInfo({ ...values });
    values.address = address;
    values.zipCode = zonecode;
    console.log("Success:", values);
    postSign({ values, successFn, failFn, errFn });
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
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

  const successFn = () => {};
  const failFn = () => {};
  const errFn = () => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getList();
        setAgreeBt(result);
      } catch (error) {
        alert("데이터 호출에 실패하였습니다.");
      }
    };

    fetchData();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCheckboxChange = (_, checked) => {
    if (!checked) {
      setIsModalVisible(true);
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  const [userId, setUserId] = useState("");
  const handleClickCheck = () => {
    const userObject = {
      uid: userId,
    };

    postSignCheck(userObject);
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
            nm: memberInfo.nm,
            uid: memberInfo.uid,
            upw: memberInfo.upw,
            confirm: memberInfo.confirm,
            zipCode: memberInfo.zipCode,
            address: memberInfo.address,
            addressDetail: memberInfo.addressDetail,
            phoneNumber: memberInfo.phoneNumber,
            email: memberInfo.email,
            children: [{ ichildAge: "", gender: "" }],
          }}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div style={formStyle}>이름*</div>
          <Form.Item
            name="nm"
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
              name="uid"
              rules={[
                {
                  required: true,

                  message: "아이디를 입력하세요!",
                },
              ]}
            >
              <Input
                style={{ width: "973px", height: "50px" }}
                onChange={e => setUserId(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="button"
                style={buttonStyle}
                onClick={handleClickCheck}
              >
                중복확인
              </Button>
            </Form.Item>
          </div>

          <div>비밀번호*</div>
          <Form.Item name="upw">
            <Input.Password style={inputBt} />
          </Form.Item>
          <div>비밀번호 확인*</div>
          <Form.Item
            name="confirm"
            dependencies={["upw"]}
            hasFeedback
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("upw") === value) {
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
            name="phoneNumber"
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
                    onSelet={() => remove(name)}
                  />
                ))}
              </>
            )}
          </Form.List>
          <div className="agreesign">
            <Form.Item
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("약관 동의를 체크해주세요.")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox
                style={{ marginTop: "20px", marginRight: "400px" }}
                onClick={handleCheckboxChange}
              >
                동의하시겠습니까?
              </Checkbox>
              <Modal
                open={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
              >
                {agreeBt.map((item, iclause) => (
                  <li key={iclause}>
                    <h3>{item.title}</h3>
                    <div
                      style={{
                        overflow: "scroll",
                        height: 350,
                        overflowX: "hidden",
                      }}
                    >
                      <p>{item.contents}</p>
                    </div>
                    <Checkbox>{item.required}</Checkbox>
                  </li>
                ))}
              </Modal>
            </Form.Item>
          </div>
          <div className="signupbt">
            <Form.Item>
              <Button type="primary" style={buttonPrimaryBack}>
                <span style={{ color: "#868686" }}>뒤로가기</span>
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={buttonPrimaryStyle}
              >
                회원가입
              </Button>
            </Form.Item>
          </div>
        </Form>
      </SignupWrap>
    </>
  );
};

export default Signup;
