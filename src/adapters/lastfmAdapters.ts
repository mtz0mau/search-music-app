import { Album } from '../interfaces/lastfmInterfaces';

export const albumAdapter = (album: any): Album => {
  return {
    name: album.name,
    artist: album.artist,
    url: album.url,
    image: album.image,
    streamable: album.streamable,
    mbid: album.mbid,
  };
};

export const artistAdapter = (artist: any) => {
  return {
    name: artist.name,
    listeners: artist.listeners,
    mbid: artist.mbid,
    url: artist.url,
    streamable: artist.streamable,
    image: artist.image,
  };
}

export const trackAdapter = (track: any) => {
  return {
    name: track.name,
    artist: track.artist,
    url: track.url,
    streamable: track.streamable,
    listeners: track.listeners,
    mbid: track.mbid,
    image: track.image,
  };
}
