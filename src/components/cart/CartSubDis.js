import React from "react";
import { ProductSubDiscount } from "../../styles/cart/cartstyle";

const CartSubDis = ({ serverData, totalOrderPrice }) => {
  return (
    <div>
      <ProductSubDiscount>
        <div>
          <p>[기본배송]</p>
        </div>
        <div>
          <p>
            상품구매금액:{" "}
            {totalOrderPrice > 0
              ? totalOrderPrice.toLocaleString()
              : serverData && serverData.paymentAmount
              ? serverData.paymentAmount.toLocaleString()
              : 0}{" "}
            + 배송비 0 (무료) = 합계:{" "}
            {totalOrderPrice > 0
              ? totalOrderPrice.toLocaleString()
              : serverData && serverData.paymentAmount
              ? serverData.paymentAmount.toLocaleString()
              : 0}{" "}
          </p>
        </div>
      </ProductSubDiscount>
    </div>
  );
};

export default CartSubDis;
