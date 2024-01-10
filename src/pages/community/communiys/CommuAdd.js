import React from "react";
import DefaultButton from "../../../components/DefaultButton";
import { useNavigate } from "react-router";
import CommunityTitle from "../../../components/CommunityTitle";
import { NoticeBoard } from "../styles/commNotice";

const CommuAdd = () => {
  const navigate = useNavigate();

  const handleClika = () => {
    navigate("../notice");
  };

  return (
    <>
      <CommunityTitle
        maintxt="1:1문의"
        subtxt="배송 및 상품관련 공지사항을 확인해 주세요."
      />
      <NoticeBoard>
        <div className="wrap">
          <div className="aaa">
            <span>제목</span>
            <input type="text" placeholder="제목입니다람쥐" />
          </div>
          <div className="bbb">
            <span>작성자</span>
            <input type="text" placeholder="내가 작성자" />
          </div>
        </div>
        <textarea />
        <div className="bts">
          <DefaultButton
            aa={handleClika}
            type="button"
            txt="뒤로가기"
            txtColor="#868686"
            borderColor="#868686"
          />
          <DefaultButton
            type="Submit"
            txt="등록하기"
            txtColor="#42B0FF"
            borderColor="#42B0FF"
          />
        </div>
      </NoticeBoard>
    </>
  );
};

export default CommuAdd;
