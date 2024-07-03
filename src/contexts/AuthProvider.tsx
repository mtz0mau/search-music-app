import { createContext, useEffect, useState } from "react";
import { useFirebase } from "../hooks";
import { FirebaseResponse } from "../interfaces/firebaseInterfaces";

type authStatus = "loading" | "unauth" | "auth";

interface AuthContextType extends FirebaseResponse {
  status: authStatus;
}

const AuthContext = createContext<AuthContextType>({
  user: { email: "", uid: "" },
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  isLoading: false,
  error: null,
  status: "loading",
  checkAuth: () => {},
});

export function AuthProvider({ children }: { children?: any }) {
  const { user, login, register, logout, isLoading, error, checkAuth } =
    useFirebase();
  const [status, setStatus] = useState<authStatus>("loading");

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (user.uid) {
      setStatus("auth");
      return;
    }

    setStatus("unauth");
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
        error,
        status,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
