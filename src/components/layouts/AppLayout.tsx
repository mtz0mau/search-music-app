import { Outlet } from "react-router-dom";
import { LogoutButtonContainer } from "../containers/authContainer";

export default function AppLayout() {
  return (
    <div>
      <header>
        <LogoutButtonContainer />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
