import styled from "@emotion/styled";
import React, { useState } from "react";
import { Outlet } from "react-router";
import CommunityTitle from "../../components/basic/CommunityTitle";

const CommunityPage = () => {
  const Commu = styled.div`
    position: relative;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  `;

  const [maintxt, setMaintxt] = useState("공지사항");
  const [subtxt, setSubtxt] = useState(
    "배송 및 상품관련 공지사항을 확인해 주세요.",
  );
  return (
    <Commu>
      <CommunityTitle maintxt={maintxt} subtxt={subtxt} />
      <Outlet context={{ setMaintxt, setSubtxt }} />
    </Commu>
  );
};

export default CommunityPage;
