import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export const Router = () => {
  const auth = useAuth();

  // comprobate if the user is authenticated
  if (auth.status === "loading") return <div>Revisando credenciales...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            auth.status === "auth" ? <PrivateRoutes /> : <PublicRoutes />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
