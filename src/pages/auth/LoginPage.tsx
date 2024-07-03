import { Link } from "react-router-dom";
import { LoginFormContainer } from "../../components/containers/authContainer";
import { H1, Text } from "../../components/ui/layout";

export default function LoginPage() {
  return (
    <div>
      <div className="text-start md:text-center mb-10">
        <H1>
          Iniciar <span className="text-primary">sesión</span>
        </H1>
        <Text className="text-balance opacity-60 mt-2 text-sm">
          Ingresa tus credenciales para acceder a tu cuenta.
        </Text>
      </div>

      <div className="w-full md:w-fit mx-auto">
        <LoginFormContainer />

        <div className="flex items-center justify-between mt-10">
          <Link to={"/"} className="text-xs text-white">
            Inicio
          </Link>

          <Link to="/auth/register" className="text-xs text-white">
            ¿No tienes una cuenta?{" "}
            <span className="text-primary">Crear una</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
