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
