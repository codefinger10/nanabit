import React from "react";
import UserInfo from "../../components/UserInfo";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

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

const CartProduct = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1157px;
  height: 96px;
  margin: 0 auto;
  line-height: 18px;
  img {
    width: 92px;
    height: 92px;
  }
  h2 {
    font-weight: 400;
    font-size: 12px;
  }
  button {
    width: 76px;
    height: 29px;
    background: transparent;
    border: solid 1px #d9d9d9;
    gap: 50px;
  }
  div:nth-child(1) {
    flex-basis: 300px;
  }
  .product-button {
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
      <CartProduct>
        <input type="checkbox"></input>
        <img src={process.env.PUBLIC_URL + "/assets/images/logo.svg"} />
        <div>
          <h2>◆정기배송◆ 30만원 상당 공기청정기 무료 증정</h2>
          <h2>[옵션: 공기청정기 애니멀즈+필터] </h2>
          <button>옵션변경</button>
        </div>
        <div>45,900</div>
        <div>123</div>
        <div>기본배송</div>
        <div>무료</div>
        <div>45,900</div>
        <div>1</div>
        <div>
          <button>관심상품 등록</button>
          <br />
          <button>상품 삭제</button>
        </div>
      </CartProduct>
    </div>
  );
};

export default CartPage;
