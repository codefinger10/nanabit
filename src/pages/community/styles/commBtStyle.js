import styled from "@emotion/styled";

export const CommuBt = styled.button`
  border: 1px solid ${props => (props.active ? "#e9b25f" : "#d9d9d9")};
  background: #fff;
  color: ${props => (props.active ? "#e9b25f" : "#bababa")};
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 33.3%;
  height: 75px;
  cursor: pointer;
  margin-bottom: 50px;
`;
