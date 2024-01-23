import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { CommuMain } from "../styles/commStyle";
import { Link } from "react-router-dom";
import CommunityTitle from "../../../components/basic/CommunityTitle";
import { CommuBt } from "../styles/commStyle";

const initState = {
  iboard: 0,
  boardCode: 0,
  title: "",
  createdAt: "",
};

const NoticePage = () => {
  const [tableData, setTableData] = useState([initState]);

  useEffect(() => {}, []);

  let asdasd = "";

  let maintxt = "공지사항";
  let subtxt = "배송 및 상품관련 공지사항을 확인해 주세요.";
  // asdasd = "작성자";
  // if (id === "2") {
  //   maintxt = "소통해요";
  //   subtxt = "소통과 관련된 내용을 확인해 주세요.";
  //   asdasd = "분류";
  // } else if (id === "3") {
  //   maintxt = "1:1 문의";
  //   subtxt = "문의사항이 있으면 언제든지 문의해 주세요.";
  //   asdasd = "답변상태";
  // }

  return (
    <>
      <CommuMain>
        <CommunityTitle maintxt={maintxt} subtxt={subtxt} />
        <CommuBt>공지사항</CommuBt>
        <CommuBt>소통해요</CommuBt>
        <CommuBt>1:1 문의</CommuBt>
        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">제목</th>
                <th scope="col">작성자</th>
                <th scope="col">작성일</th>
              </tr>
            </thead>
            {tableData.map(item => (
              <tbody key={item.iboard}>
                <tr>
                  <td>{item.iboard}</td>
                  <td className="td-docs">
                    <Link to={`/commu/read/`} style={{ color: "#868686" }}>
                      {item.title}
                    </Link>
                  </td>
                  <td>{item.iboard}</td>
                  <td>{item.createdAt}</td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="serch">
            <form>
              <input type="text" placeholder="검색할 제목을 입력하세요." />
              <button type="button" className="search-button">
                SEARCH
              </button>
            </form>
            <Link to="/commu/add">
              <button className="write-bt">작성하기</button>
            </Link>
          </div>
        </div>
        <Pagination defaultCurrent={1} pageSize={15} className="pagination" />
      </CommuMain>
    </>
  );
};

export default NoticePage;
