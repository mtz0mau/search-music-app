import { createContext, useEffect, useState } from "react";
import { Item } from "../interfaces/lastfmInterfaces";
import { lastfmService } from "../services";

const DataContext = createContext({
  data: [] as Item[],
  clearData: () => {},
  query: "",
  setQuery: (query: string) => {
    console.log(query);
  },
  page: 1,
  setPage: (page: number) => {
    console.log(page);
  },
});

export const DataProvider = ({ children }: { children: any }) => {
  const [data, setData] = useState<Item[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const limit: number = 4;

  const searchData = async () => {
    const [albums, tracks, artists] = await Promise.all([
      lastfmService.album.search(query, { page, limit }),
      lastfmService.track.search(query, { page, limit }),
      lastfmService.artist.search(query, { page, limit }),
    ]);
    setData([...albums, ...tracks, ...artists]);
  };

  const clearData = () => {
    setData([]);
  };

  useEffect(() => {
    if (query.length < 3) {
      clearData();
      return;
    }

    searchData();
  }, [query]);

  return (
    <DataContext.Provider
      value={{
        data,
        clearData,
        query,
        setQuery,
        page,
        setPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
