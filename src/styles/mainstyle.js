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
  width: 100%;
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
  gap: 8px;
  text-align: center;
  font-size: 15px;
`;
export const StyledLabel = styled.label`
  width: 14px;
  height: 14px;
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 0;

  img {
    max-width: 100%;
    max-height: 100%;
    transition: opacity 0.3s ease-in-out;
    display: block;
    opacity: ${props => (props.isChecked ? 1 : 0)};
  }

  &:hover img {
    cursor: pointer;
    opacity: 1;
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
