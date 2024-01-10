import styled from "@emotion/styled";
import { Button, Form, Input, Modal, Radio } from "antd";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import BasicLayout from "../../layouts/BasicLayout";
import { postCodeStyle, themeObj } from "../../styles/signup/signup";

const ModifyPage = () => {
  const ModifyWrap = styled.div`
    width: 1220px;
    margin: 0 auto;
    height: 1550px;
  `;
  const ModifyTitle = styled.div`
    border-bottom: 3px solid #949494;
    width: 1220px;
    margin-top: 7rem;
  `;
  const ModifyInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    border: 3px solid #d9d9d9;
    width: 1220px;
    height: 151px;
    margin-top: 5rem;
    img {
      margin-left: 2rem;
    }
  `;
  const ModifyEventInfo = styled.div`
    border: 5px solid #d9d9d9;
    width: 1220px;
    height: 151px;
    margin-top: 5rem;
    padding-left: 3rem;
    padding-top: 3rem;
    .ModifyEventInfo-ing {
      border-bottom: 3px solid #d9d9d9;
      width: 1116px;
      height: 15px;
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding-bottom: 2rem;
    }
  `;
  const ModifyEdit = styled.div`
    margin: 7rem 0 7rem 0;
    width: 1220px;
    border-top: 3px solid #d9d9d9;
    border-bottom: 3px solid #d9d9d9;
    .ModifyEditlist {
      border-bottom: 1px solid #d9d9d9;
      min-height: 45px;
      max-height: 200px;
      display: flex;
      align-items: center;
      gap: 5px;
      .ModifyEditLetter {
        border-right: 1px solid #f2f2f2;
        background-color: #f2f2f2;
        width: 196px;
        height: 45px;
        padding-left: 3rem;
        display: flex;
        align-items: center; // 추가: 세로 정렬을 위한 속성
        gap: 10px; // 추가: 간격을 조절하기 위한 속성
      }
    }
  `;
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const completeHandler = data => {
    const { address, zonecode } = data;
    setZonecode(zonecode);
    setAddress(address);
  };

  const closeHandler = state => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
    }
  };

  const toggleHandler = () => {
    setIsOpen(prevOpenState => !prevOpenState);

    setIsModalOpen(true);
  };
  const inputChangeHandler = e => {
    setDetailedAddress(e.target.value);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = values => {
    values.address = address;
    values.zonecode = zonecode;
    setZonecode("");
    setAddress("");
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const [smsValue, setSmsValue] = useState(1);
  const [emailValue, setEmailValue] = useState(3);

  const onSmsChange = e => {
    console.log("SMS radio checked", e.target.value);
    setSmsValue(e.target.value);
  };

  const onEmailChange = e => {
    console.log("Email radio checked", e.target.value);
    setEmailValue(e.target.value);
  };

  return (
    <>
      <BasicLayout>
        <ModifyWrap>
          <Form
            name="modifyForm"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <ModifyTitle>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/MemberModify.svg"}
              />
            </ModifyTitle>

            <ModifyInfo>
              <img src={process.env.PUBLIC_URL + "/assets/images/Frame.svg"} />
              <div>
                저희 쇼핑몰을 이용해 주셔서 감사합니다.
                <br />
                ??? 님은 [신인맘] 회원이십니다. 0원이상 구매시 1.5%을 추가적립
                받으실 수 있습니다.
              </div>
            </ModifyInfo>

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
            <ModifyEdit>
              <ul>
                <li className="ModifyEditlist">
                  <div className="ModifyEditLetter" style={{}}>
                    아이디
                  </div>
                  <div>
                    <input
                      name="id"
                      type="text"
                      style={{
                        width: "196px",
                        height: "28px",
                        border: "1px solid #D9D9D9",
                      }}
                    />
                  </div>
                  <div>(영문소문자/ 숫자, 4~16자)</div>
                </li>

                <li className="ModifyEditlist">
                  <div className="ModifyEditLetter" style={{}}>
                    현재 비밀번호
                  </div>
                  <div>
                    <input
                      name="pw"
                      type="text"
                      style={{
                        width: "196px",
                        height: "28px",
                        backgroundColor: "#F2F2F2",
                        border: "1px solid #D9D9D9",
                      }}
                    />
                  </div>
                  <div>
                    (영문 대소문자/ 숫자/ 특수문자 중 2가지 이상 조합, 10~16자)
                  </div>
                </li>

                <li className="ModifyEditlist">
                  <div className="ModifyEditLetter" style={{}}>
                    새 비밀번호
                  </div>
                  <div>
                    <input
                      name="newpw"
                      type="text"
                      style={{
                        width: "196px",
                        height: "28px",
                        backgroundColor: "#F2F2F2",
                        border: "1px solid #D9D9D9",
                      }}
                    />
                  </div>
                  <div>
                    (영문 대소문자/ 숫자/ 특수문자 중 2가지 이상 조합, 10~16자)
                  </div>
                </li>
                <li className="ModifyEditlist">
                  <div className="ModifyEditLetter" style={{}}>
                    새 비밀번호 확인
                  </div>
                  <div>
                    <input
                      name="confirmnewpw"
                      type="text"
                      style={{
                        width: "196px",
                        height: "28px",
                        backgroundColor: "#F2F2F2",
                        border: "1px solid #D9D9D9",
                      }}
                    />
                  </div>
                  <div>(영문소문자/ 숫자, 4~16자)</div>
                </li>
                <li className="ModifyEditlist">
                  <div className="ModifyEditLetter" style={{}}>
                    이름
                  </div>
                  <div>
                    <input
                      name="nickname"
                      type="text"
                      style={{
                        width: "196px",
                        height: "28px",
                        border: "1px solid #D9D9D9",
                      }}
                    />
                  </div>
                </li>
                <li className="ModifyEditlist">
                  <div className="ModifyEditLetter" style={{ height: "141px" }}>
                    주소
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "5px",
                      }}
                    >
                      <Input
                        name="zonecode"
                        type="text"
                        value={zonecode}
                        onChange={e => setZonecode(e.target.value)}
                        style={{ width: "64px", height: "28px" }}
                      />
                      <Button
                        type="button"
                        onClick={toggleHandler}
                        style={{
                          width: "64px",
                          height: "28px",
                          backgroundColor: "#868686",
                          border: "none",
                          marginLeft: "8px",
                          color: "white",
                          fontSize: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        우편검색
                      </Button>
                    </div>

                    {isOpen && (
                      <Modal
                        title="Basic Modal"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <DaumPostcode
                          theme={themeObj}
                          style={postCodeStyle}
                          onComplete={completeHandler}
                          onClose={closeHandler}
                        />
                      </Modal>
                    )}

                    <Form.Item style={{ marginBottom: "5px" }}>
                      <Input
                        name="address"
                        type="text"
                        style={{
                          width: "381px",
                          height: "28px",
                        }}
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item
                      name="detailedAddress"
                      style={{ marginBottom: 0 }}
                    >
                      <Input
                        style={{ width: "381px", height: "28px" }}
                        value={detailedAddress}
                        onChange={inputChangeHandler}
                      />
                    </Form.Item>
                  </div>
                </li>
                <li className="ModifyEditlist">
                  <div className="ModifyEditLetter" style={{}}>
                    휴대전화
                  </div>
                  <div>
                    <input
                      name="num"
                      type="text"
                      style={{
                        width: "196px",
                        height: "28px",
                        border: "1px solid #D9D9D9",
                      }}
                    />
                  </div>
                </li>
                <li className="ModifyEditlist">
                  <div className="ModifyEditLetter" style={{ height: "70px" }}>
                    SMS 수신여부
                  </div>
                  <div style={{}}>
                    <div>
                      <Radio.Group onChange={onSmsChange} value={smsValue}>
                        <Radio value={1} style={{ fontSize: "13px" }}>
                          수신함
                        </Radio>
                        <Radio value={2} style={{ fontSize: "13px" }}>
                          수신안함
                        </Radio>
                      </Radio.Group>
                    </div>
                    <div>
                      쇼핑몰에서 제공하는 유익한 이벤트 소식을 이메일로 받으실
                      수 있습니다.
                    </div>
                  </div>
                </li>
                <li className="ModifyEditlist">
                  <div className="ModifyEditLetter" style={{}}>
                    이메일
                  </div>
                  <div>
                    <input
                      type="text"
                      style={{
                        width: "196px",
                        height: "28px",
                        border: "1px solid #D9D9D9",
                      }}
                    />
                  </div>
                </li>
                <li className="ModifyEditlist">
                  <div className="ModifyEditLetter" style={{}}>
                    이메일 수신여부
                  </div>
                  <div>
                    <div>
                      <Radio.Group onChange={onEmailChange} value={emailValue}>
                        <Radio value={3} style={{ fontSize: "13px" }}>
                          수신함
                        </Radio>
                        <Radio value={4} style={{ fontSize: "13px" }}>
                          수신안함
                        </Radio>
                      </Radio.Group>
                    </div>
                    <div>
                      쇼핑몰에서 제공하는 유익한 이벤트 소식을 이메일로 받으실
                      수 있습니다.
                    </div>
                  </div>
                </li>
              </ul>
            </ModifyEdit>
            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "0 auto",
                justifyContent: "center",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#868686",
                  color: "#FFFFFF",
                  border: "none",
                  width: 120,
                  height: 28,
                }}
              >
                회원정보수정
              </Button>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#868686",
                  color: "#FFFFFF",
                  border: "none",
                  width: 93,
                  height: 28,
                }}
              >
                취소
              </Button>
            </div>
          </Form>
        </ModifyWrap>
      </BasicLayout>
    </>
  );
};

export default ModifyPage;
