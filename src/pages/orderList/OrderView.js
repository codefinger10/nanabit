import styled from "@emotion/styled";
import React from "react";
import OrderDate from "../../components/orderlist/OrderDate";
import DateButton from "../../components/orderlist/DateButton";
import YourTableComponent from "../../components/orderlist/CustomerOrder";

const OrderView = () => {
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

      margin: 20px 40px;
      /* padding-bottom: 20px; */
      align-items: center;
      text-align: center;
    }
    .iteminfo {
      /* text-align: center; */
      /* width: 300px; */
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
    .order-product {
      display: flex;
      justify-content: space-around;
      margin: 20px 10px;
      padding-left: 30px;
      padding-right: 30px;
      gap: 95px;
      align-items: center;
      text-align: center;
    }

    .order-product img {
      width: 40px;
      height: 40px;
    }
  `;
  return (
    <OrderViewStyle>
      <div className="inwrap">
        <div className="order-info">
          <div className="orderin">
            <div className="date-select">
              <select className="languages">
                <option value="">전체 주문처리상태</option>
                <option value="">입금전</option>
                <option value="">배송준비중</option>
                <option value="">배송중</option>
                <option value="">배송완료</option>
                <option value="">환불/취소</option>
              </select>
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
            <p>배송상태</p>
            <p>리뷰관리</p>
          </div>
          <div className="footer-info">
            <div className="order-product">
              <input type="checkbox"></input>
              <p>199931230</p>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/youtube.svg"}
              />

              <p className="iteminfo">아주아주멋진아이템임</p>
              <p>1</p>
              <p>1,900</p>
              <p>배송중</p>
              <p>리뷰작성</p>
            </div>
            <input type="checkbox"></input>
            <p>199931230</p>
            <p>아주아주멋진아이템임</p>
            <p>1</p>
            <p>1,900</p>
            <p>배송중</p>
            <p>리뷰작성</p>
          </div>
          <YourTableComponent />
        </div>
      </div>
    </OrderViewStyle>
  );
};

export default OrderView;
