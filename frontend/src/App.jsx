import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectRoute";
import { AuthProvider } from "./Pages/auth/AuthContext";
import Login from "./Pages/auth/Login";
import DashboardAdmin from "./Pages/admin/DashboardAdmin";
import DashboardUser from "./Pages/user/DashboardUser";
import Users from "./Pages/admin/Users";
import Products from "./Pages/admin/Products"

function App() {

  return (

    <BrowserRouter>

      <AuthProvider>

        <Routes>

          <Route path="/" element={<Login />} />

          {/* ADMIN */}

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRole="admin">

                <DashboardAdmin />

              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRole="admin">

                <Users />

              </ProtectedRoute>
            }
          />

          <Route path="/admin/products" element={
            <ProtectedRoute allowedRole="admin">
              <Products />
            </ProtectedRoute>
          }
          />

          {/* USER */}

          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute allowedRole="user">

                <DashboardUser />

              </ProtectedRoute>
            }
          />

        </Routes>

      </AuthProvider>

    </BrowserRouter>

  );

}

export default App;