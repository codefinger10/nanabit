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
  return (
    <HeaderNav>
      <div className="heder-top">
        <div className="heder-inwrap">
          <div className="header-top-left">
            <ul>
              <Link to="/">
                <img className="logo" src="/assets/images/logo.svg"></img>
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
                  <img src="/assets/images/cs.svg" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="/assets/images/truck.svg" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="/assets/images/cart.svg" />
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
