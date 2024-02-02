import React, { useState } from "react";
import { putWish } from "../../api/mainpage/mainPageApi";
import useCustomLogin from "../../hooks/useCustomLogin";
import { StyledButton } from "../../styles/mainstyle";

const MainHeartBt = ({ item }) => {
  const [isHeartChecked, setHeartChecked] = useState(item.likeProduct === 1);

  const handleHeartButtonClick = async () => {
    const newValue = !isHeartChecked ? 1 : 0;
    setHeartChecked(!isHeartChecked);
    console.log("제품 pk값 내놔 : ", item.iproduct);

    console.log(newValue);

    try {
      // api.js에 정의된 updateLike 함수를 사용하여 서버에 데이터를 업데이트
      const response = await putWish({
        iproduct: item.iproduct,
        successFn,
        failFn,
        errorFn,
      });

      console.log("putWish 함수에서 받은 응답:", response);

      if (response !== undefined) {
        console.log("하트업데이트 성공!", item.iproduct, response);
      } else {
        console.error("putWish 함수에서 응답이 없습니다.");
      }
    } catch (error) {
      console.error("하트업데이트 초오비사아아아앙", error);
    }
  };

  const successFn = result => {
    console.log(result);
  };
  const failFn = result => {
    console.log("하트 업데이트 실패: ", result);
  };
  const errorFn = result => {
    console.log("하트 업데이트 에러: ", result);
  };

  // 로그인 유무 따져서 버튼 클릭 시 로그인 이동 모달창 또는 on/off 넣기
  const { isLogin } = useCustomLogin();
  // console.log("제품 찜 상태 : ", item.likeProduct);
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
