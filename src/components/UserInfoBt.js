import React from "react";
import { UserInformBt } from "../styles/userinfobtstyle";

export const UserInfoBt = () => {
  return (
    <UserInformBt>
      <img src={process.env.PUBLIC_URL + "/assets/images/userInfo.svg"} />
      <div>
        <h2>
          저희 쇼핑몰을 이용해 주셔서 감사합니다 ??? 님은 [신입맘] 회원이십니다.
        </h2>

        <h2>0원이상 구매시 1.5%을 추가적립 받으실 수 있습니다.</h2>
      </div>
      <button>회원정보 수정하기</button>
    </UserInformBt>
  );
};

export default UserInfoBt;
