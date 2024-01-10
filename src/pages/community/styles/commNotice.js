import styled from "@emotion/styled";

export const NoticeBoard = styled.form`
  .wrap {
    font-size: 1.8rem;
    color: #868686;
  }
  .aaa {
    display: flex;
    align-items: center;
    height: 40px;
    border-top: 1px solid #868686;
  }

  .bbb {
    display: flex;
    align-items: center;
    height: 40px;
    border-top: 1px solid #868686;
    margin-bottom: 30px;
    border-bottom: 1px solid #868686;
  }
  span {
    width: 20%;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    border-left: 1px solid #868686;
    padding-left: 20px;
  }

  textarea {
    width: 100%;
    height: 550px;
    resize: none;
    font-size: 2rem;
    margin-bottom: 15px;
    padding: 10px;
  }
  .bts {
    margin-bottom: 15px;
    display: flex;
    justify-content: end;
    gap: 15px;
  }
`;
