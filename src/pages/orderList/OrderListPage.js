import React, { useState } from "react";

import ReturnViewCom from "./ReturnView";
import InfoTitle from "../../components/titleItems/InfoTitle";
import OrderViewCom from "./OrderView";
import ReturnView from "./ReturnView";
import OrderView from "./OrderView";

const OrderList = () => {
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
          {orderSelectButton === "orderView" ? <OrderView /> : <ReturnView />}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
