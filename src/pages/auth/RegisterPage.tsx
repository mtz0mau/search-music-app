import { Link } from "react-router-dom";
import { RegisterFormContainer } from "../../components/containers/authContainer";
import { H1, Text } from "../../components/ui/layout";

export default function RegisterPage() {
  return (
    <div>
      <div className="text-start md:text-center mb-10">
        <H1>
          Crear <span className="text-primary">cuenta</span>
        </H1>
        <Text className="text-balance opacity-60 mt-2 text-sm">
          Ingresa tus credenciales para crear una cuenta.
        </Text>
      </div>

      <div className="w-full md:w-fit mx-auto">
        <RegisterFormContainer />

        <div className="flex items-center justify-between mt-10">
          <Link to={"/"} className="text-xs text-white">
            Inicio
          </Link>

          <Link to="/auth/login" className="text-xs text-white">
            ¿Ya tienes una cuenta?{" "}
            <span className="text-primary">Iniciar sesión</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
