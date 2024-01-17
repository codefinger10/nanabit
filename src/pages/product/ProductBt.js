import React, { useState } from "react";
import CommunityTitle from "../../components/basic/CommunityTitle";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";

const ProductBt = () => {
  const MealBt = styled.button`
    border: 1px solid ${props => (props.active ? "#e9b25f" : "#d9d9d9")};
    background: #fff;
    color: ${props => (props.active ? "#e9b25f" : "#bababa")};
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 25%;
    height: 75px;
    cursor: pointer;
    margin-bottom: 50px;
  `;
  const { id } = useParams();
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  const todays = new Date();
  const day = todays.getDate();
  const month = todays.getMonth() + 1;
  const year = todays.getFullYear();
  const today = `${year}.${month}.${day}`;

  const handleNotice = id => {
    navigate(`../product/${id}`);
  };

  let maintxt = "이유식";
  let subtxt = "배송 및 상품관련 공지사항을 확인해 주세요.";

  if (id === "2") {
    maintxt = "신생아 (1~3개월)";
    subtxt = "소통과 관련된 내용을 확인해 주세요.";
  } else if (id === "3") {
    maintxt = "베이비 (4~23개월)";
    subtxt = "문의사항이 있으면 언제든지 문의해 주세요.";
  } else if (id === "4") {
    maintxt = "키즈(24개월~)";
    subtxt = "문의사항이 있으면 언제든지 문의해 주세요.";
  }

  return (
    <div>
      <CommunityTitle maintxt={maintxt} subtxt={subtxt} />
      <MealBt>임신/출산 (~0개월)</MealBt>
      <MealBt>신생아 (1~3개월)</MealBt>
      <MealBt>베이비 (4~23개월)</MealBt>
      <MealBt>키즈(24개월~)</MealBt>
    </div>
  );
};

export default ProductBt;
