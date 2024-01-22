import styled from "@emotion/styled";

export const SearchBt = styled.button`
  /* border: 1px solid ${props => (props.active ? "#e9b25f" : "#d9d9d9")}; */
  background: transparent;
  border: none;
  background: ${props => (props.active ? "#FFE2B6" : "none")};
  /* color: ${props => (props.active ? "#ffffff" : "#bababa")}; */
  color: ${props => (props.active ? "#000000" : "#868686")};
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: normal;

  width: 110px;
  height: 30px;
  border-radius: 35px;
  cursor: pointer;
  margin-right: 20px;
  /* margin-bottom: 50px; */
`;

export const SearchWrap = styled.div`
  position: relative;
  display: flex;
  /* width: 100%; */
  /* height: 100%; */
  /* margin: 0 auto; */
  max-width: 1280px;
  margin: 0 auto;
  /* background-color: aqua; */

  .srech-init {
    height: 100%;
    position: relative;
    /* background-color: pink; */
    margin: 0 auto;
  }

  h1 {
    padding-right: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    width: 150px;
  }

  .cateBt {
    /* margin-top: 70px; */
    /* background-color: red; */
    display: flex;
    height: 100%;
  }

  .input-cate {
    margin-top: 15px;
    /* margin-bottom: 20px; */
    /* width: 100%; */

    display: flex;
    align-items: center;
    margin-bottom: 20px;
    /* height: 50px; */
    /* background-color: aqua; */
  }
  .input-price {
    border-bottom: 1px solid #000000;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .input-price input {
    height: 30px;
    /* margin-right: 30px; */
  }
  .input-price p {
    font-size: 25px;
  }

  .input-serch {
    display: flex;
  }
`;
