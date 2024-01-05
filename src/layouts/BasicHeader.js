import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { Input, Space } from "antd";
import Search from "antd/es/input/Search";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message } from "antd";

const items = [
  {
    label: (
      <Link to="/" rel="noopener noreferrer">
        1st menu item
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link
        to="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        2nd menu item
      </Link>
    ),
    key: "1",
  },
];

const items1 = [
  {
    label: (
      <Link to="https://www.aliyun.com" rel="noopener noreferrer">
        1개월
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="_blank" rel="noopener noreferrer">
        2개월
      </Link>
    ),
    key: "1",
  },
];

const items2 = [
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        유아
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="_blank" rel="noopener noreferrer">
        가전
      </Link>
    ),
    key: "1",
  },
];

const BasicHeader = () => {
  const HeaderNav = styled.div`
    .inwrap {
      position: relative;
      max-width: 1280px;
      margin: 0 auto;
    }
    .heder-inwrap {
      position: relative;
      display: flex;
      width: 90%;
      height: 150px;
      margin: 0 auto;

      align-items: center;
      justify-content: space-between;
    }
    .header-top-left {
      position: relative;
      height: 50px;
      display: flex;
      align-items: center; /* 세로정렬 */
      justify-content: space-between; /* 여백을 중앙으로 */
    }
    .logo {
      width: 300px;
    }

    /* 상품검색 */

    .header-search {
      position: relative;
      width: 350px;
      height: 50px;
      display: flex;
      align-items: center;
      padding-right: 10px;
      padding-left: 23px;
      border-radius: 25px;
      border: 1px solid #ffe2b6;
      margin-left: 20px;
    }
    .search-form {
      position: relative;
      width: 100%;
      display: flex;
      /* justify-content: space-between; */
      color: #ffe2b6;
    }
    .search-form input::placeholder {
      color: #ffe2b6;
    }
    .search-word {
      position: relative;
      width: 100%;
      border: none;
      font-size: 1.6rem; /* 1.6*(html폰트사이즈 ) */
      font-weight: 700;
      color: #ffe2b6;
    }
    .search-bt {
      position: relative;
      width: 45px;
      height: 45px;
      border: none;
      background-color: transparent;
      background-image: url("/images/btn_search.svg");
      background-repeat: no-repeat;
      background-position: center;
      font-size: 0;
      cursor: pointer;
    }

    .header-top-right {
      position: relative;
      display: flex;
      height: 50px;
      align-items: center;
    }

    .member-menu {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .member-menu li {
      position: relative;
      padding-left: 30px;
    }
    .member-menu li a {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 500;
      cursor: pointer;
    }

    .head-menu {
      position: relative;
      /* display: flex; */
      justify-content: space-between;
      padding: 17px;
      /* border: 1px solid #ffe2b6; */
      border-top: 1px solid #ffe2b6;
      border-bottom: 1px solid #ffe2b6;
      align-items: center;
    }
    .head-drop {
      position: relative;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      cursor: pointer;
    }
  `;
  return (
    <HeaderNav>
      <div className="heder-top">
        <div className="heder-inwrap">
          <div className="header-top-left">
            <ul>
              <Link to="/">
                <img className="logo" src="/images/logo.svg"></img>
              </Link>
            </ul>
            <div className="header-search">
              <form className="search-form">
                <input
                  type="text"
                  placeholder="세상에 밝고 빛나는 아이가 태어나다"
                  className="search-word"
                />
                <input type="button" className="search-bt" />
              </form>
            </div>
          </div>

          <div className="header-top-right">
            <ul className="member-menu">
              <li>
                <Link to="/">로그인</Link>
              </li>
              <li>
                <Link to="/">회원가입</Link>
              </li>
              <li>
                <Link to="/">
                  <img src="/images/cs.svg" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="/images/truck.svg" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="/images/cart.svg" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="head-menu">
        <div className="inwrap">
          <ul className="head-drop">
            <Dropdown
              menu={{
                items: items1,
              }}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  월령별
                  {/* <DownOutlined /> */}
                </Space>
              </a>
            </Dropdown>

            <Dropdown
              menu={{
                items: items2,
              }}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  유아가전
                  {/* <DownOutlined /> */}
                </Space>
              </a>
            </Dropdown>

            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  놀이용품
                  {/* <DownOutlined /> */}
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  위생/ 목욕용품
                  {/* <DownOutlined /> */}
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  이유식/ 수유용품
                  {/* <DownOutlined /> */}
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  커뮤니티
                  {/* <DownOutlined /> */}
                </Space>
              </a>
            </Dropdown>
          </ul>
        </div>
      </div>
    </HeaderNav>
  );
};

export default BasicHeader;
