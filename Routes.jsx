import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./src/components/DashBoard";
import Products from "./src/components/Products";
import Settings from "./src/components/settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
