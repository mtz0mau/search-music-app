import { itemAdapter, resultsAdapter } from "../adapters/lastfmAdapters";
import {
  SearchConfig,
  AlbumSearchResponse,
  ArtistSearchResponse,
  TrackSearchResponse,
} from "../interfaces/lastfmInterfaces";

class LastfmService {
  private url: string;

  constructor() {
    this.url = `${import.meta.env.VITE_LASTFM_API_URL}?api_key=${
      import.meta.env.VITE_LASTFM_API_KEY
    }&format=json`;
  }

  private getURLSearchConfig = (config: SearchConfig): string => {
    console.log(config);
    const { page, limit } = config;
    return `&limit=${limit}&page=${page}`;
  };

  public album = {
    search: async (query: string, config: SearchConfig) => {
      try {
        const url = `${
          this.url
        }&method=album.search&album=${query}${this.getURLSearchConfig(config)}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data");
        const data: AlbumSearchResponse = await response.json();
        const data_format = data.results.albummatches.album.map((album) =>
          itemAdapter(album, "album")
        );
        return resultsAdapter(
          data_format,
          Number(data.results["opensearch:totalResults"])
        );
      } catch (error) {
        return resultsAdapter([], 0);
      }
    },
  };

  public artist = {
    search: async (query: string, config: SearchConfig) => {
      try {
        const url = `${
          this.url
        }&method=artist.search&artist=${query}${this.getURLSearchConfig(
          config
        )}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data");
        const data: ArtistSearchResponse = await response.json();
        const data_format = data.results.artistmatches.artist.map((artist) =>
          itemAdapter(artist, "artist")
        );
        return resultsAdapter(
          data_format,
          Number(data.results["opensearch:totalResults"])
        );
      } catch (error) {
        return resultsAdapter([], 0);
      }
    },
  };

  public track = {
    search: async (query: string, config: SearchConfig) => {
      try {
        const url = `${
          this.url
        }&method=track.search&track=${query}${this.getURLSearchConfig(config)}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data");
        const data: TrackSearchResponse = await response.json();
        const data_format = data.results.trackmatches.track.map((track) =>
          itemAdapter(track, "track")
        );
        return resultsAdapter(
          data_format,
          Number(data.results["opensearch:totalResults"])
        );
      } catch (error) {
        return resultsAdapter([], 0);
      }
    },
  };
}

const lastfmService = new LastfmService();
export default lastfmService;
