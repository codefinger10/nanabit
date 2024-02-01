import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import {
  MyInput,
  addbt,
  babyInfo,
  babyInfoPush,
} from "../../styles/signup/signup";

import { useLocation, useNavigate } from "react-router-dom";
import { deleteModify, putModify } from "../../api/signupapi/SignupApi";
import ChildComponent from "../../components/signup/ChildComponent ";
import ResultModal from "../../components/signup/ResultModal";
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

const initState = {
  nm: "",
  upw: "",
  phoneNumber: "",
  email: "",
  children: [{ ichildAge: "", gender: "" }],
};

const ModifyPages = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [modifyItem, setModifyItem] = useState(location.state);
  const [modifyArray, setModifyArray] = useState(location.state.children);
  const [memberInfo, setMemberInfo] = useState(initState);
  const [resultTitle, setResultTitle] = useState("");
  const [resultContent, setResultContent] = useState("");
  const [reDirect, setReDirect] = useState(0);
  const [modalStyle, setModalStyle] = useState({});
  const [modalStyleBk, setModalStyleBk] = useState({});

  const handleClickDelete = () => {
    deleteModify({ successPro, failPro, errorPro });
  };

  const successPro = result => {
    setModalStyle({});
    setModalStyleBk({});
    setResultTitle("탈퇴 확인");
    setResultContent("회원 탈퇴가 되었습니다. ");
    setReDirect(0);
    console.log(result);
  };
  const failPro = result => {
    setResultContent("회원 탈퇴에 실패하였습니다. ");
    console.lpg("실패", result);
  };
  const errorPro = result => {
    setModalStyle({ color: "red" });
    setModalStyleBk({ background: "red" });
    setResultContent(
      <div>
        오류가 발생하였습니다. <br />
        관리자에게 문의해 주세요.
      </div>,
    );
    console.log("서버 오류", result);
  };

  const onFinish = values => {
    setMemberInfo({ ...values });
    const result = putModify({ values, successFn, failFn, errorFn });
    console.log("Success:", values);
    console.log("result", result);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const successFn = result => {
    setModalStyle({});
    setModalStyleBk({});
    setResultTitle("회원정보수정");
    setResultContent(
      <div>
        회원정보 수정이 되었습니다.
        <br /> 다시 로그인 해주세요.
      </div>,
    );
    setReDirect(0);
    console.log(result);
  };

  const failFn = result => {
    setResultTitle("비밀번호 확인 오류");
    setResultContent(
      "비밀번호 확인 오류가 발생하였습니다. 잠시 후 시도해주세요.",
    );
    setReDirect(1);
    console.log(result);
  };

  const errorFn = result => {
    setModalStyle({ color: "red" });
    setModalStyleBk({ background: "red" });
    setResultTitle("서버 오류");
    setResultContent(
      <div>
        오류가 발생하였습니다. <br />
        관리자에게 문의해 주세요.
      </div>,
    );
    setReDirect(1);
    console.log(result);
  };

  const closeModal = () => {
    setResultTitle("");
    setResultContent("");

    if (reDirect === 0) {
      navigate(`/login`);
    } else {
      // Handle other cases if needed
    }
  };

  return (
    <div>
      {resultTitle !== "" ? (
        <ResultModal
          title={resultTitle}
          content={resultContent}
          callFN={closeModal}
          errorFn={errorFn}
          errorbt={modalStyle}
          errorbk={modalStyleBk}
        />
      ) : null}
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
            nm: modifyItem.nm,
            upw: modifyItem.upw,
            phoneNumber: modifyItem.phoneNumber,
            email: modifyItem.email,
            // children: [{ ichildAge: "", gender: "" }],
            children: modifyArray,
          }}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div style={{ marginTop: "20px" }}>이름*</div>
          <Form.Item
            name="nm"
            rules={[
              {
                type: "text",
              },
            ]}
          >
            <Input
              style={modifyInputBt}
              value={modifyItem.nm || ""}
              onChange={e =>
                setModifyItem({ ...modifyItem, nm: e.target.value })
              }
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
            <Input.Password style={modifyInputBt} autocomplete="new-password" />
          </Form.Item>

          <div>휴대전화</div>
          <Form.Item
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "전화번호를 입력 해주세요",
              },
            ]}
          >
            <Input
              style={modifyInputBt}
              value={modifyItem.phoneNumber || ""}
              onChange={e =>
                setModifyItem({ ...modifyItem, phoneNumber: e.target.value })
              }
            />
          </Form.Item>
          <div>이메일*</div>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "올바른 이메일 방식으로 입력 해주세요 예)aaa@aaa.com",
              },
            ]}
          >
            <MyInput
              value={modifyItem.email || ""}
              onChange={e =>
                setModifyItem({ ...modifyItem, email: e.target.value })
              }
            />
          </Form.Item>
          <Form.List name="children">
            {(modifyArray, { add, remove }) => (
              <div>
                <div style={babyInfo}>
                  <div style={babyInfoPush}>우리아이 정보입력</div>
                  <Form.Item>
                    <Button
                      type="primary"
                      style={addbt}
                      onClick={() => modifyArray.length < 3 && add()}
                    >
                      추가하기
                    </Button>
                  </Form.Item>
                </div>

                {modifyArray.map(({ name }, index) => (
                  <div key={index}>
                    <ChildComponent name={name} onSelet={() => remove(name)} />
                  </div>
                ))}
              </div>
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
    </div>
  );
};

export default ModifyPages;
