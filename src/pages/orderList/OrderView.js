import styled from "@emotion/styled";
import React from "react";
import DateButton from "../../components/orderlist/DateButton";
import OrderDate from "../../components/orderlist/OrderDate";

const OrderView = () => {
  const OrderViewStyle = styled.div`
    .inwrap {
      position: relative;
      max-width: 1280px;
      height: 100%;
      margin: 0 auto;
    }

    .header-wrap {
      position: relative;
      display: flex;
      width: 100%;
      height: 400px;
      background-color: blue;
      align-items: center;
      justify-content: center;
    }
    .header-info {
      /* position: relative; */
      width: 100%;
      height: 251px;
      border: 1px solid #d9d9d9;
      background: #fff;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .date-select {
      /* width: 80%; */
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      /* gap: 20px;s */
    }

    .footer-info {
      position: relative;
      /* width: 100%; */
      height: 251px;
      border: 1px solid #d9d9d9;
      background: #fff;
      text-align: center;
    }
  `;
  return (
    <OrderViewStyle>
      <div className="inwrap">
        <div className="header-wrap">
          <div className="header-info">
            <div className="date-select">
              <select>
                <option>입금전</option>
                <option>배송준비중</option>
                <option>배송중</option>
                <option>배송완료</option>
                <option>환불/취소</option>
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
        <hr></hr>
        <div className="footer-info"></div>
      </div>
    </OrderViewStyle>
  );
};

export default OrderView;
