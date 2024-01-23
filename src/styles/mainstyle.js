import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TextArea = styled.div`
  text-align: center;
  height: 150px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 40px;
  span {
    font-size: 20px;
    color: #595959;
  }
  i {
    font-size: 40px;
    color: #d68000;
    font-weight: 800;
    font-style: normal;
  }
`;
export const RcSwiperWrap = styled.div`
  align-items: center;
  display: flex;
  width: 1190px;
  margin: 0 auto;
  .rcswiper-one-group {
    width: 230px !important;
  }
  .slide-next-bt {
    background-image: url("/assets/images/slidenextbt.svg");
  }
  .slide-prev-bt {
    background-image: url("/assets/images/slideprevbt.svg");
  }
`;
export const SwiperOneGroup = styled.div`
  width: 230px;
`;

export const ItemPacket = styled.div`
  width: 230px;
  height: 330px;
`;
export const ItemImg = styled.div`
  width: 230px;
  height: 230px;
  img {
    object-fit: cover;
    width: 230px;
    height: 230px;
  }
`;

export const ItemDecArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  margin-top: 8px;
`;

export const ItemTagBoxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ReviewWish = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 5px;
  text-align: center;
  font-size: 15px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;
export const StyledLabel = styled.label`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemTitlePrice = styled.div`
  width: 230px;
  margin-top: 5px;
  text-align: start;
  p {
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    color: #595959;
    line-height: 20px;
  }
  b {
    font-size: 30px;
    line-height: 30px;
    margin-top: 5px;
  }
`;
