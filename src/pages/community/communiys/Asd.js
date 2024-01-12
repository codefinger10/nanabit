import React, { useState } from "react";
import { Avatar, List } from "antd";
import DefaultButton from "../../../components/basic/DefaultButton";
import styled from "@emotion/styled";

const data = [
  {
    title: "A맘",
  },
  {
    title: "B맘",
  },
  {
    title: "C맘",
  },
  {
    title: "D맘",
  },
];

const Asd = () => {
  const [azz, setAzz] = useState(data);

  const handleC = () => {
    setAzz([...azz, { title: "AA맘" }]);
  };

  const ASDSA = styled.div`
    width: 100%;
    height: 57px;
    display: flex;
    gap: 15px;
    input {
      font-size: 2rem;
      border: 1px solid #000;
    }
  `;

  return (
    <>
      <ASDSA>
        <input type="text" />
        <DefaultButton
          aa={() => handleC()}
          type="button"
          txt="등록하기"
          txtColor="#42B0FF"
          borderColor="#42B0FF"
        />
      </ASDSA>
      <List
        style={{ width: "100%" }}
        itemLayout="horizontal"
        dataSource={azz}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{ width: 30 }}
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="저도 배송이 안되네요 먹튀인가여?"
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Asd;
