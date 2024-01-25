import React from "react";
import { PaymentMethod } from "../../styles/payment/paymentstyle";

const PayMethod = () => {
  return (
    <PaymentMethod>
      <div className="bankTransfer">
        <p>무통장입금</p>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/wallet.svg"}
          alt="무통장입금"
        />
      </div>
      <div className="creditCard">
        <p>카드결제</p>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/cardimg.svg"}
          alt="카드결제"
        />
      </div>
    </PaymentMethod>
  );
};

export default PayMethod;
