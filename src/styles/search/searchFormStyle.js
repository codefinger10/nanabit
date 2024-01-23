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
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center; /* 수평 중앙 정렬을 위해 추가 */
  align-items: center;
  /* background-color: aqua; */
  padding-top: 66px;

  /* border: 1px solid #868686; */
  .border-word {
    position: relative;
    /* width: 1280px; */
    /* padding: 50px; */
  }
  .srech-init {
    justify-content: center; /* 수평 중앙 정렬을 위해 추가 */
    align-items: center;
    /* width: 1280px; */
    width: 1280%;
    height: 100%;
    position: relative;
    margin: 0 auto;
    border: 1px solid #868686;
    padding: 30px 100px 30px 100px;
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
    display: flex;
    height: 100%;
  }

  .input-cate {
    margin-top: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .input-price {
    border-bottom: 1px solid #868686;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .input-price input {
    height: 30px;
  }
  .input-price p {
    font-size: 25px;
  }

  .input-search {
    display: flex;
    align-items: center;
  }
`;

export const SearchWrapf = styled.div`
  position: relative;
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  .srech-initf {
    width: 1280px;
    margin: 0 auto;
  }
`;
