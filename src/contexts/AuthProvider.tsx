import { createContext, useEffect, useState } from "react";
import { firebaseService } from "../services";
import { Credentials } from "../interfaces/authInterfaces";

type authStatus = "loading" | "unauth" | "auth";

const AuthContext = createContext({
  status: "loading" as authStatus,
  login: (credentials: Credentials) => {
    console.log(credentials);
  },
  register: (credentials: Credentials) => {
    console.log(credentials);
  },
  logout: () => {},
});

export function AuthProvider({ children }: { children?: any }) {
  const [status, setStatus] = useState<authStatus>("loading");

  useEffect(() => {
    // comprobate if user is logged
    const checkAuth = async () => {
      firebaseService.onAuthStateChanged((user) => {
        if (user) {
          setStatus("auth");
        } else {
          setStatus("unauth");
        }
      });
    };

    checkAuth();
  }, []);

  const login = async (credentials: Credentials) => {
    const response = await firebaseService.login(credentials);
    if (!response.user) throw new Error("Error al iniciar sesión");
    setStatus("auth");
  };

  const register = async (credentials: Credentials) => {
    const response = await firebaseService.register(credentials);
    if (!response.user) throw new Error("Error al registrar el usuario");
    setStatus("auth");
  };

  const logout = async () => {
    await firebaseService.logout();
    setStatus("unauth");
  };

  return (
    <AuthContext.Provider
      value={{
        status,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
