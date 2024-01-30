import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DefaultButton from "../../../components/basic/DefaultButton";
import { NoticeBoard } from "../styles/commStyle";

const CommuEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/commu");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <NoticeBoard>
        <div className="wrap">
          <div className="aaa">
            <span>제목</span>
            <input type="text" />
          </div>
          <div className="bbb">
            <span>작성자</span>
            <input type="text" />
          </div>
        </div>
        <textarea />
        <div className="wrap-footer">
          <p>작성일:</p>
          <div className="bts">
            <DefaultButton
              aa={handleBack}
              type="button"
              txt="뒤로가기"
              txtColor="#868686"
              borderColor="#868686"
            />
            <DefaultButton
              aa={handleUpdate}
              type="button"
              txt="수정하기"
              txtColor="#42B0FF"
              borderColor="#42B0FF"
            />
            <DefaultButton
              type="button"
              txt="삭제하기"
              txtColor="#FF4E4E"
              borderColor="#FF4E4E"
            />
          </div>
        </div>
      </NoticeBoard>
    </>
  );
};

export default CommuEdit;
