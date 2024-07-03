import { SearchBar, SearchResults, SearchPagination } from "../ui/search";
import { useData } from "../../hooks";

export const SearchBarContainer = () => {
  const { query, setQuery, total_data } = useData();
  return (
    <SearchBar query={query} setQuery={setQuery} total_data={total_data} />
  );
};

export const SearchResultsContainer = () => {
  const { data, query } = useData();
  return <SearchResults data={data} query={query} />;
};

export const SearchPaginationContainer = () => {
  const { page, total_data, setPage } = useData();
  return (
    <SearchPagination page={page} total_data={total_data} setPage={setPage} />
  );
};
