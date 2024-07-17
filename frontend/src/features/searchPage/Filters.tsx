import CategoryFilter from "./CategoryFilter";

const Filters = () => {
  // const handleCategoriesFilterChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   // const clickedCategory = event.target.value;
  //   // const isChecked = event.target.checked;
  //   // const newCategoriesFiltersList = isChecked
  //   //   ? [...selectedCategories, clickedCategory]
  //   //   : selectedCategories.filter((category) => category !== clickedCategory);
  // };

  return (
    <>
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10 my-6">
        <div className="flex justify-between items-center border-b border-slate-300 py-4">
          <div className="text-md font-bold">Filters</div>
          <div className="text-sm font-semibold underline cursor-pointer text-blue-500">
            Reset Filters
          </div>
        </div>

        <div className="space-y-2 flex flex-col my-4 text-md font-bold">
          <CategoryFilter />
          <div className="text-md font-bold">Price</div>
          <div className="text-md font-bold">Discount Range</div>
        </div>
      </div>
    </>
  );
};

export default Filters;
