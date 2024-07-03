import { Outlet } from "react-router-dom";
import { Container } from "../ui/layout";

export default function AuthLayout() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute w-56 h-56 md:w-72 md:h-72 -right-20 top-36 bg-primary blur-3xl opacity-30"></div>

      <Container className="py-10 min-h-screen relative z-[1] flex flex-col md:justify-center">
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
}
