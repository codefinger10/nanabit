import React, { useEffect, useState } from "react";
import { ProductBt } from "../../styles/product/ProductBt";
import { useNavigate, useParams } from "react-router";

const ProductCate = () => {
  const { id } = useParams();
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  const todays = new Date();
  const day = todays.getDate();
  const month = todays.getMonth() + 1;
  const year = todays.getFullYear();
  const today = `${year}.${month}.${day}`;

  const handleNotice = id => {
    navigate(`../product/${id}`);
  };
  return (
    <div>
      <ProductBt onClick={() => handleNotice(1)} active={id === "1"}>
        임신/출산(~0개월)
      </ProductBt>
      <ProductBt onClick={() => handleNotice(2)} active={id === "2"}>
        신생아(1~3개월)
      </ProductBt>
      <ProductBt onClick={() => handleNotice(3)} active={id === "3"}>
        베이비(4~23개월)
      </ProductBt>
      <ProductBt onClick={() => handleNotice(3)} active={id === "3"}>
        키즈(24개월~)
      </ProductBt>
    </div>
  );
};

export default ProductCate;
