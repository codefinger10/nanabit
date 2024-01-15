import React from "react";
import UserInfo from "../../components/userinfo/UserInfo";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import BasicLayout from "../../layouts/BasicLayout";

const CartTxt = styled.div`
  display: flex;
  align-items: center;
  width: 1157px;
  margin-bottom: 42px;
  margin: 57px auto;
  h2 {
    width: 291px;
    height: 101px;
    font-size: 70px;
    font-weight: 500;
    color: #e9b25f;
  }
`;

const CartHead = styled.div`
  width: 1157px;
  height: 62px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #d9d9d9d9;
  font-size: 12px;
  font-weight: 400;
  color: #595959;
  div:nth-child(3) {
    flex-basis: 250px;
  }
`;

const CartPage = () => {
  return (
    <div>
      <CartTxt>
        <h2>CART</h2>
      </CartTxt>
      <UserInfo />
      <CartHead>
        <input type="checkbox"></input>
        <div>이미지</div>
        <div>상품정보</div>
        <div>판매가</div>
        <div>수량</div>
        <div>배송구분</div>
        <div>배송비</div>
        <div>합계</div>
        <div>선택</div>
      </CartHead>
    </div>
  );
};

export default CartPage;
