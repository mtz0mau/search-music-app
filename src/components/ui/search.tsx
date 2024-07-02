export const SearchBar = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Busca un album, artista o canción"
        className="border"
      />

      <button>x</button>
    </div>
  );
};

export const SearchResults = () => {
  return (
    <div>
      Resultados

      <div>
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </div>
    </div>
  );
};

export const ResultItem = () => {
  return (
    <div>
      <img src="" alt="" />
      <h3>Nombre</h3>
      <p>Escuchado por 1000 personas</p>
    </div>
  )
};
