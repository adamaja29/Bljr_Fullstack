import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import DashboardUser from "./pages/user/DashboardUser";
import Users from "./pages/admin/Users";
import Login from "./Pages/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/login" element={<login />} /> */}

        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/users" element={<Users />} />

        <Route path="/user/dashboard" element={<DashboardUser />} />
        {/* <Route path="/user/products" element={<ProductsUser />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;