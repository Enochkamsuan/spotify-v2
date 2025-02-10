import React from "react";
import { Route } from "react-router-dom";
import Section from "../../component/section_1";

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Section />}></Route>
    </Routes>
  );
};

export default Routes;
