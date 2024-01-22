import styled from "@emotion/styled";
import React from "react";

const OrderProduct = styled.div`
  font-size: 15px;
  color: #575757;
  display: flex;
  height: 120px;
  justify-content: space-between;
  width: 1110px;
  margin-bottom: 30px;
  .productImgDesc {
    display: flex;
  }

  .productNameTex {
    margin-left: 20px;
    height: 120px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .countPrice {
    height: 120px;
    margin-right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
const PaymentOrderList = () => {
  return (
    <div className="주문상품">
      <OrderProduct>
        <div className="productImgDesc">
          <div>
            <img
              style={{ width: "120px" }}
              src={process.env.PUBLIC_URL + "/assets/images/defaultitemimg.svg"}
            />
          </div>

          <div className="productNameTex">
            <div className="pdName">
              [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로 아이 전용 미니
              젓가락
            </div>
            <div className="pdTex">
              <p>배송비 무료</p>
            </div>
          </div>
        </div>

        <div className="countPrice">
          <p>1개</p>
          <b>28,000원</b>
        </div>
      </OrderProduct>
    </div>
  );
};

export default PaymentOrderList;
