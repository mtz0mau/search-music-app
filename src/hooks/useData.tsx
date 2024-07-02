import { useContext } from "react";
import { DataContext } from "../contexts";

export default function useData() {
  return useContext(DataContext);
}
