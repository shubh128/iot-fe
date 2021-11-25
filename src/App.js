import "./styles.css";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./authContext";
import Login from "./Login";
import Home from "./Home";
import Devices from "./Devices";
import Unauthorized from "./Unauthorized";
import DeviceDetails from "./DeviceDetails";
import ProtectedRoute from "./protectedRoute";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/devices/"
          element={
            <ProtectedRoute>
              <Devices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/devices/:id"
          element={
            <ProtectedRoute>
              <DeviceDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unauthorized"
          element={
            <ProtectedRoute>
              <Unauthorized />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default function App() {
  const user = sessionStorage.getItem("user");
  return (
    <AuthProvider user={user}>
      <AppRoutes />
    </AuthProvider>
  );
}
