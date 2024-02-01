import React, { useState } from "react";
import {
  PayMethodWrap,
  PaymentMethod,
} from "../../styles/payment/paymentstyle";
import { ConfigProvider, Modal } from "antd";
import BankTransferModal from "./BankTransferModal";
import CreditCardModal from "./CreditCardModal";

const PayMethod = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = buttonName => {
    const newState = buttonName === "bankTransfer" ? 2 : 3;

    if (activeButton === buttonName) {
      setIsModalOpen(prevState => !prevState);
      console.log(`${newState}`);
    } else {
      setActiveButton(buttonName);
      setIsModalOpen(true);
      console.log(`${newState}`);
    }
  };
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#42b0ff",
              colorPrimaryActive: "#42b0ff",
              colorPrimaryBorder: "#42b0ff",
              colorPrimaryHover: "#42b0ff",
            },
          },
        }}
      >
        <PayMethodWrap>
          <PaymentMethod
            onClick={() => handleButtonClick("bankTransfer")}
            disabled={activeButton === "bankTransfer" && isModalOpen}
            className={activeButton === "bankTransfer" ? "active-button" : ""}
          >
            <div className="bankTransfer">
              <p>무통장입금</p>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/wallet.svg"}
                alt="무통장입금"
              />
            </div>
          </PaymentMethod>
          <PaymentMethod
            onClick={() => handleButtonClick("creditCard")}
            disabled={activeButton === "creditCard" && isModalOpen}
            className={activeButton === "creditCard" ? "active-button" : ""}
          >
            <div className="creditCard">
              <p>카드결제</p>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/cardimg.svg"}
                alt="카드결제"
              />
            </div>
          </PaymentMethod>
        </PayMethodWrap>
        <Modal
          style={{
            width: "500px",
            height: "600px",
          }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText={"다음"}
          cancelText={"취소"}
          centered
          confirmLoading={confirmLoading}
        >
          {activeButton === "bankTransfer" ? <BankTransferModal /> : null}
          {activeButton === "creditCard" ? <CreditCardModal /> : null}
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default PayMethod;
