import React from "react";
import {
  ProductMainDiscount,
  ProductMainDiscountTxt,
  ProductMainDiscountWrap,
} from "../../styles/cart/cartstyle";

const CartMainDis = ({ serverData }) => {
  return (
    <div>
      <ProductMainDiscountWrap>
        <ProductMainDiscountTxt>
          <p>총 상품금액</p>
          <p>총 배송비</p>
          <p>결제예정금액</p>
        </ProductMainDiscountTxt>
        <ProductMainDiscount>
          <p>
            {serverData && serverData.paymentAmount
              ? serverData.paymentAmount.toLocaleString()
              : 0}
            원
          </p>
          <p>0 원</p>
          <p style={{ marginLeft: "2px" }}>
            {" "}
            =
            {serverData && serverData.paymentAmount
              ? serverData.paymentAmount.toLocaleString()
              : 0}
            원
          </p>
        </ProductMainDiscount>
      </ProductMainDiscountWrap>
    </div>
  );
};

export default CartMainDis;
