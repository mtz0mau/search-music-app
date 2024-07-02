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
    image_url: item.image[3]["#text"] || "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
  }
};
