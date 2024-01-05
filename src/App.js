import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrap } from "./styles/basic";
import LoginPage from "./pages/LoginPage";
import CsReadPage from "./pages/CsReadPage";

const App = () => {
  return (
    <Wrap>
      <Routes>
        {/* <Route path="/intro" element={<Intro />}></Route> */}
        <Route path="*" element={<h1>파일이없네요.</h1>}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/inquiry" element={<CsReadPage />}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
