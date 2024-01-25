import { Button, ConfigProvider } from "antd";

import React from "react";
import {
  PaymentBody,
  PaymentFooter,
  PaymentHeader,
  PaymentWrap,
} from "../../styles/payment/paymentstyle";
import PayMethod from "./PayMethod";
import PayTotal from "./PayTotal";
import PaymentAdress from "./PaymentAdress";
import OrderInfoCom from "./PaymentOrderInfo";
import PaymentOrderList from "./PaymentOrderList";

const Payment = () => {
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
            <PaymentAdress />
            <hr />

            {/* ===== 수령자 정보 ===== */}
            <OrderInfoCom />
            <hr />
            {/* ===== 주문상품 ===== */}
            <div className="paymentListTitle">주문상품</div>
            <PaymentOrderList />

            <hr />

            {/* ===== 총 주문 금액 ===== */}
            <PayTotal />
            <hr />

            {/* ===== 결제 수단 ===== */}
            <div className="paymentListTitle">결제 수단</div>
            <PayMethod />
          </div>

          <hr />

          <PaymentFooter>
            <Button style={{ width: "250px", height: "50px" }}>
              <p>주문취소</p>
            </Button>
            <Button type="primary" style={{ width: "250px", height: "50px" }}>
              <p>주문하기</p>
            </Button>
          </PaymentFooter>
        </ConfigProvider>
      </PaymentBody>
    </PaymentWrap>
  );
};

export default Payment;
