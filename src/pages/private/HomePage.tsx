import {
  SearchBarContainer,
  SearchPaginationContainer,
  SearchResultsContainer,
} from "../../components/containers/searchContainer";
import { DataProvider } from "../../contexts";

export default function HomePage() {
  return (
    <DataProvider>
      <div className="grid gap-8">
        <div className="flex justify-center">
          <SearchBarContainer />
        </div>
        <SearchResultsContainer />

        <SearchPaginationContainer />
      </div>
    </DataProvider>
  );
}
