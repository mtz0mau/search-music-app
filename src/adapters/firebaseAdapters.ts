import { User } from "../interfaces/firebaseInterfaces";

export const userAdapter = (user: any): User => {
  return {
    email: user.email ?? "",
    uid: user.uid,
  };
};