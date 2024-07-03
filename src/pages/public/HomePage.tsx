import { useNavigate } from "react-router-dom";
import { Button, Container, H1, Text } from "../../components/ui/layout";
import vinilSrc from "../../assets/img/vinil.webp";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute w-56 h-56 md:w-72 md:h-72 -right-20 top-36 bg-primary blur-3xl opacity-30"></div>

      <Container className="py-10 min-h-screen relative z-[1] flex flex-col md:justify-center">
        <div className="text-start md:text-center mb-5">
          <H1>
            Bienvenido a <span className="text-primary">Search</span> Music App
          </H1>
          <Text className="text-balance opacity-60 mt-2 text-sm">
            Encuentra tus álbumes, artistas o canciones favoritas y disfruta de
            la música que más te gusta.
          </Text>
        </div>

        <div className="absolute md:static bottom-5 md:bottom-auto left-0 w-full z-[2] flex flex-col">
          <div className="relative w-full h-full z-[1] md:order-2 md:mt-10">
            <img
              src={vinilSrc}
              alt="vinil"
              className="w-[300px] sm:w-[400px] mx-auto animate-spin select-none"
              style={{
                animationDuration: "40s",
              }}
            />
            <div className="absolute w-full h-full left-0 -bottom-10 bg-gradient-to-b from-transparent via-black to-[#0A0B10] blur-lg md:blur-xl"></div>
          </div>

          <div className="w-full flex justify-center">
            <Button
              className="w-full md:w-[400px] shadow-lg relative z-[2]"
              onClick={() => navigate("/auth/login")}
            >
              Comenzar
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
