import React from "react";

import BasicHeader from "./BasicHeader";
import BasicFooter from "./BasicFooter";
import Test from "./Test";

// 객체 구조 분해 할당
const BasicLayout = ({ children }) => {
  return (
    <div className="wrap">
      <header>
        <BasicHeader />
      </header>
      <Test />
      {/* <main>{children}</main> */}
      <footer>
        <BasicFooter />
      </footer>
    </div>
  );
};

export default BasicLayout;
