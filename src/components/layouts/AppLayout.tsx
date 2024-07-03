import { Outlet } from "react-router-dom";
import { LogoutButtonContainer } from "../containers/authContainer";
import { Container, Text } from "../ui/layout";

export default function AppLayout() {
  return (
    <div> 
      <div className="fixed w-56 h-56 md:w-72 md:h-72 -left-20 bottom-36 bg-primary blur-[80px] opacity-30"></div>

      <header>
        <nav className="border-b border-b-pink-900 border-opacity-40">
          <Container className="flex items-center justify-between py-5">
            <div>
              <h1 className="text-3xl font-bold text-white">
                <span className="text-primary">Search</span> Music
              </h1>
              <Text className="opacity-60 text-sm">¡Hola de nuevo!</Text>
            </div>
            <LogoutButtonContainer />
          </Container>
        </nav>
      </header>

      <main className="mt-8 pb-16 relative z-[2]">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}
