import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const BasicFooter = () => {
  const Footerwrap = styled.div`
    .foot-head {
      height: 70px;
      border-top: 2px solid #d68000;
      border-bottom: 1px solid #c5c5c5;
    }
    .inwrap {
      position: relative;
      max-width: 1280px;
      height: 100%;
      /* height: 30px; */
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .foot-company {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #949494;
    }

    .foot-company li {
      float: left;
      margin-right: 8px;
    }
    .foot-company li::after {
      content: "|";
      margin-left: 8px;
      color: #e9e9e9;
    }
    .foot-company li:last-child::after {
      content: "";
    }

    .foot-sns {
      display: flex;
      align-items: center;
      gap: 26px;
    }

    .foot-body {
      /* background-color: #ffe2b6; */
      /* padding-top: 50px; */
      /* padding-bottom: 50px; */
      border-bottom: 1px solid #c5c5c5;
    }
    .inwrap-main {
      position: relative;
      max-width: 1280px;
      height: 100%;
      margin: 0 auto;
      display: flex;
    }
    .cs-center {
      position: relative;
      background-color: white;
      padding-right: 80px;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .cs-top {
      display: flex;
    }

    .bold-font {
      font-size: 30px;
      font-weight: 700;
      color: #868686;
    }
    .phone {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 23px;
      color: #868686;
    }
    .runtime {
      font-size: 17px;
      font-weight: 400;
      color: #949494;
      margin-bottom: 47px;
    }
    .cs-img {
      margin-left: 68px;
      width: 168px;
    }
    .cs-center a {
      display: inline-flex;
      height: 60px;
      /* width: 130px; */
      padding: 23px 54px;
      justify-content: center;
      align-items: center;
      /* gap: 10px; */
      flex-shrink: 0;
      border: 1px solid #e9e9e9;
      margin-right: 10px;
    }
    .cs-nav {
      background: #e9b25f;
      border: none;
      color: #fff;
    }
    .menu {
      width: 321px;
      padding-left: 80px;
      padding-top: 50px;
      /* margin-left: 80px; */
      border-left: 1px solid #d9d9d9;
      border-right: 1px solid #d9d9d9;
    }
    .r-font {
      color: #575757;
      font-size: 20px;
      font-weight: 500;
      padding-bottom: 20px;
    }
    .menu a {
      color: #868686;
      font-size: 15px;
      font-weight: 500;
    }
    .menu li {
      padding-bottom: 20px;
    }
    .return {
      color: #868686;
      font-size: 15px;
      font-weight: 500;
      padding-left: 80px;
      padding-top: 50px;
    }
    .foot-info {
      padding: 40px 0;
    }
    .foot-info p {
      font-size: 12px;
    }
  `;
  return (
    <Footerwrap>
      <div className="foot-head">
        <div className="inwrap">
          <ul className="foot-company">
            <li>
              <Link to="">회사소개</Link>
            </li>
            <li>
              <Link to="">이용약관</Link>
            </li>
            <li>
              <Link to="">개인정보지침관리</Link>
            </li>
            <li>
              <Link to="">쇼핑몰 이용안내</Link>
            </li>
          </ul>

          <ul className="foot-sns">
            <li>
              <Link to="">
                <img src="/images/insta.svg" alt="" />
              </Link>
            </li>

            <li>
              <Link to="">
                <img src="/images/youtube.svg" alt="" />
              </Link>
            </li>

            <li>
              <Link to="">
                <img src="/images/clip.svg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot-body">
        <div className="inwrap-main">
          <div className="cs-center">
            <div className="cs-top">
              <div>
                <p className="bold-font">고객 센터</p>
                <p className="phone">053)572-1005</p>
                <p className="runtime">
                  평일 : 10:00 ~ 17:00
                  <br />
                  점심 : 12:00 ~ 14:00 <br />
                  공휴일 및 토.일요일 휴무
                </p>
              </div>
              <div className="cs-img">
                <img src="/images/cs-call.svg" />
              </div>
            </div>

            <Link to="/" className="cs-nav">
              고객센터 바로가기
            </Link>
            <Link to="/">커뮤니티 바로가기</Link>
          </div>

          <div className="menu">
            <p className="r-font">메뉴</p>
            <ul>
              <li>
                <Link to="/">마이페이지</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">주문조회</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">장바구니</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">커뮤니티</Link>
              </li>
            </ul>
          </div>
          <div className="return">
            <p className="r-font">교환 및 반품</p>
            <p>
              보내실 주소
              <br />
              대구광역시 중구 중앙대로 394, 제일빌딩 5F
            </p>
          </div>
        </div>
      </div>
      <div className="foot-info">
        <div className="inwrap">
          <p>
            상호명 (주)나나빛 대표 김주영 대표전화 053)572-1005
            개인정보관리책임자 아무개(amugae@gmail.com)
            <br />
            주소 (41937) 대구광역시 중구 중앙대로 394, 제일빌딩 5F 나나빛
            <br />
            사업자등록번호 123-45-67891 [사업자정보확인] 통신판매업신고
            0000-대구중구-0000
          </p>
          <p>COPYRIGHT @ 나나빛 브랜드 공식몰 ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </Footerwrap>
  );
};

export default BasicFooter;
