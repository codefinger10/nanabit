import React from "react";
import {
  AddressInfoWrap,
  AddressTitleWrap,
} from "../../styles/address/addressinfostyle";
import styled from "styled-components";

const AddressInfoList = styled.div`
  width: 1155px;
  height: 153px;
  margin: 0 auto;
  margin-bottom: 50px;
  border-bottom: 1px solid #d9d9d9;
`;

const AddressBtWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  button {
    width: 203px;
    height: 70px;
    margin-bottom: 74px;
    background: #e9b25f;
    border: none;
    color: #fff;
    font-size: 20px;
  }
`;

export const AddressInfo = () => {
  return (
    <>
      <AddressTitleWrap>
        <div>
          <h2>ADDRESS</h2>
        </div>
        <div>
          <p>
            주소 추가는 <span>최대 3개</span>까지만 가능합니다
          </p>
        </div>
      </AddressTitleWrap>
      <AddressInfoList>
        <AddressInfoWrap>
          <h2> (41937) 대구광역시 중구 중앙대로 394 제일빌딩 5F 나나빛 </h2>

          <button>주소 수정/삭제</button>
        </AddressInfoWrap>
      </AddressInfoList>
      <AddressBtWrap>
        <button>주소 추가하기</button>
      </AddressBtWrap>
    </>
  );
};

export default AddressInfo;
