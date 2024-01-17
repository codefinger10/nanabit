import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router";

const CommunityPage = () => {
  const Commu = styled.div`
    position: relative;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  `;

  return (
    <Commu>
      <Outlet />
    </Commu>
  );
};

export default CommunityPage;
