import styled from "@emotion/styled";

export const ModalWrap = styled.div`
  position: relative;
  display: block;
  width: 1440px;
  background-color: rgb(255, 255, 255, 0.3);
`;

export const ModalBody = styled.div`
  /* position: relative;
  transform: translate(75%, 25%); */
  background-color: white;
  display: block;
  width: 400px;
  height: 400px;
  border: solid 1px #868686;
  padding: 25px;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  p {
    font-size: 20px;
  }
`;

export const TotalAmount = styled.div`
  width: 348px;
  height: 80px;
  border-radius: 10px;
  background-color: #ddf1ff;
  padding: 12px;
  margin-bottom: 20px;
  p {
    font-size: 12px;
  }
  b {
    font-size: 30px;
  }
`;
export const CardNum = styled.div`
  gap: 12px;
  margin-bottom: 15px;

  p {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;
export const CvcNum = styled.div`
  gap: 12px;
  margin-bottom: 30px;

  p {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;
export const ModalFooter = styled.div`
  width: 348px;
  .footerButton {
    background-color: #42b0ff;
  }
`;