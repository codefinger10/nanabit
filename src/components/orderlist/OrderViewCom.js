import styled from "@emotion/styled";
import React from "react";
import OrderDate from "./OrderDate";

const OrderViewCom = () => {
  const OrderViewStyle = styled.div`
    .inwrap {
      position: relative;
      max-width: 1280px;
      height: 100%;
      /* height: 30px; */
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      background-color: red;
    }
    .order-info {
      width: 100%;
      height: 251px;
      border: 1px solid #d9d9d9;
      background: #fff;
      text-align: center;
    }
  `;
  return (
    <OrderViewStyle>
      <div className="inwrap">
        <div className="order-info">
          <OrderDate />
          <p>
            기간 검색시 지난 주문내역을 조회하실 수 있습니다.
            <br />
            주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수
            있습니다.
            <br />
            취소/교환/반품 신청은 주문 완료일 기준 14일까지 가능합니다.
            <br />
          </p>
        </div>
      </div>
    </OrderViewStyle>
  );
};

export default OrderViewCom;
