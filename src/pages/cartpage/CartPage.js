import styled from "@emotion/styled";
import React from "react";
import UserInfo from "../../components/userinfo/UserInfo";
import { CartTxt } from "../../styles/cart/cartstyle";
import CartProduct from "../../components/cart/CartProduct";

const CartPage = () => {
  return (
    <div>
      <CartTxt>
        <h2>CART</h2>
      </CartTxt>
      <UserInfo />
      <CartProduct />
    </div>
  );
};

export default CartPage;
