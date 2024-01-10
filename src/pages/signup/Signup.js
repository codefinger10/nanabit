import { Button, Checkbox, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import BasicLayout from "../../layouts/BasicLayout";
import {
  MyInput,
  SignupWrap,
  postCodeStyle,
  themeObj
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
  agreement: true,
};

const Signup = () => {
  const [memberInfo, setMemberInfo] = useState(initState);
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const completeHandler = data => {
    const { address, zonecode } = data;
    // 상태값을 보존
    memberInfo.address = address;
    memberInfo.zonecode = zonecode;
    setMemberInfo({ ...memberInfo });

    setZonecode(zonecode);
    setAddress(address);
    console.log(data);
  };

  const closeHandler = state => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
    }
  };

  const toggleHandler = () => {
    setIsOpen(true);
    setIsModalOpen(true);
  };
  const inputChangeHandler = event => {
    setDetailedAddress(event.target.value);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = values => {
    setMemberInfo({ ...values });
    values.address = address;
    values.zonecode = zonecode;
    setZonecode("");
    setAddress("");
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const handleCheckDuplicate = async values => {
    try {
      // 아이디 중복확인을 서버에 요청하는 부분
      const response = await fetch(`/api/checkDuplicate/${values.userid}`);
      const data = await response.json();

      if (data.isDuplicate) {
        // 서버로부터 중복된 아이디인 경우
        // 사용할 수 없다는 메시지를 출력하거나,
        // 다른 방식으로 사용자에게 알림을 줄 수 있습니다.
        console.log("아이디가 중복됩니다. 다른 아이디를 입력해주세요.");
      } else {
        // 서버로부터 중복되지 않은 아이디인 경우
        // 사용 가능한 아이디로 간주하고 상태를 업데이트합니다.
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
      <BasicLayout>
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
              // zonecode: memberInfo.zonecode,
              address: memberInfo.address,
              detailedAddress: memberInfo.detailedAddress,
              phone: memberInfo.phone,
              email: memberInfo.email,
              agreement: memberInfo.agreement,
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

            <div style={{ marginTop: "5rem" }}>아이디*</div>
            <div style={{ display: "flex" }}>
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
                  style={{
                    width: "225px",
                    height: "50px",
                    background: "#D68000",
                    color: "white",
                    border: "none",
                    marginLeft: "8px",
                  }}
                >
                  중복확인
                </Button>
              </Form.Item>
            </div>

            <div>비밀번호*</div>
            <Form.Item name="password">
              <Input style={{ width: 1220, height: 50 }} />
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
              <Input style={{ width: 1220, height: 50 }} />
            </Form.Item>

            <div>주소*</div>
            <div style={{ display: "flex" }} onClick={toggleHandler}>
              <Form.Item>
                <Input style={{ width: 193, height: 50 }} value={zonecode} />
              </Form.Item>

              <Form.Item>
                <Button
                  type="button"
                  // onClick={toggleHandler}
                  style={{
                    width: "110px",
                    height: "50px",
                    backgroundColor: "#D68000",
                    border: "none",
                    marginLeft: "8px",
                    color: "white",
                  }}
                >
                  우편검색
                </Button>
              </Form.Item>
            </div>

            {isOpen && (
              <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer=""
              >
                <DaumPostcode
                  theme={themeObj}
                  style={postCodeStyle}
                  onComplete={completeHandler}
                  onClose={closeHandler}
                />
              </Modal>
            )}
            <div style={{ marginTop: "2rem" }}>기본주소</div>
            <Form.Item>
              <Input style={{ width: 1220, height: 50 }} value={address} />
            </Form.Item>
            <div>상세주소</div>
            <Form.Item name="detailedAddress">
              <MyInput value={detailedAddress} onChange={inputChangeHandler} />
            </Form.Item>
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

            <Form.Item
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center", // 추가: 세로 정렬을 위한 속성
                borderTop: "3px solid #868686 ",
                flexDirection: "column", // 추가: 세로 방향 정렬을 위한 속성
                marginTop: "5rem",
              }}
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
              <Checkbox style={{ marginTop: "20px" }}>
                동의하시겠습니까?
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  
                  background: "#D68000",
                  width: "110px",
                  height: "50px",
                  marginTop: "1rem", // 추가: 버튼 위 간격 조절을 위한 속성
                }}
              >
                회원가입
              </Button>
            </Form.Item>
          </Form>
        </SignupWrap>
      </BasicLayout>
    </>
  );
};

export default Signup;
