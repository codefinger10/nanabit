import React, { useState } from "react";
import styled from "@emotion/styled";

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Arial", sans-serif;
  margin-left: 715px;
  margin-top: 20px;
`;

const CounterValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const CounterButton = styled.button`
  padding: 0px 15px;
  font-size: 4rem;
  background-color: #fff;

  cursor: pointer;
  border: 1px solid #868686;

  &:hover {
    background-color: #868686;
  }
`;

const PrettyCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <CounterWrapper>
      <CounterButton onClick={decrement}>-</CounterButton>
      <CounterValue>{count}</CounterValue>
      <CounterButton onClick={increment}>+</CounterButton>
    </CounterWrapper>
  );
};

export default PrettyCounter;
