import { Item } from "../interfaces/lastfmInterfaces";

export const itemAdapter = (item: any, type: string): Item => {
  return {
    name: item.name,
    url: item.url,
    streamable: item.streamable,
    listeners: Number(item.listeners ?? 0),
    mbid: item.mbid,
    image: item.image,
    type,
  }
};
