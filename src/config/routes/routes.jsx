import React from "react";
import { Routes, Route } from "react-router-dom";
import Section from "../../component/section_1";
import Details from "../../pages/products/details";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Section />}></Route>
      <Route path="/details" element={<Details />}></Route>
    </Routes>
  );
};

export default RoutePage;
