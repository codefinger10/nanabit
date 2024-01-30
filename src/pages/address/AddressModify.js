import { Button, Form } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { deleteOne, putAdress } from "../../api/address/AddressApi";
import AddressDetailed from "../../components/address/AddressDeatail";
import useCustomLogin from "../../hooks/useCustomLogin";
import { AddressTitleWrap } from "../../styles/address/addressinfostyle";
import useCustomMove from "../../hooks/useCustomMove";

const AddressBtWrap = styled.div`
  display: flex;
  justify-content: space-between;
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

const AddressHeadWrap = styled.div`
  width: 1157px;
  height: 80px;
`;

const initState = {
  zonecode: "",
  address: "",
  addressDetail: "",
};

const AddressModify = () => {
  const location = useLocation();
  const item = location.state;
  console.log("item", item);

  const [serverData, setServerData] = useState(initState);
  const [zonecode, setZonecode] = useState(initState);
  const [address, setAddress] = useState(initState);

  const { loginState, moveToPath } = useCustomLogin();
  const { moveToPrev } = useCustomMove();
  useEffect(() => {
    setServerData({ ...loginState });
  }, [loginState]);

  const updateAddressInfo = ({ zonecode, address }) => {
    // 주소 정보 업데이트
    setZonecode(zonecode);
    setAddress(address);
  };

  const onFinish = values => {
    setServerData({ ...values });
    values.address = address;
    values.zipCode = zonecode;
    console.log("Success:", values);
    putAdress({ iaddress: item.iaddress, values, successFn, failFn, errorFn });
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const successFn = result => {
    moveToPath("/address");
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const handleClickRemove = () => {
    deleteOne({ iaddress: item.iaddress, successFn, failFn, errorFn });
  };

  const PrevBt = () => {
    moveToPrev();
  };
  return (
    <div>
      <AddressHeadWrap />
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
          zipCode: item.zipCode,
          address: item.address,
          addressDetail: item.addressDetail,
        }}
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <AddressDetailed onAddressChange={updateAddressInfo} item={item} />
        <AddressBtWrap>
          <div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="button"
                onClick={() => PrevBt()}
                style={{
                  width: "203px",
                  height: "70px",
                  background: "#d9d9d9",
                  color: "#868686",
                  fontSize: "20px",
                  fontWeight: 500,
                  border: "none",
                }}
              >
                뒤로가기
              </Button>
            </Form.Item>
          </div>
          <div style={{ display: "flex", gap: "30px" }}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="button"
                onClick={handleClickRemove}
                style={{
                  width: "203px",
                  height: "70px",
                  fontSize: "20px",
                  fontWeight: 500,
                  border: "1px solid #FF4E4E",
                  background: "#FFF",
                  color: "#FF4E4E",
                }}
              >
                주소 삭제하기
              </Button>
            </Form.Item>
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
                주소 수정하기
              </Button>
            </Form.Item>
          </div>
        </AddressBtWrap>
      </Form>
      <Outlet />
    </div>
  );
};
export default AddressModify;
