import React, { useState } from "react";

const CartProduct = () => {
  const [selectAll, setSelectAll] = useState(false); // 전체 선택 상태
  const [selectedItems, setSelectedItems] = useState([]); // 선택된 아이템 상태

  const data = [
    { id: 1, name: "John Doe", age: 1, occupation: "Developer" },
    { id: 2, name: "John Doe", age: 2, occupation: "Developer" },
    { id: 3, name: "John Doe", age: 3, occupation: "Developer" },
    { id: 4, name: "John Doe", age: 4, occupation: "Developer" },
    // 추가적인 데이터 항목들...
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    // 전체 선택 체크박스를 토글할 때 선택된 아이템 목록을 업데이트합니다.
    setSelectedItems(selectAll ? [] : data.map(item => item.id));
  };

  const handleSelectRow = id => {
    const updatedSelectedItems = selectedItems.includes(id)
      ? selectedItems.filter(itemId => itemId !== id)
      : [...selectedItems, id];
    setSelectedItems(updatedSelectedItems);
  };

  return (
    <div>
      <table
        style={{
          width: "1157px",
          height: "62px",
          margin: "0 auto",
          borderTop: "solid 1px #000000 ",
          borderBottom: "solid 1px #d9d9d9 ",
        }}
      >
        <thead
          style={{
            height: "62px",
            borderBottom: "solid 1px #d9d9d9",
            fontSize: "12px",
            color: "#595959",
          }}
        >
          <tr>
            <th style={{ width: "20px" }}>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th style={{ width: "160px" }}>이미지</th>
            <th style={{ textAlign: "start" }}>상세정보</th>
            <th style={{ width: "130px" }}>판매가</th>
            <th>수량</th>
            <th style={{ width: "130px" }}>배송구분</th>
            <th style={{ width: "130px" }}>배송비</th>
            <th style={{ width: "130px" }}>합계</th>
            <th style={{ width: "130px" }}>선택</th>
          </tr>
        </thead>

        <tbody style={{ width: "1130px", height: "92px" }}>
          <tr>
            <td
              colSpan={9}
              style={{ height: "1px", borderTop: "solid 1px #D9D9D9 " }}
            ></td>
          </tr>
          {data.map(item => (
            <tr key={item.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "26px 0" }}>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectRow(item.id)}
                />
              </td>
              <td style={{ padding: "26px 0" }}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/cart.svg"}
                  alt="이미지 설명"
                  width="92"
                  height="92"
                />
              </td>
              <td style={{ padding: "26px 0", textAlign: "start" }}>
                {item.id}
              </td>
              <td style={{ padding: "26px 0" }}>{item.name}</td>
              <td style={{ width: "45px", height: "48px", padding: "26px 0" }}>
                <input
                  type="number"
                  min={1}
                  max={9}
                  step={1}
                  defaultValue={item.age}
                  style={{
                    border: "1px solid #d9d9d9",
                    width: "45px",
                    height: "22px",
                    borderRadius: "4px",
                    background: "#fff",
                    textAlign: "center",
                    padding: "5px",
                    marginBottom: "5px",
                  }}
                ></input>
                <button
                  style={{
                    width: "45px",
                    height: "22px",
                    border: "solid 1px #d9d9d9",
                    background: "#fff",
                    color: "#868686",
                    fontSize: "10px",
                    fontWeight: "400",
                  }}
                >
                  변경
                </button>
              </td>
              <td style={{ padding: "26px 0" }}>{item.occupation}</td>
              <td style={{ padding: "26px 0" }}>{item.occupation}</td>
              <td style={{ padding: "26px 0" }}> {item.occupation}</td>
              <td style={{ padding: "26px 0" }}>
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
