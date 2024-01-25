import React, { useState } from "react";
import Address from "../../components/signup/Address";

const AddressModify = () => {
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const updateAddressInfo = ({ zonecode, address }) => {
    // 주소 정보 업데이트
    setZonecode(zonecode);
    setAddress(address);
  };
  return (
    <div>
      <Address onAddressChange={updateAddressInfo} />
    </div>
  );
};

export default AddressModify;
