import styled from "@emotion/styled";
import { ConfigProvider, Input } from "antd";
import React from "react";

const OrderInfo = styled.div`
  margin-bottom: 30px;
  .InfoDetail {
    font-size: 15px;
    display: flex;
    margin-bottom: 10px;
    div {
      width: 100px;
      line-height: 40px;
    }
  }
`;
const OrderInfoCom = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            // colorPrimary: "#00b96b",
          },
          Radio: {
            // buttonStyle: "solid",
            colorPrimary: "#E9B25F",
          },
          Input: {
            colorPrimary: "#E9B25F",
            activeBorderColor: "#E9B25F",
            hoverBorderColor: "#E9B25F",
          },
        },
      }}
    >
      <OrderInfo className="orderInfo">
        <div className="paymentListTitle">수령인 정보</div>
        <div className="InfoDetail">
          <div>
            <p>이름</p>
          </div>

          <Input
            maxLength={20}
            style={{
              borderRadius: "0px",
              outline: "none",
              boxShadow: "none",
              height: "40px",
            }}
            spellCheck={false}
          />
        </div>
        <div className="InfoDetail">
          <div>
            <p>이메일</p>
          </div>

          <Input
            maxLength={20}
            style={{
              borderRadius: "0px",
              outline: "none",
              boxShadow: "none",
              height: "40px",
            }}
            spellCheck={false}
          />
        </div>
        <div className="InfoDetail">
          <div>
            <p>전화번호</p>
          </div>

          <Input
            type="tel"
            maxLength={20}
            style={{
              borderRadius: "0px",
              outline: "none",
              boxShadow: "none",
              height: "40px",
            }}
            spellCheck={false}
          />
        </div>
      </OrderInfo>
    </ConfigProvider>
  );
};

export default OrderInfoCom;
