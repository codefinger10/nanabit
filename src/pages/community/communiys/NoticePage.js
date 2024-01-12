import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { CommuMain } from "../styles/commStyle";
import { Link, useNavigate, useParams } from "react-router-dom";
import CommunityTitle from "../../../components/basic/CommunityTitle";
import { CommuBt } from "../styles/commBtStyle";

const NoticePage = () => {
  const { id } = useParams();
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  const todays = new Date();
  const day = todays.getDate();
  const month = todays.getMonth() + 1;
  const year = todays.getFullYear();
  const today = `${year}.${month}.${day}`;

  useEffect(() => {
    if (id === "1") {
      const setId = () => {
        const dummyData = [];
        for (let i = 0; i < 5; i++) {
          dummyData.push({
            docs: `나나빛으로 육아를 시작해 보세요!`,
            name: "주영",
            data: today,
          });
        }
        setTableData(dummyData);
      };
      setId();
    } else if (id === "2") {
      const setId = () => {
        const dummyData = [];
        for (let i = 0; i < 10; i++) {
          dummyData.push({
            docs: `나나빛으로 육아를 하지마요...`,
            name: "이주영",
            data: today,
          });
        }
        setTableData(dummyData);
      };
      setId();
    } else {
      const setId = () => {
        const dummyData = [];
        for (let i = 0; i < 15; i++) {
          dummyData.push({
            docs: `나나빛으로 육아를?? `,
            name: "김주영",
            data: today,
          });
        }
        setTableData(dummyData);
      };
      setId();
    }
  }, [id]);

  const handleNotice = id => {
    navigate(`../notice/${id}`);
  };
  let maintxt = "공지사항";
  let subtxt = "배송 및 상품관련 공지사항을 확인해 주세요.";

  if (id === "2") {
    maintxt = "소통해요";
    subtxt = "소통과 관련된 내용을 확인해 주세요.";
  } else if (id === "3") {
    maintxt = "1:1 문의";
    subtxt = "문의사항이 있으면 언제든지 문의해 주세요.";
  }

  return (
    <>
      <CommuMain>
        <CommunityTitle maintxt={maintxt} subtxt={subtxt} />
        <CommuBt onClick={() => handleNotice(1)} active={id === "1"}>
          공지사항
        </CommuBt>
        <CommuBt onClick={() => handleNotice(2)} active={id === "2"}>
          소통해요
        </CommuBt>
        <CommuBt onClick={() => handleNotice(3)} active={id === "3"}>
          1:1 문의
        </CommuBt>
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
            {tableData.map((item, idx) => (
              <tbody key={idx}>
                <tr>
                  <td>{idx + 1}</td>
                  <td className="td-docs">
                    <Link
                      to={`/commu/read/${idx}`}
                      style={{ color: "#868686" }}
                    >
                      {item.docs}
                    </Link>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.data}</td>
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
        <Pagination
          defaultCurrent={1}
          total={tableData.length}
          pageSize={15}
          className="pagination"
        />
      </CommuMain>
    </>
  );
};

export default NoticePage;
