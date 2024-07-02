import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div>
        Home Page
      </div>
      <Link to="/auth/login">Go to login</Link>
    </div>
  )
}
