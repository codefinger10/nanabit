import { Dropdown, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { HeaderNav } from "../../styles/basicLay/basicHeaderStyle";
import BasicMenu from "../../components/basic/BasicMenu";
import { useSelector } from "react-redux";

const BasicHeader = () => {
  const loginState = useSelector(state => state.loginSlice);
  // console.log(loginState);
  return (
    <HeaderNav>
      <div className="heder-top">
        <div className="heder-inwrap">
          <div className="header-top-left">
            <ul>
              <Link to="/">
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
              {/* <li> */}
              {/* <Link to="/login">로그인</Link> */}
              {/* </li> */}
              {/* -------------로그인----- */}

              <div>
                {loginState.username ? (
                  <Link to="/logout">로그아웃</Link>
                ) : (
                  <Link to="/login">로그인</Link>
                )}
              </div>
              {/* ------------------ */}
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
          <BasicMenu />
        </div>
      </div>
    </HeaderNav>
  );
};

export default BasicHeader;
