import { Credentials } from "./authInterfaces";

export type User = {
  email: string;
  uid: string | null;
};

export type FirebaseResponse = {
  user: User;
  isLoading: boolean;
  error: string | null;
  login: (credentials: Credentials) => Promise<void>;
  register: (credentials: Credentials) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => void;
};