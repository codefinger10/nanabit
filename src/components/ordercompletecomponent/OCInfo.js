import React from "react";
import styled from "styled-components";

const InfoWrap = styled.div`
  .custom-table {
    border-spacing: 0 8px;
  }

  .custom-table tbody tr:last-child td {
    border-bottom: none;
  }
`;
const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Header",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div>
        <div style={{ fontWeight: "bold" }}>Name</div>
        <div style={{ fontWeight: "bold" }}>Age</div>
        <div style={{ fontWeight: "bold" }}>Address</div>
      </div>
    ),
  },
  {
    title: "Data",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div>
        <div>{text}</div>
        <div>{record.age}</div>
        <div>{record.address}</div>
      </div>
    ),
  },
];

const OCInfo = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>항목명</td>
          <td>내용</td>
        </tr>
        <tr>
          <td>항목명</td>
          <td>내용</td>
        </tr>
        <tr>
          <td>항목명</td>
          <td>내용</td>
        </tr>
        <tr>
          <td>항목명</td>
          <td>내용</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OCInfo;
