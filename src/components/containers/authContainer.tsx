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
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    const error: string = validateCredentials(credentials);
    if (error) {
      setError(error);
      return;
    }

    setLoading(true);
    try {
      await login(credentials);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CredentialsForm
      credentials={credentials}
      setCredentials={setCredentials}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  );
};

export const RegisterFormContainer = () => {
  const { register } = useAuth();
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    const error: string = validateCredentials(credentials);
    if (error) {
      setError(error);
      return;
    }

    setLoading(true);
    try {
      await register(credentials);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CredentialsForm
      credentials={credentials}
      setCredentials={setCredentials}
      onSubmit={onSubmit}
      buttonText="Registrarse"
      error={error}
      loading={loading}
    />
  );
};

const validateCredentials = (credentials: Credentials): string => {
  // comprobate if email and password are not empty
  if (Object.values(credentials).includes(""))
    return "Todos los campos son obligatorios";

  // comprobate if email is valid
  const emailReg = /\S+@\S+\.\S+/;
  if (!emailReg.test(credentials.email)) return "El email no es válido";

  // comprobate if password is valid
  if (credentials.password.length < 6)
    return "La contraseña debe tener al menos 6 caracteres";

  return "";
};

export const LogoutButtonContainer = () => {
  const { logout } = useAuth();
  return <LogoutButton logout={logout} />;
};
