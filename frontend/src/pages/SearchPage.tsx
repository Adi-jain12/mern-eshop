import Filters from "@/features/searchPage/Filters";
import MainContent from "@/features/searchPage/MainContent";

const SearchPage = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="products-list">
        <Filters />
      </div>
      <div id="main-content">
        <MainContent />
      </div>
    </div>
  );
};

export default SearchPage;
