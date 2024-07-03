import { Credentials } from "../../interfaces/authInterfaces";
import { Button, Input } from "./layout";

export const CredentialsForm = ({
  credentials,
  setCredentials,
  onSubmit,
  buttonText = "Iniciar sesión",
}: {
  credentials: Credentials;
  setCredentials: (credentials: Credentials) => void;
  onSubmit: () => void;
  buttonText?: string;
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      onSubmit();
    } catch (error) {
      console.log(error);
    }
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
      <Button>{buttonText}</Button>
    </form>
  );
};

export const LogoutButton = ({ logout }: { logout: () => void }) => {
  return <Button color="secondary" onClick={logout}>Cerrar sesión</Button>;
};
