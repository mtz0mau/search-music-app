import { createContext, useState } from "react";
import { Item } from "../interfaces/lastfmInterfaces";

const DataContext = createContext({
  data: [] as Item[],
  searchData: (query: string) => {
    console.log(query);
  },
});

export const DataProvider = ({ children }: { children: any }) => {
  const [data, setData] = useState<Item[]>([]);

  const searchData = async (query: string) => {
    console.log(query);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        searchData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
