import { useCallback, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseResponse, User } from "../interfaces/firebaseInterfaces";
import { Credentials } from "../interfaces/authInterfaces";

export default function useFirebase(): FirebaseResponse {
  const app = initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "",
    appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "",
  });
  const auth = getAuth(app);
  const [user, setUser] = useState<User>({
    email: "",
    uid: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (credentials: Credentials) => {
    const { email, password } = credentials;
    setIsLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser({ email: user.email ?? "", uid: user.uid });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [auth]);

  const register = useCallback(async (credentials: Credentials) => {
    const { email, password } = credentials;
    setIsLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser({ email: user.email ?? "", uid: user.uid });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [auth]);

  const logout = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      await signOut(auth);
      setUser({ email: "", uid: "" });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [auth]);

  const checkAuth = useCallback(() => {
    setIsLoading(true);
    setError(null);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ email: user.email ?? "", uid: user.uid });
      } else {
        setUser({ email: "", uid: "" });
      }
      setIsLoading(false);
    });
  }, [auth]);

  return { user, isLoading, error, login, register, logout, checkAuth };
}
