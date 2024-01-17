import styled from "styled-components";

export const Heart = styled.label`
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
