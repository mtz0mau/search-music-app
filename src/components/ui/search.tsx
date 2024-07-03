import { Item } from "../../interfaces/lastfmInterfaces";
import { H2, H3, Input, Text } from "./layout";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import emptySrc from "../../assets/img/empty.webp";
import { IoMdArrowBack } from "react-icons/io";

export const SearchBar = ({
  query,
  setQuery,
  total_data,
}: {
  query: string;
  setQuery: (query: string) => void;
  total_data: number;
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center bg-secondary w-full md:w-[500px] rounded-lg">
        <CiSearch className="text-2xl ml-3 text-white opacity-60" />

        <Input
          type="text"
          placeholder="Busca un album, artista o canción"
          value={query}
          className="px-0 pl-2 pr-4 w-full"
          onChange={(e) => setQuery(e.target.value)}
        />

        {query.length >= 3 && (
          <button onClick={() => setQuery("")}>
            <IoMdClose className="text-2xl text-white opacity-60 mr-3" />
          </button>
        )}
      </div>

      {query.length >= 3 && (
        <Text className="mt-2 text-white opacity-60">
          {total_data} resultados
        </Text>
      )}
    </div>
  );
};

export const SearchResults = ({
  data,
  query,
}: {
  data: Item[];
  query: string;
}) => {
  return (
    <div className="w-full overflow-hidden">
      {data.length > 0 && (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <ResultItem key={item.url} item={item} />
          ))}
        </div>
      )}

      {data.length === 0 && query.length < 3 && (
        <div className="text-center text-white">
          <H2>
            Comienza a <span className="text-primary">buscar</span> un album,
            artista o canción
          </H2>
          <img src={emptySrc} alt="Disco" className="mx-auto mt-2" />
        </div>
      )}

      {data.length === 0 && query.length >= 3 && (
        <div className="text-center text-white">
          <H2>
            No se encontraron resultados para{" "}
            <span className="text-primary">"{query}"</span>
          </H2>
        </div>
      )}
    </div>
  );
};

export const SearchPagination = ({
  page,
  total_data,
  setPage,
}: {
  page: number;
  total_data: number;
  setPage: (page: number) => void;
}) => {
  return (
    <div className="flex justify-between mt-5">
      <button
        className={`btn mr-2 ${page > 1 ? "" : "invisible"}`}
        onClick={() => {
          if (page > 1) setPage(page - 1);
        }}
      >
        <IoMdArrowBack className="text-2xl text-white" />
      </button>

      {total_data > page * 30 && (
        <button className="btn" onClick={() => setPage(page + 1)}>
          <IoMdArrowBack className="text-2xl text-white transform rotate-180" />
        </button>
      )}
    </div>
  );
};

const getRamdomColor = (): string => {
  const colors = [
    "bg-pink-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-yellow-600",
    "bg-purple-600",
    "bg-red-600",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const types: { [key: string]: string } = {
  album: "Album",
  artist: "Artista",
  track: "Canción",
};

export const ResultItem = ({ item }: { item: Item }) => {
  const { name, listeners, type, image_url, is_generic_image, url } = item;

  return (
    <a href={url} className="overflow-hidden" target="_blank">
      <div className="rounded-2xl overflow-hidden relative w-fit h-fit">
        <img
          src={image_url}
          alt={`${name} image`}
          className="w-full relative"
        />

        {is_generic_image && (
          <div
            className={`absolute top-0 left-0 w-full h-full opacity-60 ${getRamdomColor()}`}
          ></div>
        )}
      </div>

      <div className="mt-3">
        <p className="text-white opacity-60 text-sm">{types[type]}</p>
        <H3>{name}</H3>
        {listeners > 0 && <Text className="text-sm">{listeners} {listeners > 1 ? 'oyentes' : 'oyente'}</Text>}
      </div>
    </a>
  );
};
