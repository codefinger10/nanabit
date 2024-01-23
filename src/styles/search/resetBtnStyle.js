import styled from "@emotion/styled";

export const SearchBox = styled.form`
  position: relative;
  display: flex;
  padding-left: 40px;
  input {
    padding-right: 30px; /* 입력란 오른쪽 여백 추가 */
    height: 30px;
    width: 400px;
  }

  .btn-reset {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: #ccc;
    color: white;
    border: none;
    padding: 2px 5px;
    display: ${({ showResetButton }) => (showResetButton ? "block" : "none")};
  }

  button:focus,
  button:hover {
    cursor: pointer;
  }
`;
