import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Credentials } from "../interfaces/authInterfaces";

class FirebaseService {
  app;
  auth;

  constructor() {
    this.app = initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "",
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "",
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "",
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "",
      messagingSenderId:
        import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "",
      appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "",
    });
    this.auth = getAuth(this.app);
  }

  async login(credentials: Credentials) {
    const { email, password } = credentials;
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(credentials: Credentials) {
    const { email, password } = credentials;
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return await signOut(this.auth);
  }

  onAuthStateChanged(callback: (user: any) => void) {
    return onAuthStateChanged(this.auth, callback);
  }
}

export const firebaseService = new FirebaseService();
