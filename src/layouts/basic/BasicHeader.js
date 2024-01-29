import { Dropdown, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderNav } from "../../styles/basicLay/basicHeaderStyle";
import BasicMenu from "../../components/basic/BasicMenu";
import { useSelector } from "react-redux";

const BasicHeader = () => {
  const loginState = useSelector(state => state.loginSlice);
  // console.log(loginState);

  // 검색어를 검색페이지에서 표시되도록
  const [searchTextInput, setSearchTextInput] = useState("");
  useEffect(() => {
    // console.log("검색어:", searchTextInput);
  }, [searchTextInput]);

  const navigate = useNavigate();
  const handleSearch = () => {
    console.log("검색버튼:", "검색 버튼 클릭", searchTextInput);
    // state :  { 이름 : 값 }
    navigate("/cc", { state: { searchTextInput: searchTextInput } });

    setSearchTextInput("");
  };
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
                  value={searchTextInput}
                  onChange={e => setSearchTextInput(e.target.value)}
                />
                {/* <Link to="/cc">
                  <input
                    type="button"
                    className="search-bt"
                    onClick={handleSearch}
                  />
                </Link> */}
                <input
                  type="button"
                  className="search-bt"
                  onClick={handleSearch}
                />
              </form>
            </div>
          </div>

          <div className="header-top-right">
            <ul className="member-menu">
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
