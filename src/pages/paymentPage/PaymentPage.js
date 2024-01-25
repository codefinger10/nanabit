import React from "react";
import CreditCardMadal from "../../components/paymentpagecomponent/CreditCardMadal";
import BankTransferModal from "../../components/paymentpagecomponent/BankTransferModal";
import Payment from "../../components/paymentpagecomponent/PaymentCom";

const PaymentPage = () => {
  return (
    <>
      {/* 카드결제 모달 */}
      <CreditCardMadal />
      {/* 무통장결제 모달 */}
      <BankTransferModal />
      {/* 결제창 */}
      <Payment />
    </>
  );
};

export default PaymentPage;
