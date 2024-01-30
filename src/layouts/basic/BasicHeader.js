import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicMenu from "../../components/basic/BasicMenu";
import useCustomLogin from "../../hooks/useCustomLogin";
import { logout } from "../../slices/loginSlice";
import { HeaderNav } from "../../styles/basicLay/basicHeaderStyle";

const BasicHeader = () => {
  // const loginState = useSelector(state => state.loginSlice);

  const { isLogin, loginState, doLogout, moveToPath } = useCustomLogin();
  // const { logout } = loginSlice();

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

  const handleClick = () => {
    doLogout();
    moveToPath("/");
  };

  useEffect(() => {}, [isLogin.nm]);

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
                {loginState.nm ? (
                  <button onClick={() => handleClick()}>로그아웃</button>
                ) : (
                  <a href="/login">로그인</a>
                )}
              </div>
              {/* ------------------ */}

              <div>
                {loginState.nm ? (
                  <a href="/mypage">마이페이지</a>
                ) : (
                  <a href="/signUp">회원가입</a>
                )}
              </div>
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
