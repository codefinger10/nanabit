import { Button, Form } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { postAddress } from "../../api/address/AddressApi";
import AddressDetailed from "../../components/address/AddressDeatail";
import useCustomLogin from "../../hooks/useCustomLogin";
import { AddressTitleWrap } from "../../styles/address/addressinfostyle";

const AddressBtWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1157px;
  margin: 0 auto;
  border-top: 1px solid #868686;
  padding-top: 28px;
  margin-bottom: 282px;
  button {
    width: 203px;
    height: 70px;
    background: #e9b25f;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    border: none;
  }
`;

const initState = {
  zonecode: "",
  address: "",
  addressDetail: "",
};

const AddressAdd = () => {
  const [serverData, setServerData] = useState(initState);
  const [zonecode, setZonecode] = useState(initState);
  const [address, setAddress] = useState(initState);

  const updateAddressInfo = ({ zonecode, address }) => {
    // 주소 정보 업데이트
    setZonecode(zonecode);
    setAddress(address);
  };

  const { moveToPath } = useCustomLogin();

  const onFinish = values => {
    setServerData({ ...values });
    values.address = address;
    values.zipCode = zonecode;
    console.log("Success:", values);
    postAddress({ values, successFn, failFn, errorFn });
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const successFn = result => {
    moveToPath("/address"), console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };
  return (
    <div>
      <AddressTitleWrap>
        <div>
          <h2>ADDRESS</h2>
        </div>
        <div>
          <p>
            주소 추가는 <span>최대 3개</span>까지만 가능합니다
          </p>
        </div>
      </AddressTitleWrap>
      <Form
        name="Address"
        initialValues={{
          remember: true,
          zipCode: serverData.zipCode,
          address: serverData.address,
          addressDetail: serverData.addressDetail,
        }}
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <AddressDetailed onAddressChange={updateAddressInfo} />
        <AddressBtWrap>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "203px",
                height: "70px",
                background: "#e9b25f",
                color: "#fff",
                fontSize: "20px",
                fontWeight: 500,
                border: "none",
              }}
            >
              주소 추가하기
            </Button>
          </Form.Item>
        </AddressBtWrap>
      </Form>
    </div>
  );
};
export default AddressAdd;
