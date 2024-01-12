import { Button, Checkbox, Form, Input, Modal, Radio } from "antd";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import BasicLayout from "../../layouts/BasicLayout";
import {
  MyInput,
  SignupWrap,
  postCodeStyle,
  themeObj,
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
  gender: "",
  month: "",
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

  const [childInfo, setChildInfo] = useState([]);
  console.log(childInfo);
  const handleClickRemove = id => {
    const index = childInfo.findIndex(item => item.id === id);
    if (index !== -1) {
      childInfo.splice(index, 1);
      setChildInfo([...childInfo]);
    }
  };

  const handleClickAdd = () => {
    if (childInfo.length < 3) {
      const newChildInfo = [...childInfo, { id: "", month: "", gender: "" }];
      setChildInfo(newChildInfo);
    }
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
            // zonecode: memberInfo.zonecode,
            address: memberInfo.address,
            detailedAddress: memberInfo.detailedAddress,
            phone: memberInfo.phone,
            email: memberInfo.email,
            gender: memberInfo.gender,
            month: memberInfo.month,
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
            <Input.Password style={{ width: 1220, height: 50 }} />
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
            <Input.Password style={{ width: 1220, height: 50 }} />
          </Form.Item>

          <div>주소*</div>
          <div style={{ display: "flex", width: 193 }} onClick={toggleHandler}>
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
                <Form.Item
                  name={`gender${index}`}
                  style={{ paddingBottom: 50 }}
                >
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
            <Checkbox style={{ marginTop: "20px" }}>동의하시겠습니까?</Checkbox>
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
    </>
  );
};

export default Signup;
