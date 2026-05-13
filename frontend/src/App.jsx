import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Pages/auth/AuthContext";
import Login from "./Pages/auth/Login";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import DashboardUser from "./pages/user/DashboardUser";
import Users from "./pages/admin/Users";

function App() {

  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={<DashboardAdmin />}
          />

          <Route
            path="/admin/users"
            element={<Users />}
          />

          <Route
            path="/user/dashboard"
            element={<DashboardUser />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  );

}

export default App;