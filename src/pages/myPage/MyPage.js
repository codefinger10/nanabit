import React from "react";
import UserInfoBt from "../../components/userinfo/UserInfoBt";
import {
  InfoBt,
  InfoBtWrap,
  InfoHead,
  InfoMain,
  InfoWrap,
  MyPageHeader,
  MyPageWrap,
  ProductWrap,
} from "../../styles/mypage/mypagestyle";
import useCustomLogin from "../../hooks/useCustomLogin";

const MyPage = () => {
  const { moveToPath } = useCustomLogin();

  const handleClickAddress = e => {
    moveToPath("/address");
  };
  return (
    <MyPageWrap>
      <MyPageHeader>
        <h2>My-Page</h2>
      </MyPageHeader>
      <UserInfoBt handleClickAddress={handleClickAddress}></UserInfoBt>
      <InfoHead>
        <InfoWrap>
          <InfoMain>
            <div>
              입금전
              <h2>0</h2>
            </div>
            <div>
              배송준비중
              <h2>0</h2>
            </div>
            <div>
              배송중
              <h2>0</h2>
            </div>
            <div>
              배송완료
              <h2>0</h2>
            </div>
          </InfoMain>
        </InfoWrap>
      </InfoHead>
      <InfoBtWrap>
        <InfoBt>내가 작성한 리뷰</InfoBt>
        <InfoBt>주문내역 조회하기</InfoBt>
      </InfoBtWrap>
      <ProductWrap>
        <h2>Wish-List</h2>
        <h3>*찜은 최대 12개까지만 가능합니다</h3>
      </ProductWrap>
      <div></div>
    </MyPageWrap>
  );
};

export default MyPage;
