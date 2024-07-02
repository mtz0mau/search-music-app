import { SearchBar, SearchResults } from '../ui/search';
import { useData } from '../../hooks';

export const SearchBarContainer = () => {
  const { query, setQuery } = useData();
  return <SearchBar query={query} setQuery={setQuery} />;
};

export const SearchResultsContainer = () => {
  const { data } = useData();
  return <SearchResults data={data} />;
};
