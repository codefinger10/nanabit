import React, { useState } from "react";
import { Input, Button } from "antd";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

// ==========이모션작어어업
const ModalWrap = styled.div`
  position: relative;
  display: block;
  width: 1440px;
  background-color: rgb(255, 255, 255, 0.3);
`;

const ModalBody = styled.div`
  /* position: relative;
  transform: translate(75%, 25%); */
  background-color: white;
  display: block;
  width: 400px;
  height: 400px;
  border: solid 1px #868686;
  padding: 25px;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  p {
    font-size: 20px;
  }
`;

const TotalAmount = styled.div`
  width: 348px;
  height: 80px;
  border-radius: 10px;
  background-color: #ddf1ff;
  padding: 12px;
  margin-bottom: 15px;
  p {
    font-size: 12px;
  }
  b {
    font-size: 30px;
  }
`;
const CardNum = styled.div`
  gap: 12px;
  margin-bottom: 15px;

  p {
    font-size: 16px;
  }
`;
const CvcNum = styled.div`
  gap: 12px;
  margin-bottom: 15px;

  p {
    font-size: 16px;
  }
`;
const ModalFooter = styled.div`
  width: 348px;
`;
const CreditCardMadal = () => {
  return (
    <ModalWrap className="modalWrap">
      <ModalBody className="modalBody">
        <div className="modalItem">
          <ModalHeader className="modalHeader">
            <p>일반결제</p>{" "}
            <Button icon={<CloseOutlined />} type="text"></Button>
          </ModalHeader>
          <div className="modalMain">
            <TotalAmount className="totalAmount">
              <p>나나빛</p> <b>58,000원</b>
            </TotalAmount>
            <CardNum className="cardNum">
              <p>카드번호</p> <br />
              <Input
                placeholder="카드번호 [-] 없이 입력"
                maxLength={16}
                style={{
                  borderRadius: "0px",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
              />
            </CardNum>
            <CvcNum className="cvcNum">
              <p>CVC번호</p> <br />
              <Input.Password
                type="password"
                placeholder="CVC번호 뒤 3자리"
                maxLength={3}
                iconRender={() => (
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/cardimg.svg"}
                    alt="card icon"
                    style={{ width: "25px", height: "22px" }}
                  />
                )}
                style={{
                  borderRadius: "0px",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
              />
            </CvcNum>
          </div>
          <ModalFooter className="modalFooter">
            <Button style={{ width: "100%", height: "42px" }} type="primary">
              다음
            </Button>
          </ModalFooter>
        </div>
      </ModalBody>
    </ModalWrap>
  );
};

export default CreditCardMadal;
