import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Signup = () => {
  const [zodecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFFF",
    postcodeTextColor: "#C05850",
    emphTextColor: "#222222",
  };

  const postCodeStyle = {
    width: "260px",
    height: "380px",
  };

  const completeHandler = data => {
    const { address, zonecode } = data;
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
    setIsOpen(prevOpenState => !prevOpenState);

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
    values.address = address;
    values.zonecode = zodecode;
    console.log("Success:", values);
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
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div>
      <h2>회원가입</h2>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="아이디" name="userid">
          <Input />
        </Form.Item>

        <Form.Item label="비밀번호" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="비밀번호 확인"
          dependencies={["password"]}
          hasFeedback
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("비밀번호 다시 확인해주세요!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="이름" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="우편번호">
          <Input
            type="text"
            value={zodecode}
            onChange={e => setZonecode(e.target.value)}
          />
        </Form.Item>

        <Button type="button" onClick={toggleHandler}>
          주소 찾기
        </Button>
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

        <Form.Item label="주소">
          <Input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </Form.Item>
        <br />
        <Form.Item label="상세주소" name="detailedAddress">
          <Input value={detailedAddress} onChange={inputChangeHandler} />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              type: "number",
              required: true,
              message: "전화번호를 입력 해주세요",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          label="이메일"
          name="email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
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
          <Checkbox>동의하시겠습니까?</Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
