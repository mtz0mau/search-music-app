import { AuthProvider } from "./contexts";
import { Router } from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
