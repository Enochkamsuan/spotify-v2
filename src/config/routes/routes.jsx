import React from "react";
import { Routes, Route } from "react-router-dom";
import Section from "../../component/section_1";
import Details from "../../pages/products/details";
import Browse from "../../pages/products/browse";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Section />}></Route>
      <Route path="/details" element={<Details />}></Route>
      <Route path="/browse/:details" element={<Browse />}></Route>
    </Routes>
  );
};

export default RoutePage;
