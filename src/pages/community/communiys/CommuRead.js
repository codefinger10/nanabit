import React, { useEffect, useState } from "react";
import DefaultButton from "../../../components/DefaultButton";
import { useNavigate, useParams } from "react-router";
import CommunityTitle from "../../../components/CommunityTitle";
import { NoticeBoard } from "../styles/commNotice";
import Asd from "./Asd";

const CommuRead = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fakeData = {
      title: "나나빛!@!@!@@@!@",
      author: "주영",
      content: "언제 배송되나요?",
    };

    setPost(fakeData);
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    // 수정 페이지로 이동하는 로직
    navigate(`/commu/edit/${id}`);
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
            <input type="text" value={post.title} readOnly />
          </div>
          <div className="bbb">
            <span>작성자</span>
            <input type="text" value={post.author} readOnly />
          </div>
        </div>
        <textarea value={post.content} readOnly />
        <div className="bts">
          <DefaultButton
            aa={handleGoBack}
            type="button"
            txt="뒤로가기"
            txtColor="#868686"
            borderColor="#868686"
          />
          <DefaultButton
            aa={handleEdit}
            type="button"
            txt="수정하기"
            txtColor="#42B0FF"
            borderColor="#42B0FF"
          />
        </div>
        <Asd />
      </NoticeBoard>
    </>
  );
};

export default CommuRead;
