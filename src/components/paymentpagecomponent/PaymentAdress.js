import { ConfigProvider, Radio } from "antd";
import React, { useState } from "react";
import {
  Detailadress,
  PostNum,
  Selectadress,
} from "../../styles/payment/paymentaddressstyle";

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
  const [showPostNum, setShowPostNum] = useState(adressDemo[0].우편번호);
  const [showAddress, setShowAddress] = useState(adressDemo[0].주소);
  const [showDtAddress, setShowDtAddress] = useState(adressDemo[0].상세주소);

  const onChange = e => {
    const selectedValue = e.target.value;
    const selectedAddress = adressDemo.find(
      address => address.index === selectedValue,
    );

    if (selectedAddress) {
      setSelectedadress(selectedValue);
      setShowPostNum(selectedAddress.우편번호);
      setShowAddress(selectedAddress.주소);
      setShowDtAddress(selectedAddress.상세주소);
    }
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
          <p>우편번호</p>

          <div className="postNumDiv">
            <i>{showPostNum}</i>
          </div>

          <i>
            *주문 후 배송지 수정이 어려울 수 있습니다. 확인 후 결제 진행
            부탁드립니다.
          </i>
        </PostNum>
        <Detailadress>
          <div>
            <p>{showAddress}</p>
          </div>
          <div>
            <p>{showDtAddress}</p>
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
