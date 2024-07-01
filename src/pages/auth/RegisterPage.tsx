import { Link } from "react-router-dom";
import { RegisterFormContainer } from "../../components/containers/authContainer";

export default function RegisterPage() {
  return (
    <div>
      <div>Register</div>
      <RegisterFormContainer />
      <Link to="/auth/login">Go to login</Link>
    </div>
  );
}
