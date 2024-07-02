export type SearchConfig = {
  page: number;
  limit: number;
};

export interface AlbumSearchResponse {
  results: {
    "opensearch:totalResults": string;
    "opensearch:startIndex": string;
    "opensearch:itemsPerPage": string;
    albummatches: {
      album: Album[];
    };
  };
}

export interface ArtistSearchResponse {
  results: {
    "opensearch:totalResults": string;
    "opensearch:startIndex": string;
    "opensearch:itemsPerPage": string;
    artistmatches: {
      artist: Artist[];
    };
  };
}

export interface TrackSearchResponse {
  results: {
    "opensearch:totalResults": string;
    "opensearch:startIndex": string;
    "opensearch:itemsPerPage": string;
    trackmatches: {
      track: Track[];
    };
  };
}

export interface Artist {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Image[];
}

export interface Track {
  name: string;
  artist: string;
  url: string;
  streamable: string;
  listeners: string;
  mbid: string;
  image: Image[];
}

export interface Album {
  name: string;
  artist: string;
  url: string;
  image: Image[];
  streamable: string;
  mbid: string;
}

export interface Image {
  "#text": string;
  size: string;
}
