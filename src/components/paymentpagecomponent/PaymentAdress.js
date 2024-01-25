import styled from "@emotion/styled";
import { ConfigProvider, Radio } from "antd";
import React, { useState } from "react";
import {
  PostNum,
  Detailadress,
  Selectadress,
} from "../../styles/payment/paymentadressstyle";

const adressDemo = [
  {
    index: 1,
    우편번호: "12345",
    주소: "서울특별시 강남구 역삼동 123-45",
    상세주소: "XYZ 아파트 102호",
  },
  {
    index: 2,
    우편번호: "67890",
    주소: "경기도 분당구 정자동 678-90",
    상세주소: "ABC 빌딩 3층",
  },
  {
    index: 3,
    우편번호: "54321",
    주소: "인천광역시 부평구 부개동 543-21",
    상세주소: "마을 공원 맞은편",
  },
];

const PaymentAdress = () => {
  const [selectedadress, setSelectedadress] = useState(adressDemo[0].index);

  const onChange = e => {
    setSelectedadress(e.target.value);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            // buttonStyle: "solid",
            colorPrimary: "#E9B25F",
          },
        },
      }}
    >
      <div className="deliveryadress">
        <div className="paymentListTitle">
          <p>배송지</p>
        </div>
        <PostNum className="postNum">
          <br />

          <p>우편번호</p>

          <div className="postNumDiv">
            <i>(41937)</i>
          </div>

          <i>
            *주문 후 배송지 수정이 어려울 수 있습니다. 확인 후 결제 진행
            부탁드립니다.
          </i>
        </PostNum>
        <Detailadress>
          <div>
            <p>대구광역시 중구 중앙대로 394</p>
          </div>
          <div>
            <p>제일빌딩 5F 나나빛</p>
          </div>
        </Detailadress>

        <Selectadress>
          <form>
            <div>
              <Radio.Group
                onChange={onChange}
                value={selectedadress}
                style={{ flexDirection: "column" }}
              >
                {adressDemo.map(adress => (
                  <Radio
                    key={adress.index}
                    value={adress.index}
                    style={{ marginRight: "0px", padding: 0 }}
                    className="custom-radio"
                  >
                    <div className="adressTextDiv">
                      <p>{`(${adress.우편번호}) ${adress.주소} ${adress.상세주소}`}</p>
                    </div>
                  </Radio>
                ))}
              </Radio.Group>
            </div>
          </form>
        </Selectadress>
      </div>
    </ConfigProvider>
  );
};

export default PaymentAdress;
