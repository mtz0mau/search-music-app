import { Credentials } from "../../interfaces/authInterfaces";
import { Button, Input } from "./layout";

const errors: {
  [key: string]: string;
} = {
  "Firebase: Error (auth/invalid-credential).": "Credenciales inválidas",
  "Firebase: Error (auth/email-already-in-use).": "Esta cuenta ya existe",
};

export const CredentialsForm = ({
  credentials,
  setCredentials,
  onSubmit,
  buttonText = "Iniciar sesión",
  error,
  loading,
}: {
  credentials: Credentials;
  setCredentials: (credentials: Credentials) => void;
  onSubmit: () => void;
  buttonText?: string;
  error?: string;
  loading?: boolean;
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 w-full md:w-[500px]">
      <Input
        value={credentials.email}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
        placeholder="Ingresa tu email..."
      />
      <Input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        type="password"
        placeholder="Ingresa tu contraseña..."
      />

      {error && <p className="text-red-500 text-center">{errors[error] || error}</p>}

      <Button
        disabled={loading}
      >{loading ? "Cargando..." :buttonText}</Button>
    </form>
  );
};

export const LogoutButton = ({ logout }: { logout: () => void }) => {
  return (
    <Button color="secondary" onClick={logout}>
      Cerrar sesión
    </Button>
  );
};
