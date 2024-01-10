import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { Input, Space } from "antd";
import Search from "antd/es/input/Search";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message } from "antd";
import { HeaderNav } from "../../styles/basicLay/basicHeaderStyle";

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
        임신/출산 (~0개월)
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        신생아 (1~3개월)
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        베이비 (4~23개월)
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        키즈(24개월~)
      </Link>
    ),
    key: "3",
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

const items3 = [
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        놀이
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="_blank" rel="noopener noreferrer">
        용품
      </Link>
    ),
    key: "1",
  },
];
const items4 = [
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        위생
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="_blank" rel="noopener noreferrer">
        목욕용품
      </Link>
    ),
    key: "1",
  },
];
const items5 = [
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        이유식
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="_blank" rel="noopener noreferrer">
        수유용품
      </Link>
    ),
    key: "1",
  },
];
const community6 = [
  {
    label: (
      <Link to="/commu" target="" rel="noopener noreferrer">
        공지사항
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/commu" target="" rel="noopener noreferrer">
        소통해요
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/commu" target="" rel="noopener noreferrer">
        1대1 문의
      </Link>
    ),
    key: "2",
  },
];
const BasicHeader = () => {
  return (
    <HeaderNav>
      <div className="heder-top">
        <div className="heder-inwrap">
          <div className="header-top-left">
            <ul>
              <Link to="/main">
                <img
                  className="logo"
                  src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
                ></img>
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
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/signUp">회원가입</Link>
              </li>
              <li>
                <Link to="/commu">
                  <img src={process.env.PUBLIC_URL + "/assets/images/cs.svg"} />
                </Link>
              </li>
              <li>
                <Link to="/ol">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/truck.svg"}
                  />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/cart.svg"}
                  />
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
                items: items3,
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
                items: items4,
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
                items: items5,
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
                items: community6,
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
