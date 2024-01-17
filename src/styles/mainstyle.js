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
  height: 350px;
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
  margin-top: 13px;
`;

export const ItemTagBoxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ReviewWish = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  text-align: center;
  font-size: 15px;
  margin-right: 0;
  margin-top: auto;
`;
export const StyledLabel = styled.label`
  width: 14px;
  height: 14px;
  display: inline-block;
  position: relative;
  margin: auto;
  padding: 0;
  font-size: 0;
  transform: translate(-50%, -50%) img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    transition: opacity 0.3s ease-in-out;
    display: block;
    opacity: ${props => (props.isChecked ? 1 : 0)};
  }

  &:hover img {
    cursor: pointer;
    opacity: 1;
    margin: 0 auto;
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/images/heart.svg");
    background-repeat: no-repeat;
    background-size: contain;
    opacity: ${props => (props.isChecked || props.isHovered ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
    margin: 0 auto;
  }
`;
export const ItemTitlePrice = styled.div`
  width: 230px;
  margin-top: 3px;
  span {
    display: block;
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
    line-height: 10px;
  }
`;
