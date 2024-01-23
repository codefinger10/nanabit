import React from "react";
import DefaultButton from "../../../components/basic/DefaultButton";
import { useNavigate } from "react-router";
import CommunityTitle from "../../../components/basic/CommunityTitle";
import { NoticeBoard } from "../styles/commStyle";
import Reactquills from "../Reactquills";

const CommuAdd = () => {
  const navigate = useNavigate();

  const handleClika = () => {
    navigate(-1);
  };

  const todays = new Date();
  const day = todays.getDate();
  const month = todays.getMonth() + 1;
  const year = todays.getFullYear();
  const today = `${year}.${month}.${day}`;

  return (
    <>
      <CommunityTitle
        maintxt="1:1문의"
        subtxt="배송 및 상품관련 공지사항을 확인해 주세요."
      />
      <Reactquills />
    </>
  );
};

export default CommuAdd;
