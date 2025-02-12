import React from "react";
import { Routes, Route } from "react-router-dom";
import Section from "../../component/section_1";
import CheckOut from "../../component/buyNow";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Section />}></Route>
      <Route path="/checkout" element={<CheckOut />}></Route>
    </Routes>
  );
};

export default RoutePage;
