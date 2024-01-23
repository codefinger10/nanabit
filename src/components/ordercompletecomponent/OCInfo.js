import React from "react";
import styled from "styled-components";

const BorderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .orderInfoTitle {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    p {
      font-size: 20px;
      color: #e9b25f;
      text-align: left;
      margin-left: 35px;
      font-weight: 600;
    }
  }
`;
const BorderLinemanager = styled.table`
  border-collapse: collapse;
  border-bottom: 3px solid #e9b25f;
  border-top: 3px solid #e9b25f;

  td {
    border-left: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;

    &:first-child {
      border-left: none;
    }
  }

  .tableName {
    font-size: 16px;
    height: 50px;
    width: 190px;
    text-align: left;

    p {
      margin-left: 35px;
    }
  }

  .tableDesc {
    font-size: 16px;
    height: 50px;
    width: 960px;
    text-align: left;

    p {
      margin-left: 35px;
    }
  }
`;
const OCInfo = () => {
  return (
    <BorderWrap>
      <div>
        <div style={{ width: "1150px", height: "50px" }} />
        <div className="orderInfoTitle">
          <p>주문정보</p>
        </div>

        <BorderLinemanager>
          <thead>
            <tr>
              <td className="tableName">
                <p>주문자</p>
              </td>
              <td className="tableDesc">
                <p>내용</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tableName">
                <p>주문자 연락처</p>
              </td>
              <td className="tableDesc">
                <p>내용</p>
              </td>
            </tr>
            <tr>
              <td className="tableName">
                <p>배송지</p>
              </td>
              <td className="tableDesc">
                <p>내용</p>
              </td>
            </tr>
            <tr>
              <td className="tableName">
                <p>이메일</p>
              </td>
              <td className="tableDesc">
                <p>내용</p>
              </td>
            </tr>
            <tr className="noBorder">
              <td className="tableName">
                <p>결제수단</p>
              </td>
              <td className="tableDesc">
                <p>내용</p>
              </td>
            </tr>
          </tbody>
        </BorderLinemanager>
      </div>
    </BorderWrap>
  );
};

export default OCInfo;
