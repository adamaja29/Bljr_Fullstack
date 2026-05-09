import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import Users from "./pages/admin/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardAdmin />} />

        <Route path="/admin/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;