import { createContext, useState } from "react";
import { Item } from "../interfaces/lastfmInterfaces";
import { useLastfmSearch } from "../hooks";

const DataContext = createContext({
  data: [] as Item[],
  clearData: () => {},
  query: "",
  setQuery: (query: string) => {console.log(query)},
  page: 1,
  setPage: (page: number) => {console.log(page)},
  total_data: 0,
});

export const DataProvider = ({ children }: { children: any }) => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const limit: number = 10;
  const { data, totalResults, clearData } = useLastfmSearch({ query, page, limit });

  const handleSetQuery = (query: string) => {
    setQuery(query);
    setPage(1);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        clearData,
        query,
        setQuery: handleSetQuery,
        page,
        setPage,
        total_data: totalResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
