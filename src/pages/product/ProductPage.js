import React from "react";
import BabyMealPage from "./BabyMealPage";
import ProductBt from "./ProductBt";
import { Outlet } from "react-router";
import ProductLayout from "./ProductLayout";

const ProductPage = () => {
  return (
    <div>
      {/* <ProductBt /> */}
      <ProductLayout />
    </div>
  );
};

export default ProductPage;
