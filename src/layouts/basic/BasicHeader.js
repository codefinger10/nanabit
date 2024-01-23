import { Dropdown, Space } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderNav } from "../../styles/basicLay/basicHeaderStyle";
import BasicMenu from "../../components/basic/BasicMenu";
import { useSelector } from "react-redux";

const BasicHeader = ({ onSearch }) => {
  // 검색어를 검색페이지에서 표시되도록
  const [searchTextInput, setSearchTextInput] = useState("");
  const handleSearchText = e => {
    setSearchTextInput(e.target.value);
  };
  const handleSearchClick = () => {
    onSearch(searchTextInput);
  };
  const loginState = useSelector(state => state.loginSlice);
  // console.log(loginState);
  return (
    <HeaderNav>
      <div className="heder-top">
        <div className="heder-inwrap">
          <div className="header-top-left">
            <ul>
              <a href="/">
                <img
                  className="logo"
                  src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
                ></img>
              </a>
            </ul>
            <div className="header-search">
              <form className="search-form">
                <input
                  type="text"
                  placeholder="세상에 밝고 빛나는 아이가 태어나다"
                  className="search-word"
                  onChange={handleSearchText}
                />
                <Link to="/cc">
                  <input
                    type="button"
                    className="search-bt"
                    onClick={handleSearchClick}
                  />
                </Link>
              </form>
            </div>
          </div>

          <div className="header-top-right">
            <ul className="member-menu">
              {/* <li> */}
              {/* <a to="/login">로그인</a> */}
              {/* </li> */}
              {/* -------------로그인----- */}

              <div>
                {loginState.username ? (
                  <a href="/logout">로그아웃</a>
                ) : (
                  <a href="/login">로그인</a>
                )}
              </div>
              {/* ------------------ */}
              <li>
                <a href="/signUp">회원가입</a>
              </li>
              <li>
                <a href="/commu">
                  <img src={process.env.PUBLIC_URL + "/assets/images/cs.svg"} />
                </a>
              </li>
              <li>
                <a href="/ol">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/truck.svg"}
                  />
                </a>
              </li>
              <li>
                <a href="/cart">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/cart.svg"}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="head-menu">
        <div className="inwrap">
          <BasicMenu />
        </div>
      </div>
    </HeaderNav>
  );
};

export default BasicHeader;
