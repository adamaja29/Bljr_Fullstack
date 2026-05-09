import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Users from "./pages/admin/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        <Route path="/admin/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;