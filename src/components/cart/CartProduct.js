import React, { useState } from "react";
import styled from "styled-components";

const CartProduct = () => {
  const [selectAll, setSelectAll] = useState(false); // 전체 선택 상태

  const data = [
    { id: 1, name: "John Doe", age: 25, occupation: "Developer" },
    // 추가적인 데이터 항목들...
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <table
        style={{
          width: "1130px",
          height: "62px",
          margin: "0 auto",
          borderTop: "solid 1px #000000 ",
        }}
      >
        <thead
          style={{
            height: "62px",
            borderBottom: "solid 1px #d9d9d9",
          }}
        >
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>이미지</th>
            <th>상세정보</th>
            <th>판매가</th>
            <th>수량</th>
            <th>배송구분</th>
            <th>배송비</th>
            <th>합계</th>
            <th>선택</th>
          </tr>
        </thead>

        <tbody style={{ width: "1130px", height: "92px" }}>
          <tr>
            <td
              colSpan={9}
              style={{ height: "30px", borderTop: "solid 1px #D9D9D9 " }}
            ></td>
          </tr>
          {data.map(item => (
            <tr
              key={item.id}
              style={{ textAlign: "center", marginBottom: "52px" }}
            >
              <td>
                <input type="checkbox" checked={selectAll} />
              </td>
              <td>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/cart.svg"}
                  alt="이미지 설명"
                  width="92"
                  height="92"
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
              <td>{item.occupation}</td>
              <td>{item.occupation}</td>
              <td>
                <button
                  style={{
                    width: "76px",
                    height: "29px",
                    color: "#595959",
                    border: "solid 1px #d9d9d9",
                    background: "#fff",
                  }}
                >
                  삭제하기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartProduct;
