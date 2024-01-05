import React from "react";
import CommunityTitle from "../components/CommunityTitle";
import DefaultButton from "../components/DefaultButton";

const CsReadPage = () => {
  return (
    <>
      <div>
        <CommunityTitle
          maintxt="1 : 1 문 의"
          subtxt="배송 및 상품관련 공지사항을 확인해 주세요."
        />
        <CommunityTitle
          maintxt="소 통 해 요"
          subtxt="육아하며 습득한 꿀팁들을 공유해 주세요."
        />
        <CommunityTitle
          maintxt="공 지 사 항"
          subtxt="배송 및 상품관련 공지사항을 확인해 주세요."
        />
        <DefaultButton txt="뒤로가기" txtColor="gray" borderColor="gray" />
        <DefaultButton
          txt="수정하기"
          txtColor="#42B0FF"
          borderColor="#42B0FF"
        />
        <DefaultButton
          txt="삭제하기"
          txtColor="#FF4E4E"
          borderColor="#FF4E4E"
        />
      </div>
    </>
  );
};

export default CsReadPage;
