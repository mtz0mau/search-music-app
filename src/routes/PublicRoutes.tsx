import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages/auth";
import { AuthLayout } from "../components/layouts";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
