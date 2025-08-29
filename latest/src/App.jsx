import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard"; // <-- don't forget this import!
import EmployeeDashboard from "./pages/EmployeeDashboard";
import PrivateRoute from "./utils/PrivateRoute";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={
          <PrivateRoute>
            <RoleBaseRoutes requiredRole = {["admin"]}>
              <AdminDashboard />
            </RoleBaseRoutes>
          </PrivateRoute>
          }></Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
