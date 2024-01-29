import { ConfigProvider, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getOCPage } from "../../api/orderapi/orderApi";

// 테이블 이미지 함수
// const ImageCell = ({ value }) => (
//   <div>
//     <img src={value} alt="이미지" style={{ width: "90px", height: "90px" }} />
//   </div>
// );
const OcDetail = ({ data }) => {
  // const [data, setData] = useState(null);
  const dataObject = typeof data === "object" ? data : {};
  // const productsArray = dataObject.products || [];

  // useEffect(() => {
  //   getOCPage();
  // }, []);
  // 금액 데이터
  const amountDataSource = [
    {
      key: "1",
      "총 주문금액": `${
        dataObject.totalOrderPrice
          ? `${dataObject.totalOrderPrice.toLocaleString()}원`
          : ""
      }`,
      "총 배송비": "0 원",
      "총 결제금액": `= ${
        dataObject.totalOrderPrice
          ? `${dataObject.totalOrderPrice.toLocaleString()}원`
          : ""
      }`,
    },
  ];

  const amountColumns = [
    {
      title: (
        <div
          style={{
            paddingLeft: "68px",
            paddingRight: "54px",
            fontSize: "13px",
            fontWeight: "normal",
          }}
        >
          총 주문금액
        </div>
      ),
      dataIndex: "총 주문금액",
      key: "총 주문금액",
      width: 230,
      render: (text, record) => (
        <div
          style={{
            height: "100px",
            paddingLeft: "54px",
            paddingRight: "54px",
            fontSize: "20px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {text}
        </div>
      ),
    },

    {
      title: (
        <div
          style={{
            fontWeight: "normal",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          총 배송비
        </div>
      ),
      dataIndex: "총 배송비",
      key: "총 배송비",
      width: 600,
      render: (text, record) => (
        <div
          style={{
            height: "60px",
            fontSize: "20px",
            fontWeight: "500",
            //   textAlign: "left",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: <div style={{ fontWeight: "normal" }}>총 결제금액</div>,

      dataIndex: "총 결제금액",
      key: "총 결제금액",
      width: 260,
      render: (text, record) => (
        <div
          style={{
            height: "60px",
            fontSize: "20px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {text}
        </div>
      ),
    },
  ];

  // 주문자 정보 데이터
  // const orderDataSource = [
  //   {
  //     key: "1",
  //     "상품 이미지":
  //       process.env.PUBLIC_URL + "/assets/images/defaultitemimg.svg",
  //     상품명:
  //       "[뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로 아이 전용 미니 젓가락 3종 15묶음 세트 ( 파랑, 빨강, 노랑, 구찌 명품 에디션)",
  //     수량: "1",
  //     금액: "500" + "원",
  //   },
  // ];

  const orderDataSource = data.products.map((product, index) => ({
    key: index,
    "상품 이미지": product.repPic,
    상품명: product.productNm,
    수량: product.productCnt,
    금액: `${product.productTotalPrice.toLocaleString()}원`,
  }));

  const orderColumns = [
    {
      title: (
        <div
          style={{
            paddingLeft: "68px",
            paddingRight: "54px",
            fontSize: "13px",
            fontWeight: "normal",
          }}
        >
          상품이미지
        </div>
      ),
      dataIndex: "상품 이미지",
      key: "상품 이미지",
      width: 230,
      render: (text, record) => (
        <div
          style={{
            height: "100px",
            paddingLeft: "54px",
            paddingRight: "54px",
            fontSize: "20px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <img
            src={text}
            alt="이미지"
            style={{ width: "90px", height: "90px" }}
          />
        </div>
      ),
    },

    {
      title: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "normal",
          }}
        >
          상품명
        </div>
      ),
      dataIndex: "상품명",
      key: "상품명",
      width: 518,
      render: (text, record) => (
        <div
          style={{
            height: "60px",
            fontSize: "15px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "normal",
          }}
        >
          수량
        </div>
      ),

      dataIndex: "수량",
      key: "수량",
      width: 90,
      render: (text, record) => (
        <div
          style={{
            height: "60px",
            fontSize: "20px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: (
        <div
          style={{
            fontWeight: "normal",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          금액
        </div>
      ),

      dataIndex: "금액",
      key: "금액",
      width: 170,
      render: (text, record) => (
        <div
          style={{
            height: "60px",
            fontSize: "20px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {text}
        </div>
      ),
    },
  ];

  return (
    <>
      <div style={{ width: "1150px", margin: "0 auto" }}>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#fff",
                headerSplitColor: "none",
                rowHoverBg: "#FFFBF5",
                borderColor: "#D9D9D9",
              },
            },
          }}
        >
          <div style={{ height: "50px" }}></div>
          <Table
            dataSource={amountDataSource}
            columns={amountColumns}
            pagination={false}
            style={{ borderTop: "1px solid #E9B25F" }}
          />
          <div style={{ height: "50px", width: "1150px" }}></div>
          <Table
            dataSource={orderDataSource}
            columns={orderColumns}
            pagination={false}
            style={{ borderTop: "1px solid #E9B25F" }}
          />
          <div style={{ height: "50px", width: "1150px" }}></div>
        </ConfigProvider>
      </div>
    </>
  );
};

export default OcDetail;
