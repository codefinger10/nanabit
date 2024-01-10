import React, { useState } from "react";

import ReturnViewCom from "../../components/orderlist/ReturnViewCom";
import InfoTitle from "../../components/titleItems/InfoTitle";
import OrderViewCom from "../../components/orderlist/OrderViewCom";

const OrderList = () => {
  const infoText = "ORDER-LIST";
  const infoText = "ORDER-LIST";

  // 주문/취소 버튼
  const [orderSelectButton, setSelectOrderButton] = useState("orderView");
  const handChangeOrder = buttonType => {
    setSelectOrderButton(buttonType);
  };

  return (
    <div className="inner-wrap">
      <div className="inner-header">
        <InfoTitle infoText={infoText} />
        {/* <CommunityTitle maintxt={maintxt} /> */}
        <div>
          <button
            className={`order-view${
              orderSelectButton === "orderView" ? "active" : ""
            }`}
            onClick={() => handChangeOrder("orderView")}
          >
            주문내역조회
          </button>
          <button
            className={`return-view${
              orderSelectButton === "ruturnView" ? "active" : ""
            }`}
            onClick={() => handChangeOrder("ruturnView")}
          >
            취소/반품조회
          </button>
        </div>
        <div className="page-content">
          {orderSelectButton === "orderView" ? (
            <OrderViewCom />
          ) : (
            <ReturnViewCom />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
