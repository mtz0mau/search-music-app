import { AuthProvider, DataProvider } from "./contexts";
import { Router } from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router />
      </DataProvider>
    </AuthProvider>
  );
}
