import { useCallback, useEffect, useState } from "react";
import {
  Item,
  AlbumSearchResponse,
  ArtistSearchResponse,
  TrackSearchResponse,
} from "../interfaces/lastfmInterfaces";
import { itemAdapter } from "../adapters/lastfmAdapters";

type SearchConfig = {
  page?: number;
  limit?: number;
  query: string;
};

type Response = [
  AlbumSearchResponse,
  ArtistSearchResponse,
  TrackSearchResponse
];

type SearchResponse = {
  data: Item[];
  error: string | null;
  isLoading: boolean;
  totalResults: number;
  clearData: () => void;
};

export default function useLastfmSearch({
  page = 1,
  limit = 10,
  query,
}: SearchConfig): SearchResponse {
  const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
  const API_URL = import.meta.env.VITE_LASTFM_API_URL;
  const [data, setData] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalResults, setTotalResults] = useState<number>(0);

  const getUrl = useCallback(() => {
    return `${API_URL}?api_key=${API_KEY}&format=json&limit=${limit}&page=${page}`;
  }, [page, limit]);

  const search = useCallback(async () => {
    setData([]);
    if (!query || query.length < 3 || isLoading) return;

    try {
      setIsLoading(true);
      const [almbumResponse, artistResponse, trackResponse] = await Promise.all(
        [
          fetch(`${getUrl()}&method=album.search&album=${query}`),
          fetch(`${getUrl()}&method=artist.search&artist=${query}`),
          fetch(`${getUrl()}&method=track.search&track=${query}`),
        ]
      );

      if (!almbumResponse.ok || !artistResponse.ok || !trackResponse.ok) {
        throw new Error("Error al buscar los datos.");
      }

      const [albumData, artistData, trackData]: Response = await Promise.all([
        almbumResponse.json(),
        artistResponse.json(),
        trackResponse.json(),
      ]);

      const albumItems = albumData.results.albummatches.album.map((item) =>
        itemAdapter(item, "album")
      );
      const artistItems = artistData.results.artistmatches.artist.map((item) =>
        itemAdapter(item, "artist")
      );
      const trackItems = trackData.results.trackmatches.track.map((item) =>
        itemAdapter(item, "track")
      );

      const totalAlbums = Number(albumData.results["opensearch:totalResults"]);
      const totalArtists = Number(artistData.results["opensearch:totalResults"]);
      const totalTracks = Number(trackData.results["opensearch:totalResults"]);

      setTotalResults(totalAlbums + totalArtists + totalTracks);
      setData([...albumItems, ...artistItems, ...trackItems]);
    } catch (error: any) {
      setData([]);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [query, getUrl]);

  useEffect(() => {
    search();
  }, [search]);

  const clearData = () => {
    setData([]);
  };

  return { data, error, isLoading, totalResults, clearData };
}
