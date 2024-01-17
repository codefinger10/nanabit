import styled from "@emotion/styled";
import { Input } from "antd";

export const SignupWrap = styled.div`
  width: 1220px;
  margin: 0 auto;
  padding-top: 10rem;
  .signimg {
    margin-bottom: 1rem;
  }
  span {
    font-size: 2rem;
  }
  .signinfo {
    border-top: 3px solid #868686;
    border-bottom: 3px solid #868686;
    font-size: 2.5rem;
    margin-top: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .agreesign{
    display: flex;
    justify-content: center;
    width: 1220px;
  }
  .signupbt{
    display: flex;
    justify-content: center;
    width: 1220px;

  }
  
`;
export const MyInput = styled(Input)`
  width: 1220px;
  height: 50px;
`;
export const MyPw = styled(Input.Password)`
  width: 1220px;
  height: 50px;
`;

export const themeObj = {
  bgColor: "#FFFFFF",
  pageBgColor: "#FFFFFF",
  postcodeTextColor: "#C05850",
  emphTextColor: "#222222",
};

export const postCodeStyle = {
  width: "260px",
  height: "380px",
};

export const BabyInfo = styled.div`
    display: flex;
    gap : 20;
    border-Bottom: 3px solid #C5C5C5;
    padding-Bottom: 50;
`
export const BabyInfoPush = styled.div`
    color: #E9B25F;
    font-Family: "Noto Sans KR";
    font-Size: "50px";
    font-Style: "normal";
    font-Weight: 700;
    line-Height: "normal";
`

export const formStyle = {
  marginTop: "20px",
};

export const flexContainer = {
  display: "flex",
};

export const buttonStyle = {
  width: "225px",
  height: "50px",
  background: "#D68000",
  color: "white",
  border: "none",
  marginLeft: "8px",
};

export const titleStyle = {
  color: "#E9B25F",
  fontFamily: "Noto Sans KR",
  fontSize: "50px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

export const buttonPrimaryStyle = {
  backgroundColor: "#E9B25F",
  width: "115px",
  height: "50px",
  marginTop: "1rem",
};

export const formItemLayout = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "3px solid #868686 ",
  flexDirection: "column",
  marginTop: "5rem",
};

export const emailtitle = {
  width: 1220, height: 50
}



export const babyInfo ={
  display: "flex",
  gap: 20,
  borderBottom: "3px solid #C5C5C5",
  paddingBottom: 50,
}

export const babyInfoPush = {
  color: "#E9B25F",
  fontFamily: "Noto Sans KR",
  fontSize: "50px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
}

export const inputBt = {
  width: "1220px", height: "50px"
}

export const addbt = {
  backgroundColor: "#E9B25F",
  width: "115px",
  height: "50px",
  marginTop: "1rem", // 추가: 버튼 위 간격 조절을 위한 속성
}

