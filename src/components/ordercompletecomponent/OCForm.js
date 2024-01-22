import React from "react";
import OCMessage from "./OCMessage";
import OCInfo from "./OCInfo";
import styled from "styled-components";
import OcDetail from "./OcDetail";

const OcPadding = styled.div`
  width: 1440px;
  padding: 110px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OcWrap = styled.div`
  width: 1290px;
  height: 1520px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  padding: 50px;
`;
const OCForm = () => {
  return (
    <OcPadding>
      <OcWrap>
        <OCMessage />
        <OcDetail />
        <OCInfo />
      </OcWrap>
    </OcPadding>
  );
};

export default OCForm;
