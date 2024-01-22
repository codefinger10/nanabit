import styled from "@emotion/styled";
import React, { useState } from "react";

const LowHighFilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LowHighFilter = styled.button`
  border: none;
  background: #fff;
  color: ${props => (props.active ? "#e9b25f" : "#bababa")};
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  height: 35px;
  margin-right: 10px;
  cursor: pointer;
`;

const LowHighBt = () => {
  const [activeLHFilter, setActiveLHFilter] = useState("최신순");

  const handleClickLowHigh = filter => {
    setActiveLHFilter(filter);
  };

  return (
    <LowHighFilterContainer>
      <LowHighFilter
        onClick={() => handleClickLowHigh("최신순")}
        active={activeLHFilter === "최신순"}
      >
        최신순
      </LowHighFilter>

      <LowHighFilter
        onClick={() => handleClickLowHigh("낮은가격순")}
        active={activeLHFilter === "낮은가격순"}
      >
        낮은가격순
      </LowHighFilter>
      <LowHighFilter
        onClick={() => handleClickLowHigh("높은가격순")}
        active={activeLHFilter === "높은가격순"}
      >
        높은가격순
      </LowHighFilter>
    </LowHighFilterContainer>
  );
};

export default LowHighBt;
