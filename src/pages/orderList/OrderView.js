import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import OrderDate from "../../components/orderlist/OrderDate";
import DateButton from "../../components/orderlist/DateButton";
import { motion } from "framer-motion";
import { OrderViewStyle } from "../../styles/ol/orderStyle";

import { Navigate, useNavigate } from "react-router-dom";
import {
  deleteOne,
  getOrderListPage,
  postOne,
} from "../../api/orderapi/orderListApi";
import { PagiWarp } from "../../styles/product/ProductGridStyle";
import { Pagination } from "antd";

const initState = {
  createdAt: "",
  idetails: 0,
  iorder: 0,
  refundFl: 0,
  reviewFl: 0,
  items: [
    {
      idetails: 0,
      price: 0,
      processState: "",
      productCnt: 0,
      productNm: "",
      repPic: "",
    },
  ],
};
const OrderView = () => {
  const [orderData, setOrderData] = useState([initState]);
  const [isOpen, setIsOpen] = useState([]);

  const [dateButton, setDateButton] = useState();
  const [activeDate, setActiveDate] = useState();
  const [optionButton, setOptionButton] = useState(0);

  const iorderNavi = useNavigate();

  const handleOpen = index => {
    setIsOpen(item => {
      const updatedOrder = [...item];
      updatedOrder[index] = !updatedOrder[index];
      return updatedOrder;
    });
  };

  const handleDateButton = buttonType => {
    setActiveDate(buttonType);
    setDateButton(buttonType); // dateButton 상태 업데이트
    // fetchData(); // 변경된 값으로 데이터를 다시 가져옴
  };
  const handleState = e => {
    const selectedOption = e.target.value;
    setOptionButton(selectedOption);
    console.log("옵션버튼", selectedOption);
  };

  // 주문취소
  // `http://112.222.157.156:5223/api/order?iorder=1`;
  const handleCancelOrder = orderId => {
    console.log("눌러요", orderId);
    deleteOne({
      iorder: orderId,
      successFn,
      failFn,
      errorFn,
    });
  };

  const handleReturnOrder = (iDetails, iPrice, iProductCount) => {
    console.log(iDetails);
    console.log("환불요청", iDetails);
    const idetailData = {
      contents: "단순변심",
      refundCnt: iProductCount,
      refundPrice: iPrice,
    };

    postOne(iDetails, {
      idetailData,
      successFn,
      failFn,
      errorFn,
    });
  };

  const fetchData = () => {
    getOrderListPage({
      orderParam: {
        list_flag: 1,
        process_state_code: optionButton,
        date: dateButton,
      },
      successFn,
      failFn,
      errorFn,
    });
  };

  const successFn = data => {
    console.log("successFn : ", data);
    setOrderData(data);
  };

  const failFn = data => {
    console.log("failFn : ", data);
    alert("failFn : 데이터 호출에 실패하였습니다.");
  };

  const errorFn = data => {
    console.log("errorFn : ", data);
    alert("서버상태 불안정 그래서, 데모테스트했음.");
    setOrderData(data);
  };

  useEffect(() => {
    setIsOpen(Array(orderData.length).fill(false));
  }, [orderData]); // orderData가 업데이트될 때마다 isOpen을 초기화

  useEffect(() => {
    fetchData();
  }, [dateButton]);

  useEffect(() => {
    fetchData();
  }, [optionButton]);

  // 배송관련 텍스트 state 관리
  const StateMap = {
    구매확인: 0,
    배송준비중: 1,
    배송중: 2,
    배송완료: 3,
    주문취소: 4,
    반품: 5,
  };

  const StateNum = StateMap[orderData.processState];
  console.log("orderData", orderData);

  // 상태에 따른 버튼 출력
  const makeStateBt = _orders => {
    console.log("dksehlwy.", _orders);
    return (
      <>
        {_orders.processState === "배송완료" ? (
          <button
            onClick={() =>
              handleReturnOrder(
                _orders.idetails,
                _orders.productCnt,
                _orders.price,
              )
            }
            style={{
              backgroundColor: "#F24747",
              color: "#fff",
              border: "none",
            }}
          >
            반품처리 {_orders.idetails}|{_orders.productCnt}|{_orders.price}
          </button>
        ) : null}
        {/* ================================== */}
        {_orders.processState === "배송준비중" ? (
          <button
            onClick={() => handleCancelOrder(_orders.idetails)}
            style={{
              backgroundColor: "#F24747",
              color: "#fff",
              border: "none",
            }}
          >
            주문취소 {_orders.iorder}
          </button>
        ) : null}
      </>
    );
  };

  const DateBt = styled.button`
    /* border: none; */
    background: #fff;
    color: ${props => (props.active ? "#e9b25f" : "#bababa")};
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 12px;
    height: 35px;
    cursor: pointer;
  `;

  return (
    <OrderViewStyle>
      <div className="inwrap">
        <div className="order-info">
          <div className="orderin">
            <div className="date-select">
              <select className="languages" onChange={handleState}>
                <option value="1">전체 주문처리상태</option>
                <option value="2">입금전</option>
                <option value="3">배송준비중</option>
                <option value="4">배송중</option>
                <option value="5">배송완료</option>
              </select>
              <div>
                <DateBt
                  onClick={() => handleDateButton(1)}
                  active={activeDate === 1}
                >
                  오늘
                </DateBt>
                <DateBt
                  onClick={() => handleDateButton(2)}
                  active={activeDate === 2}
                >
                  1주일
                </DateBt>
                <DateBt
                  onClick={() => handleDateButton(3)}
                  active={activeDate === 3}
                >
                  1개월
                </DateBt>
                <DateBt
                  onClick={() => handleDateButton(4)}
                  active={activeDate === 4}
                >
                  3개월
                </DateBt>
                <DateBt
                  onClick={() => handleDateButton(5)}
                  active={activeDate === 5}
                >
                  6개월
                </DateBt>
              </div>
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

        {orderData &&
          orderData.map((orders, idx) => (
            <div key={idx} className="order-border">
              <div className="footer-info">
                <div className="footer-info-2">
                  <p>
                    {orders.createdAt}
                    <br /> <span>[{orders.iorder}]</span>
                  </p>
                  <button onClick={() => iorderNavi(`/order/${orders.iorder}`)}>
                    주문상세보기
                  </button>
                </div>

                <div className="itemmap">
                  {orders.items
                    .slice(0, isOpen[idx] ? orders.items.length : 1)
                    .map((orders, itemIndex) => (
                      <div key={itemIndex} className="itme">
                        <div className="itme-img">
                          <img src={orders.repPic} alt="상품" />
                        </div>
                        <p className="itme-p">{orders.productNm}</p>
                        <p>{orders.productCnt}</p>
                        <p>{orders.price}</p>
                        <p>{orders.processState}</p>
                        <div className="refl">
                          <div className="itme-bt">
                            {orders.reviewFl === 0 ? (
                              <button
                                onClick={() =>
                                  iorderNavi(`/reviewadd/${orders.iproduct}`)
                                }
                              >
                                리뷰작성
                              </button>
                            ) : (
                              <div
                                className="itme-bt"
                                style={{ width: "100px" }}
                              >
                                {/* 빈 요소, 아무 내용이 없으므로 공백이나 다른 텍스트가 들어가도 좋습니다. */}
                              </div>
                            )}

                            {makeStateBt(orders)}
                          </div>
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
        <PagiWarp>
          <Pagination
            // current={currentPage}
            // onChange={handlePageChange}
            total={orderData.length}
            // pageSize={itemsPerPage}
            className="pagination"
          />
        </PagiWarp>
      </div>
    </OrderViewStyle>
  );
};

export default OrderView;
