import { Button, ConfigProvider } from "antd";
import React, { useState } from "react";
import { putOrderPage } from "../../api/paymentapi/paymentapi";
import {
  PaymentBody,
  PaymentFooter,
  PaymentHeader,
  PaymentWrap,
} from "../../styles/payment/paymentstyle";
import PayMethod from "./PayMethod";
import PaymentAdress from "./PaymentAdress";
import PaymentOrderInfo from "./PaymentOrderInfo";
const Payment = () => {
  const [formData, setFormData] = useState({
    iorder: 0,
    address: 0,
    addresseeNm: "",
    phoneNumber: 0,
    email: 0,
    ipaymentOption: 0,
  });
  // 배송지
  const handleAddressChange = selectedAddress => {
    setFormData({ ...formData, address: selectedAddress });
    console.log("나는 부모컴포넌트 주소 : ", selectedAddress);
    console.log("나는 formData 주소 : ", selectedAddress);
  };
  //수령인 정보
  const handleOrderInfoChange = orderInfo => {
    setFormData({
      ...formData,
      iorder: orderInfo.iorder,
      address: orderInfo.address,
      addresseeNm: orderInfo.addresseeNm,
      phoneNumber: orderInfo.phoneNumber,
      email: orderInfo.email,
    });
    // console.log("나는 부모컴포넌트 유저정보 : ", orderInfo);
  };
  // 결제수단
  const handlebuyMethodChange = buyMethod => {
    setFormData({ ...formData, ipaymentOption: buyMethod });
    console.log("나는 부모컴포넌트 결제수단 : ", buyMethod);
  };
  const handleSubmit = async () => {
    // 폼 데이터를 이용한 PUT 요청 등의 작업 수행
    console.log("Submitted Data:", formData);
    // try {
    //   // API 호출
    //   const result = await putOrderPage({
    //     formData,
    //     successFn,
    //     failFn,
    //     errorFn,
    //   });
    //   console.log("PUT 요청 성공:", result);
    //   // 성공적으로 처리되면 추가 작업 수행
    // } catch (error) {
    //   console.log("PUT 요청 에러:", error);
    //   // 에러 처리 로직 추가
    // }
  };
  const successFn = data => console.log("PUT API 성공", data);
  const failFn = error => console.log("PUT API 실패", error);
  const errorFn = (errorMsg, error) =>
    console.log("PUT API 서버에러", errorMsg, error);
  return (
    <PaymentWrap>
      <PaymentBody>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: "#E9B25F",
                colorPrimaryActive: "#CB8C2E",
                colorPrimaryBorder: "#E9B25F",
                colorPrimaryHover: "#DF9E3C",
              },
              Radio: {
                // buttonStyle: "solid",
                colorPrimary: "#E9B25F",
              },
              Input: {
                colorPrimary: "#E9B25F",
                activeBorderColor: "#E9B25F",
                hoverBorderColor: "#E9B25F",
              },
            },
          }}
        >
          <PaymentHeader className="paymentHeader">
            <p>주문 및 결제</p>
          </PaymentHeader>
          <hr />
          <div className="paymentMain">
            {/* ===== 배송지 선택 ===== */}
            <PaymentAdress handleAddressChange={handleAddressChange} />
            <hr />
            {/* ===== 수령자 정보 ===== */}
            <PaymentOrderInfo handleOrderInfoChange={handleOrderInfoChange} />
            <hr />
            <PayMethod handlebuyMethodChange={handlebuyMethodChange} />
          </div>
          <hr />
          <PaymentFooter>
            {/* 모달 띄우기 */}
            <Button style={{ width: "250px", height: "50px" }}>
              <p>주문취소</p>
            </Button>
            <Button
              type="primary"
              style={{ width: "250px", height: "50px" }}
              onClick={handleSubmit}
            >
              <p>주문하기</p>
            </Button>
          </PaymentFooter>
        </ConfigProvider>
      </PaymentBody>
    </PaymentWrap>
  );
};
export default Payment;
