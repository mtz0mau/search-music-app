import { Link } from "react-router-dom";
import { LoginFormContainer } from "../../components/containers/authContainer";

export default function LoginPage() {
  return (
    <div>
      <div>Login</div>
      <LoginFormContainer />
      <Link to="/auth/register">Go to register</Link>
    </div>
  );
}
