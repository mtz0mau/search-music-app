import { createContext, useEffect, useState, useCallback } from "react";
import { Item } from "../interfaces/lastfmInterfaces";
import { lastfmService } from "../services";

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
  const [data, setData] = useState<Item[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [total_data, setTotalData] = useState<number>(0);
  const limit: number = 10;

  const searchData = useCallback(async () => {
    setData([]);
    if (query.length < 3) {
      setTotalData(0);
      return;
    }

    const [albums_result, tracks_result, artists_result] = await Promise.all([
      lastfmService.album.search(query, { page, limit }),
      lastfmService.track.search(query, { page, limit }),
      lastfmService.artist.search(query, { page, limit }),
    ]);

    const { data: albums, total_results: total_albums } = albums_result;
    const { data: tracks, total_results: total_tracks } = tracks_result;
    const { data: artists, total_results: total_artists } = artists_result;

    setTotalData(Math.max(total_albums, total_tracks, total_artists));
    setData([...albums, ...tracks, ...artists]);
  }, [query, page, limit]);

  const clearData = () => {
    setData([]);
  };

  useEffect(() => {
    searchData();
  }, [query, page, searchData]);

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
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
        total_data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
