import styled from "@emotion/styled";
import React from "react";

const TotalOrder = styled.div`
  display: flex;
  justify-content: space-between;
  height: 350px;
  margin-bottom: 30px;
  .orderPrice {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 740px;
  }
  .orderPriceDiv {
    justify-content: space-between;
    display: flex;
    font-size: 15px;
    color: #575757;
  }
`;

const PayTotal = () => {
  return (
    <TotalOrder className="총 주문 금액">
      <div className="paymentListTitle">총 주문 금액</div>
      <div className="orderPrice">
        <div className="orderPriceDiv">
          <div>주문 상품 수</div>
          <div>3개</div>
        </div>
        <div className="orderPriceDiv">
          <div>주문금액</div>
          <div>84,000원</div>
        </div>
        <div className="orderPriceDiv">
          <div>할인금액</div>
          <div>0원</div>
        </div>
        <div className="orderPriceDiv">
          <div>배송비</div>
          <div>무료</div>
        </div>
        <div className="orderPriceDiv">
          <div>최종 결제 금액</div>
          <div>84,000원</div>
        </div>
      </div>
    </TotalOrder>
  );
};

export default PayTotal;
