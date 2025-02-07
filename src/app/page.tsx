import DescriptionView from "./components/description_view/description_view";
import SearchView from "./components/search_view/search_view";

export default function Home() {
  return (
    <div>
      <SearchView />
      <DescriptionView />
    </div>
  );
}
