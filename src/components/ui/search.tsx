import { Item } from "../../interfaces/lastfmInterfaces";

export const SearchBar = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (query: string) => void;
}) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Busca un album, artista o canción"
        className="border"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={() => setQuery("")}
      >x</button>
    </div>
  );
};

export const SearchResults = ({ data }: { data: Item[] }) => {
  return (
    <div>
      Resultados
      <div>
        {data.map((item, i) => (
          <ResultItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export const ResultItem = ({ item }: { item: Item }) => {
  const { name, listeners, type, image_url } = item;

  return (
    <div className="border">
      <img src={image_url} alt={`${name} image`} />
      <h3>{name}</h3>
      {listeners > 0 && <p>Escuchado por {listeners} personas</p>}
      <div>
        {type}
      </div>
    </div>
  );
};
