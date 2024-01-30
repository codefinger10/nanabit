import React, { useEffect, useState } from "react";
import { getCart } from "../../api/cart/cartApi";
import CartInfo from "../../components/cart/CartInfo";
import CartMainDis from "../../components/cart/CartMainDis";
import CartProduct from "../../components/cart/CartProduct";
import CartSubDis from "../../components/cart/CartSubDis";
import UserInfo from "../../components/userinfo/UserInfo";
import {
  CartTxt,
  ProductBtWrap,
  ProductCartSec,
} from "../../styles/cart/cartstyle";

const CartPage = () => {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    getCart({ successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    setServerData(result);
    // console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  // const paymentAmount = serverData[0].paymentAmount;

  return (
    <div>
      <CartTxt>
        <h2>CART</h2>
      </CartTxt>
      <UserInfo />

      <CartProduct serverData={serverData} />
      <CartSubDis serverData={serverData[0]} />
      <ProductCartSec>
        <button>장바구니 비우기</button>
      </ProductCartSec>
      <CartMainDis serverData={serverData[0]} />
      <ProductBtWrap>
        <button style={{ background: "#595959" }}>선택상품주문</button>
        <button style={{ background: "#d9d9d9" }}>전체상품주문</button>
      </ProductBtWrap>
      <CartInfo />
    </div>
  );
};

export default CartPage;
