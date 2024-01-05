import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrap } from "./styles/basic";
import BasicLayout from "./layouts/BasicLayout";

const App = () => {
  return (
    <Wrap>
      <Routes>
        <Route path="/" element={<BasicLayout />}></Route>
        {/* <Route path="*" element={<h1>파일이없네요.</h1>}></Route> */}
      </Routes>
    </Wrap>
  );
};

export default App;
