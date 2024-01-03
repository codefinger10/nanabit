import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrap } from "./styles/basic";

const App = () => {
  return (
    <Wrap maxw={960}>
      <Routes>
        {/* <Route path="/intro" element={<Intro />}></Route> */}
        <Route path="*" element={<h1>파일이없네요.</h1>}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
