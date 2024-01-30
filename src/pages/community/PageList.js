import React, { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { getPage } from "../../api/community/communityApi";
import { Pagenation } from "./styles/commStyle";

const PageList = () => {
  const initState = {
    start: 0,
    end: 0,
    realEnd: 0,
    prev: false,
    next: false,
    page: 0,
    amount: 0,
    total: 0,
    pageCnt: 0,
    criteria: {
      boardCode: 0,
      page: 0,
      amount: 0,
      keyword: null,
      pageStart: 0,
    },
  };

  const [pagenation, setPagenation] = useState(initState);
  const { moveToListPahe, board_code, page } = useCustomMove();
  useEffect(() => {
    getPage({ board_code, page })
      .then(res => {
        setPagenation(res);
      })
      .catch(error => {
        console.log("에러", error);
        alert("데이터 호출에 실패하였습니다.");
      });
  }, [page]);
  return (
    <Pagenation>
      {/* 이전버튼 */}
      {pagenation.prev ? (
        <button className="bt-move" onClick={() => moveToListPahe({ page: 1 })}>
          이전
        </button>
      ) : null}
      {/* 페이지 이동번호 */}
      {Array.from({ length: pagenation.pageCnt }, (_, index) => (
        <button
          className="bt-num"
          key={index + 1}
          onClick={() => {
            moveToListPahe({ page: index + 1 });
          }}
        >
          {index + 1}
        </button>
      ))}
      {/* 다음버튼 */}
      {pagenation.next ? (
        <button className="bt-move" onClick={() => moveToListPahe({ page: 6 })}>
          다음
        </button>
      ) : null}
    </Pagenation>
  );
};

export default PageList;
