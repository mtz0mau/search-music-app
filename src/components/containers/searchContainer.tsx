import { SearchBar, SearchResults } from '../ui/search';
import { useData } from '../../hooks';

export const SearchBarContainer = () => {
  const { query, setQuery, data } = useData();
  return <SearchBar query={query} setQuery={setQuery} total_data={data.length} />;
};

export const SearchResultsContainer = () => {
  const { data, query } = useData();
  return <SearchResults data={data} query={query} />;
};
