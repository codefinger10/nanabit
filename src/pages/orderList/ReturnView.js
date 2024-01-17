import styled from "@emotion/styled";
import React from "react";
import OrderDate from "../../components/orderlist/OrderDate";
import DateButton from "../../components/orderlist/DateButton";

const ReturnView = () => {
  const OrderViewStyle = styled.div`
    .inwrap {
      position: relative;
      max-width: 1280px;
      height: 100%;
      margin: 0 auto;
      /* display: flex; */
      justify-content: space-between;
    }
    .order-info {
      position: relative;
      width: 100%;
      height: 251px;
      border: 1px solid #d9d9d9;
      background: #fff;
      text-align: center;
      justify-content: center;
      /* align-items: center; */
      margin-top: 60px;
      display: flex;
      align-items: center;
    }
    .orderin {
      width: 100%;
    }
    .date-select {
      margin: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      gap: 20px;
      align-items: center;
      justify-items: center;
    }
    .date-select button {
      width: 50px;
      height: 29px;
      border: 1px solid #d4c7c7;
      background: #f2f2f2;
      cursor: pointer;
    }
    .date-select select {
      width: 130px;
      height: 29px;
      background: #fff;
    }
    .orderin p {
      line-height: 20px;
      font-size: 12px;
      color: #868686;
    }

    .order-line {
      width: 100%;
      height: 1px;
      margin-top: 60px;
      background-color: #868686;
    }

    .footer-item {
      display: flex;
      justify-content: space-between;
      margin: 20px 40px;

      align-items: center;
    }
    .iteminfo {
      text-align: center;
      width: 300px;
    }
    .footer-info {
      width: 100%;
      height: 251px;
      border: 1px solid #d9d9d9;
      background: #fff;
      text-align: center;
      justify-content: center;
      margin-bottom: 60px;
    }
  `;
  return (
    <OrderViewStyle>
      <div className="inwrap">
        <div className="order-info">
          <div className="orderin">
            <div className="date-select">
              <DateButton />
              <OrderDate />
            </div>
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
        <div className="order-line"></div>
        <div className="footer-wrap">
          <div className="footer-item">
            <p>선택</p>
            <p>
              주문일자
              <br />
              [주문번호]
              <br />
            </p>
            <p>이미지</p>
            <p className="iteminfo">상품정보</p>
            <p>수량</p>
            <p>상품구매금액</p>
            <p>취소/반품</p>
          </div>
          <div className="footer-info"></div>
        </div>
      </div>
    </OrderViewStyle>
  );
};

export default ReturnView;
