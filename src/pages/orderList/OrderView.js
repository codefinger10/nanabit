import styled from "@emotion/styled";
import React, { useState } from "react";
import OrderDate from "../../components/orderlist/OrderDate";
import DateButton from "../../components/orderlist/DateButton";
import { motion } from "framer-motion";

const OrderView = () => {
  const OrderViewStyle = styled.div`
    .inwrap {
      position: relative;
      max-width: 1280px;
      height: 100%;
      margin: 0 auto;

      justify-content: space-between;
    }
    .order-info {
      position: relative;
      width: 100%;
      height: 251px;
      border: 1px solid #d9d9d9;
      background: #fff;
      text-align: center;
      justify-content: center;

      margin-top: 60px;
      display: flex;
      align-items: center;
      margin-bottom: 70px;
    }
    .orderin {
      width: 100%;
    }
    .date-select {
      margin: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      gap: 20px;
      align-items: center;
      justify-items: center;
    }
    .date-select button {
      width: 50px;
      height: 29px;
      border: 1px solid #d4c7c7;
      background: #f2f2f2;
      cursor: pointer;
    }
    .date-select select {
      width: 130px;
      height: 29px;
      background: #fff;
    }
    .orderin p {
      line-height: 20px;
      font-size: 12px;
      color: #868686;
    }
    .footer {
      border-top: 1px solid #868686;
      border-bottom: 1px solid #868686;
      display: flex;
      justify-content: space-between;
      color: #868686;
      text-align: center;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px; /* 125% */
      letter-spacing: 0.5px;
      padding: 30px 20px;
      p {
        width: 8.5%;
      }
      .footer-p {
        width: 40%;
      }
    }

    .footer-info {
      display: flex;
      align-items: center;
      color: #868686;
      text-align: center;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px; /* 125% */
      letter-spacing: 0.5px;
      padding: 30px 20px;
    }
    .footer-info-2 {
      width: 8.5%;
      button {
        background: transparent;
        border: 1px solid #868686;
        cursor: pointer;
        width: 100%;
        border-radius: 5px;
        color: #868686;
        text-align: center;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 200% */
        letter-spacing: 0.5px;
      }
    }
    .footer-2 {
      border: 1px solid #868686;
      border-top: none;
    }
    .footer-itme {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .footer-itme-img {
        width: 9.3%;
        height: 88px;
        display: flex;
        align-items: center;
        img {
          width: 70%;
          height: 70%;
          margin-left: 20px;
        }
      }
      p {
        width: 9.3%;
      }
      .footer-itme-p {
        width: 44%;
      }
    }
    .footer-itme-bt {
      width: 9.3%;
      button {
        background: transparent;
        border: 1px solid #868686;
        border-radius: 5px;
        cursor: pointer;
        width: 80%;
        color: #868686;
        text-align: center;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.5px;
      }
    }
    .dropdown-bt {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      button {
        border-radius: 5px;
        background: transparent;
        border: 1px solid #868686;
        cursor: pointer;
        width: 100px;
        color: #868686;
        text-align: center;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.5px;
      }
    }
    .aaa {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `;

  const orders = [
    {
      createdAt: "2024-01-29 15:41:31",
      iorder: 100006,
      idetails: 84,
      refundFl: 0,
      reviewFl: 0,
      items: [
        {
          productpic: "/assets/images/youtube.svg",
          iorder: 100006,
          iproduct: 1,
          price: 12500,
          processState: "배송중",
          productCnt: 1,
          productNm: "아주아주멋진아이템임",
          // refundFl: 0,
          // reviewFl: 0,
        },
      ],
    },
    {
      createdAt: "2024-01-29 15:41:31",
      iorder: 100006,
      idetails: 84,
      refundFl: 0,
      reviewFl: 0,
      items: [
        {
          productpic: "/assets/images/youtube.svg",
          productNm: "아주아주멋진아이템임1",
          productCnt: 5,
          price: 55500,
          processState: "배송중",
        },
        {
          productpic: "/assets/images/youtube.svg",
          productNm: "아주아주멋진아이템임2",
          productCnt: 5,
          price: 55500,
          processState: "배송중",
        },
        {
          productpic: "/assets/images/youtube.svg",
          productNm: "아주아주멋진아이템임3",
          productCnt: 5,
          price: 55500,
          processState: "배송중",
        },
      ],
    },
    {
      orderNumber: "191231230",
      date: "2024-01-04",
      items: [
        {
          productImage: "/assets/images/youtube.svg",
          productName: "화 ㅈㄴ 나네???",
          quantity: 5,
          productAmount: 45500,
          deliveryStatus: "배송중",
        },
        {
          productImage: "/assets/images/youtube.svg",
          productName: "저거 점 우리가 찍어야 하나?",
          quantity: 3,
          productAmount: 79500,
          deliveryStatus: "배송중",
        },
        {
          productImage: "/assets/images/youtube.svg",
          productName: "일까?",
          quantity: 1,
          productAmount: 15500,
          deliveryStatus: "배송중",
        },
      ],
    },
    {
      orderNumber: "199931230",
      date: "2024-01-04",
      items: [
        {
          productImage: "/assets/images/youtube.svg",
          productName: "아주아주멋진아이템임???",
          quantity: 5,
          productAmount: 55500,
          deliveryStatus: "배송중",
        },
        {
          productImage: "/assets/images/youtube.svg",
          productName: "이템임",
          quantity: 3,
          productAmount: 79500,
          deliveryStatus: "배송중",
        },
        {
          productImage: "/assets/images/youtube.svg",
          productName: "일까?",
          quantity: 1,
          productAmount: 15500,
          deliveryStatus: "배송중",
        },
        {
          productImage: "/assets/images/youtube.svg",
          productName: "일까?",
          quantity: 1,
          productAmount: 15500,
          deliveryStatus: "배송중",
        },
        {
          productImage: "/assets/images/youtube.svg",
          productName: "일까?",
          quantity: 1,
          productAmount: 15500,
          deliveryStatus: "배송중",
        },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(orders.map(() => false));

  const handleOpen = idx => {
    setIsOpen(item => {
      const newState = [...item];
      newState[idx] = !newState[idx];
      return newState;
    });
  };

  return (
    <OrderViewStyle>
      <div className="inwrap">
        <div className="order-info">
          <div className="orderin">
            <div className="date-select">
              <select className="languages">
                <option value="">전체 주문처리상태</option>
                <option value="">입금전</option>
                <option value="">배송준비중</option>
                <option value="">배송중</option>
                <option value="">배송완료</option>
                <option value="">환불/취소</option>
              </select>
              <DateButton />
              <OrderDate />
            </div>
            <p>
              기간 검색시 지난 주문내역을 조회하실 수 있습니다.
              <br />
              주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수
              있습니다.
              <br />
              취소/교환/반품 신청은 주문 완료일 기준 14일까지 가능합니다.
              <br />
            </p>
          </div>
        </div>
        <div className="footer">
          <p>주문일자 [주문번호]</p>
          <p>이미지</p>
          <p className="footer-p">상품정보</p>
          <p>수량</p>
          <p>상품구매금액</p>
          <p>배송상태</p>
          <p>취소/반품</p>
          <p>리뷰관리</p>
        </div>
        {orders.map((item, idx) => (
          <div key={idx} className="footer-2">
            <div className="footer-info">
              <div className="footer-info-2">
                <p>
                  {item.createdAt}
                  <br /> <span>[{item.iorder}]</span>
                </p>
                <button>주문상세보기{item.idetails}</button>
              </div>
              <div className="aaa">
                {item.items
                  .slice(0, isOpen[idx] ? item.items.length : 1)
                  .map((item, itemIndex) => (
                    <div key={itemIndex} className="footer-itme">
                      <div className="footer-itme-img">
                        <img src={item.productpic} alt="상품" />
                      </div>
                      <p className="footer-itme-p">{item.productNm}</p>
                      <p>{item.productCnt}</p>
                      <p>{item.price}</p>
                      <p>{item.processState}</p>
                      <div className="footer-itme-bt">
                        {itemIndex === 0 && <button>주문취소</button>}
                      </div>
                      <div className="footer-itme-bt">
                        {itemIndex === 0 && <button>작성</button>}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="dropdown-bt">
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  onClick={() => handleOpen(idx)}
                >
                  {isOpen[idx] ? "접기" : "더보기"}
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </OrderViewStyle>
  );
};

export default OrderView;
