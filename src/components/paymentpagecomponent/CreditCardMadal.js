import { CloseOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";
import {
  CardNum,
  CvcNum,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalWrap,
  TotalAmount,
} from "../../styles/payment/modalpaycreditstyle";

const CreditCardMadal = () => {
  // CVC 3자리 숫자입력  =========
  const [password, setPassword] = useState("");

  const handlePasswordChange = e => {
    // 숫자만 허용하도록 정규표현식을 사용하여 처리
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setPassword(numericValue);
  };
  // CVC 3자리 숫자입력 =========
  return (
    <ModalWrap className="modalWrap">
      <ModalBody className="modalBody">
        <div className="modalItem">
          <ModalHeader className="modalHeader">
            <p>일반결제</p>
            <Button icon={<CloseOutlined />} type="text"></Button>
          </ModalHeader>
          <div className="modalMain">
            <TotalAmount className="totalAmount">
              <p>나나빛</p> <b>58,000원</b>
            </TotalAmount>
            <CardNum className="cardNum">
              <p>카드번호</p>
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
              <p>CVC번호</p>
              <Input.Password
                type="password"
                placeholder="CVC번호 뒤 3자리"
                maxLength={3}
                value={password}
                onChange={handlePasswordChange}
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
            <Button
              style={{
                width: "100%",
                height: "42px",
                backgroundColor: "#42b0ff",
              }}
              type="primary"
            >
              다음
            </Button>
          </ModalFooter>
        </div>
      </ModalBody>
    </ModalWrap>
  );
};

export default CreditCardMadal;
