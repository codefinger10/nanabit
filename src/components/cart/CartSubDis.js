import React from "react";
import { ProductSubDiscount } from "../../styles/cart/cartstyle";

const CartSubDis = ({ serverData }) => {
  return (
    <div>
      <ProductSubDiscount>
        <div>
          <p>[기본배송]</p>
        </div>
        <div>
          <p>
            상품구매금액:{" "}
            {serverData && serverData.paymentAmount
              ? serverData.paymentAmount.toLocaleString()
              : 0}{" "}
            + 배송비 0 (무료) = 합계:{" "}
            {serverData && serverData.paymentAmount
              ? serverData.paymentAmount.toLocaleString()
              : 0}
          </p>
        </div>
      </ProductSubDiscount>
    </div>
  );
};

export default CartSubDis;
