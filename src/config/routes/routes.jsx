import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../../pages/products/details";
import Browse from "../../pages/products/browse";
import Index from "../../pages/home";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/browse/:types" element={<Browse />}></Route>
      <Route path="/browse/:types/:id" element={<Details />}></Route>
    </Routes>
  );
};

export default RoutePage;
