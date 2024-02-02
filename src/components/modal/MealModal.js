import React from "react";

import styled from "@emotion/styled";
export const CloseButton = styled.span`
  font-size: 24px; /* 닫기 버튼의 폰트 크기를 조절합니다. */
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const MealModal = ({ closeModal }) => {
  const CloseButton = styled.span`
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1; /* Ensure the close button stays above other content */
  `;

  const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;

  const MealWrap = styled.div`
    width: 468px;
    height: 575px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    top: 50%;
    left: 50%;
    transform: translate(-50%, 10%);
    position: relative;
    z-index: 1000;
    display: block;
    /* position: fixed; */
  `;

  const BabyMealInfo = styled.div`
    width: 100%;
    height: 100%;
    padding: 33px;
    display: flex;
    flex-direction: column;
  `;

  const BaByMealTitle = styled.h2`
    color: #42b0ff;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 13px;
  `;

  const BabyMealMonth = styled.h3`
    color: #5f5f5f;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 17px;
  `;

  const BabyMealDesc = styled.p`
    color: #5f5f5f;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;

  return (
    <div>
      <MealWrap>
        <BabyMealInfo>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <BaByMealTitle>이유식</BaByMealTitle>
          <BabyMealMonth>
            - 1~4개월
            <br />- 5~6개월 (이유식 초기)
            <br /> - 7~8개월 (중기)
            <br />- 9~11개월 (후기)
            <br />- 12~24개월 (완료기와 일반식)
          </BabyMealMonth>
          <BabyMealDesc>
            영유아들이 젖을 떼고 고체 음식에 적응하기 위한 죽과 유사한 식품은
            부모들에게 큰 중요성을 갖어요.
            <br />
            <br />
            이 제품들은 안전성, 재료 선택, 제조 과정에 대한 부모들의 예민한
            관심을 받아요.
            <br />
            <br />
            특히 잘게 다지지 않은 재료가 사용되면 아기의 기도에 위험이 있을 수
            있으며, 이로 인한 알레르기 반응을 주의 깊게 살펴보아야 해요.
            <br />
            <br />
            만일 첫 섭취 시 가벼운 알레르기 반응이 나타난다면, 해당 음식을 3-4주
            후에 다시 시도하여 확인해보는 것이 좋아요.
            <br />
            <br />
            이러한 접근을 통해 초기 반응 여부를 판단하고, 계속해서 알레르 기
            반응이 나타나지 않는다면 그 음식은 아기에게 적합하다고 판단 할
            수있어요.
            <br />
          </BabyMealDesc>
        </BabyMealInfo>
      </MealWrap>
    </div>
  );
};

export default MealModal;
