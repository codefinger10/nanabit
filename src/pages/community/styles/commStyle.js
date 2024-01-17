import styled from "@emotion/styled";

export const CommuMain = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  margin: 0 auto;

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 16px;
  }

  th {
    border-left: 3px solid #fff;
    padding: 12px;
    background: #e9b25f;
    height: 60px;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }
  td {
    border-right: 3px solid #e9b25f;
    border-bottom: 1px solid #e9b25f;
    padding: 12px;
    height: 70px;
    color: #868686;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-weight: 400;
  }
  td:last-child {
    border-right: none;
  }
  .td-docs {
    text-align: start;
  }

  th:nth-of-type(1),
  td:nth-of-type(1) {
    width: 10%;
  }

  th:nth-of-type(2),
  td:nth-of-type(2) {
    width: 50%;
  }

  th:nth-of-type(3),
  td:nth-of-type(3),
  th:nth-of-type(4),
  td:nth-of-type(4) {
    width: 20%;
  }

  .serch {
    display: flex;
    justify-content: space-between;
    margin-bottom: 33px;
  }

  form {
    display: flex;
    align-items: center;
    input {
      width: 306px;
      height: 37px;
      border: 1px solid #d9d9d9;
      background: #fff;
      font-size: 15px;
      font-weight: 350;
      padding-left: 10px;
    }
    input::placeholder {
      color: #d9d9d9;
    }
  }

  .search-button {
    margin-left: 12px;
    width: 125px;
    height: 37px;
    background: #bababa;
    color: #fff;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-weight: 500;
    border: none;
    cursor: pointer;
  }
  .write-bt {
    width: 125px;
    height: 37px;
    background: #e9b25f;
    color: #fff;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-weight: 500;
    border: none;
    cursor: pointer;
  }
  .pagination {
    margin-bottom: 62px;
  }
`;

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

export const NoticeBoard = styled.form`
  .wrap {
    font-size: 1.8rem;
    color: #868686;
  }
  .aaa {
    display: flex;
    align-items: center;
    height: 40px;
    border-top: 1px solid #868686;
  }

  .bbb {
    display: flex;
    align-items: center;
    height: 40px;
    border-top: 1px solid #868686;
    margin-bottom: 30px;
    border-bottom: 1px solid #868686;
  }
  span {
    width: 20%;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    border-left: 1px solid #868686;
    padding-left: 20px;
  }

  textarea {
    width: 100%;
    height: 550px;
    resize: none;
    font-size: 2rem;
    margin-bottom: 15px;
    padding: 10px;
  }

  .wrap-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    p {
      color: #868686;
      font-family: Noto Sans KR;
      font-size: 20px;
      font-style: normal;
      font-weight: 350;
      line-height: normal;
    }
  }

  .bts {
    display: flex;
    justify-content: end;
    gap: 15px;
  }
`;
