import React, { useEffect, useState } from "react";

import DefaultButton from "../../../components/basic/DefaultButton";
import styled from "@emotion/styled";
import { getList } from "../../../api/community/commentApi";

const initState = {
  icomment: 0,
  iuser: 0,
  nm: "",
  comment: "",
  createdAt: "",
};

const Comment = ({ id }) => {
  const [comment, setComment] = useState([initState]);
  const [openDropdown, setOpenDropdown] = useState(null);
  useEffect(() => {
    getList(id)
      .then(result => {
        setComment(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleModify = iuser => {
    console.log("수정", iuser);
    setOpenDropdown(null);
  };

  const handleDelete = iuser => {
    console.log("삭제", iuser);
    setOpenDropdown(null);
  };

  const CommentAdd = styled.div`
    width: 100%;
    height: 57px;
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    input {
      font-size: 2rem;
      border: 1px solid #000;
    }
  `;

  const CommentRead = styled.div`
    margin-bottom: 20px;
    .comment-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      align-items: center;
      position: relative;
      h3 {
        color: #868686;
        font-size: 20px;
        font-weight: 400;
        line-height: normal;
      }
      button {
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }

    .comment-bts {
      position: absolute;
      right: 0;
      top: 10%;
      background-color: #fff;

      li {
        padding: 8px;
        cursor: pointer;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
    .comment-mid {
      text-align: start;
      color: #595959;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .comment-bottom {
      color: #868686;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: start;
      margin-bottom: 10px;
    }
  `;

  return (
    <>
      <CommentAdd>
        <input type="text" />
        <DefaultButton
          type="button"
          txt="등록하기"
          txtColor="#42B0FF"
          borderColor="#42B0FF"
        />
      </CommentAdd>
      <CommentRead>
        {comment.map(item => (
          <div key={item.iuser}>
            <div className="comment-top">
              <h3>{item.nm}</h3>
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === item.iuser ? null : item.iuser,
                  )
                }
              >
                ...
              </button>
              {openDropdown === item.iuser && (
                <div className="comment-bts">
                  <ul>
                    <li onClick={() => handleModify(item.iuser)}>수정하기</li>
                    <li onClick={() => handleDelete(item.iuser)}>삭제하기</li>
                    <li onClick={() => setOpenDropdown(null)}>취소하기</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="comment-mid">{item.comment}</div>
            <div className="comment-bottom">{item.createdAt}</div>
          </div>
        ))}
      </CommentRead>
    </>
  );
};

export default Comment;
