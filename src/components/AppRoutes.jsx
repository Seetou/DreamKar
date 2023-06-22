import React from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "../Pages/Page404";
import Home from "../Pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
