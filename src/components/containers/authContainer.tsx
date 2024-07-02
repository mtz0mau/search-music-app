import { useState } from "react";
import { CredentialsForm, LogoutButton } from "../ui/auth";
import { Credentials } from "../../interfaces/authInterfaces";
import { useAuth } from "../../hooks";

export const LoginFormContainer = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    validateCredentials(credentials);
    login(credentials);
  };

  return (
    <CredentialsForm
      credentials={credentials}
      setCredentials={setCredentials}
      onSubmit={onSubmit}
    />
  );
};

export const RegisterFormContainer = () => {
  const { register } = useAuth();
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    validateCredentials(credentials);
    await register(credentials);
  };

  return (
    <CredentialsForm
      credentials={credentials}
      setCredentials={setCredentials}
      onSubmit={onSubmit}
      buttonText="Registrarse"
    />
  );
};

const validateCredentials = (credentials: Credentials) => {
  // comprobate if email and password are not empty
  if (Object.values(credentials).includes(""))
    throw new Error("El email y la contraseña son obligatorios");

  // comprobate if email is valid
  const emailReg = /\S+@\S+\.\S+/;
  if (!emailReg.test(credentials.email))
    throw new Error("El email no es válido");

  // comprobate if password is valid
  if (credentials.password.length < 6)
    throw new Error("La contraseña debe tener al menos 6 caracteres");
};

export const LogoutButtonContainer = () => {
  const { logout } = useAuth();
  return <LogoutButton logout={logout} />;
};
