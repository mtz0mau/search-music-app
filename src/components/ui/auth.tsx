import { Credentials } from "../../interfaces/authInterfaces";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border"
        value={credentials.email}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />

      <input
        type="password"
        className="border"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button>{buttonText}</button>
    </form>
  );
};

export const LogoutButton = ({ logout }: { logout: () => void }) => {
  return <button onClick={logout}>Logout</button>;
};
