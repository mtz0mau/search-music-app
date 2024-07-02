import { itemAdapter } from '../adapters/lastfmAdapters';
import { SearchConfig, AlbumSearchResponse, ArtistSearchResponse, TrackSearchResponse } from '../interfaces/lastfmInterfaces';

class LastfmService {
  private url: string;

  constructor() {
    this.url = `${import.meta.env.VITE_LASTFM_API_URL}?api_key=${import.meta.env.VITE_LASTFM_API_KEY}&format=json`;
  }

  private getURLSearchConfig = (config: SearchConfig): string => {
    const { page, limit } = config;
    return `&page=${page}&limit=${limit}`;
  };

  public album = {
    search: async (query: string, config: SearchConfig) => {
      const url = `${this.url}&method=album.search&album=${query}${this.getURLSearchConfig(config)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error fetching data");
      const data: AlbumSearchResponse = await response.json();
      return data.results.albummatches.album.map(album => itemAdapter(album, 'album'));
    },
  };

  public artist = {
    search: async (query: string, config: SearchConfig) => {
      const url = `${this.url}&method=artist.search&artist=${query}${this.getURLSearchConfig(config)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error fetching data");
      const data: ArtistSearchResponse = await response.json();
      return data.results.artistmatches.artist.map(artist => itemAdapter(artist, 'artist'));
    },
  };

  public track = {
    search: async (query: string, config: SearchConfig) => {
      const url = `${this.url}&method=track.search&track=${query}${this.getURLSearchConfig(config)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error fetching data");
      const data: TrackSearchResponse = await response.json();
      return data.results.trackmatches.track.map(track => itemAdapter(track, 'track'));
    },
  };
}

const lastfmService = new LastfmService();
export default lastfmService;
