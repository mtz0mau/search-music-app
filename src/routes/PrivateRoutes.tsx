import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../pages/private";
import { AppLayout } from "../components/layouts";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/auth/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
