import React, { useState } from "react";
import { Radio, Input, Checkbox, Button } from "antd";
import styled from "styled-components";

// ==========이모션작어어업
const ModalWrap = styled.div`
  position: relative;
  display: block;
`;
const BankTransferModal = () => {
  const onChangeAgree = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [value, setValue] = useState(1);
  const onChange = e => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <ModalWrap>
      <div>
        <div className="modalItem">
          <div className="modalHeader">
            <p>무통장 입금</p> <Button type="text">X</Button>
          </div>
          <div className="modalMain">
            <div className="checkBank">
              <p>은행</p>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>농협</Radio>
                <Radio value={2}>국민</Radio>
                <Radio value={3}>부산</Radio>
                <Radio value={4}>우리</Radio>
                <Radio value={5}>신한</Radio>
                <br />
                <Radio value={6}>기업</Radio>
                <Radio value={7}>대구</Radio>
              </Radio.Group>{" "}
            </div>
            <div className="acountNum">
              <p>입금계좌번호</p>
              <input
                type="text"
                placeholder="주문완료페이지에서 입금계좌번호를 확인하시기 바랍니다."
                // caret-color: transparent;
                // 입력 못하게 하는 css 코드 나중ㅇ ㅔ넣긔
              />
            </div>
            <div className="userName">
              <p>입금자명</p>
              <input type="num" />
            </div>
            <div>
              <Checkbox onChange={onChange}>
                <p>상기 구매 내역에 동의합니다.</p>
              </Checkbox>
            </div>
          </div>
          <div className="modalFooter">
            <button>다음</button>
          </div>
        </div>
      </div>
    </ModalWrap>
  );
};

export default BankTransferModal;
