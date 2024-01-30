import React, { useState } from "react";
import { StyledButton } from "../../styles/mainstyle";
import useCustomLogin from "../../hooks/useCustomLogin";

const MainHeartBt = likeProduct => {
  const [isHeartChecked, setHeartChecked] = useState(
    likeProduct.likeProduct === 1,
  );

  const handleHeartButtonClick = () => {
    const newValue = !isHeartChecked ? 1 : 0;
    setHeartChecked(!isHeartChecked);
    console.log(newValue);
  };

  // 로그인 유무 따져서 버튼 클릭 시 로그인 이동 모달창 또는 on/off 넣기
  const { isLogin } = useCustomLogin;

  return (
    <StyledButton checked={isHeartChecked} onClick={handleHeartButtonClick}>
      <img
        src={
          isHeartChecked
            ? process.env.PUBLIC_URL + "/assets/images/heart.svg"
            : process.env.PUBLIC_URL + "/assets/images/heartoff.svg"
        }
        alt="heart"
        className="heart-icon"
      />
    </StyledButton>
  );
};

export default MainHeartBt;
