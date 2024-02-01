import styled from "@emotion/styled";
import { ConfigProvider, Input } from "antd";
import React, { useEffect, useState } from "react";
import { getPage } from "../../api/mypage/mypageApi";
import { useSearchParams } from "react-router-dom";

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
const PaymentOrderInfo = () => {
  const [orderInfo, setOrderInfo] = useState([]);

  // useEffect(() => {
  //   getPage({ successFn, failFn, errorFn });
  // }, []);

  // const successFn = result => {
  //   setOrderInfo(result);
  //   if (setOrderInfo === 0) {
  //     console.log("0입니다");
  //   }
  //   console.log(result);
  // };
  // const failFn = result => {
  //   console.log(result);
  // };
  // const errorFn = result => {
  //   console.log(result);
  // };
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const [serverResult, setServerResult] = useState(null);

  const value = urlSearchParams.get("result")
    ? parseInt(urlSearchParams.get("result"))
    : 1;

  // console.log(value);
  // console.log(serverResult);

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
            <p>이름 {orderInfo}</p>
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

export default PaymentOrderInfo;
