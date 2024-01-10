import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router";
import BasicLayout from "../../layouts/BasicLayout";

const CommunityPage = () => {
  const Commu = styled.div`
    position: relative;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  `;

  return (
    <BasicLayout>
      <Commu>
        <Outlet />
      </Commu>
    </BasicLayout>
  );
};

export default CommunityPage;
