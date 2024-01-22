import styled from "@emotion/styled";
import React from "react";

const OCMWrap = styled.div`
  width: 1150px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OCMDiv = styled.div`
  width: 820px;
  height: 200px;
  display: flex;
  gap: 80px;
  justify-content: center;
  align-items: center;
`;
const OCMtd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`;
const OCMText = styled.div`
  p {
    font-size: 30px;
    font-weight: 600;
    color: #e9b25f;
  }
  span {
    font-size: 20px;
    color: #595959;
    font-weight: 500;
  }
`;

const OCMDesc = styled.div`
  p {
    font-size: 20px;
    color: #595959;
    font-weight: 500;
  }
`;
const OCMessage = () => {
  return (
    <OCMWrap>
      <OCMDiv>
        <div>
          <img src={process.env.PUBLIC_URL + "/assets/images/occheck.svg"} />
        </div>
        <OCMtd>
          <OCMText>
            <p>주문이 완료되었습니다!</p>
            <span>
              주문 내역 및 배송에 관한 안내는 주문조회를 통하여 확인 가능합니다.
            </span>
          </OCMText>

          <OCMDesc>
            <p>주문번호 : 20234105-0000139</p>
            <p>주문일자 : 2024-01-05</p>
          </OCMDesc>
        </OCMtd>
      </OCMDiv>
    </OCMWrap>
  );
};

export default OCMessage;
