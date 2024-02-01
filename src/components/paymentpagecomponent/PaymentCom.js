import { Button, ConfigProvider } from "antd";
import React, { useState } from "react";
import {
  PaymentBody,
  PaymentFooter,
  PaymentHeader,
  PaymentWrap,
} from "../../styles/payment/paymentstyle";
import PayMethod from "./PayMethod";
import PayTotal from "./PayTotal";
import PaymentAdress from "./PaymentAdress";
import PaymentOrderInfo from "./PaymentOrderInfo";
import PaymentOrderList from "./PaymentOrderList";
import { putOrderPage } from "../../api/paymentapi/paymentapi";

const Payment = () => {
  const [formData, setFormData] = useState({
    address: 0,
    userInfo: "",
    OrderInfo: 0,
    buyMethod: 0,
  });

  // 배송지
  const handleAddressChange = newAddress => {
    setFormData({ ...formData, address: newAddress });
  };
  //수령인 정보
  const handleOrderInfoChange = newOrderInfo => {
    setFormData({ ...formData, OrderInfo: newOrderInfo });
  };
  // 결제수단
  const handlebuyMethodChange = newbuyMethod => {
    setFormData({ ...formData, buyMethod: newbuyMethod });
  };

  const handleSubmit = async () => {
    // 폼 데이터를 이용한 POST 요청 등의 작업 수행
    try {
      console.log("Submitted Data:", formData);
      // API 호출
      const result = await putOrderPage(formData);
      console.log("POST 요청 성공:", result);
      // 성공적으로 처리되면 추가 작업 수행
    } catch (error) {
      console.error("POST 요청 에러:", error);
      // 에러 처리 로직 추가
    }
  };
  const popstyle = {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    zIndex: 999,
  };

  // 팝업 관련
  const [popTitle, setPopTitle] = useState("");
  const [popContent, setPopContent] = useState("");
  const [result, setResult] = useState(0);

  const closeModal = () => {
    // 팝업닫기
    setPopTitle("");

    if (result === 0) {
      // 내용 읽기로 이동
      // moveToRead(pno);
    } else if (result === 1) {
      // 목록으로 가기
      // moveToList({ page: 1 });
    } else if (result === 2) {
      // 창만 닫기
    }
  };

  return (
    <PaymentWrap>
      {/* <div style={popstyle}>
        <div style={{ background: "#fff", textAlign: "center" }}>
          몸체
          <div>
            <div>
              <p>결제하시겠습니까아</p>
            </div>
            <div>
              <button>네</button>
              <button>아니오</button>
            </div>
          </div>
        </div>
      </div> */}

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
            <PaymentAdress onChange={handleAddressChange} />
            <hr />
            {/* ===== 수령자 정보 ===== */}
            <PaymentOrderInfo onChange={handleOrderInfoChange} />
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
            <PayMethod onChange={handlebuyMethodChange} />
          </div>
          <hr />
          <PaymentFooter>
            {/* 모달 띄우기 */}
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
