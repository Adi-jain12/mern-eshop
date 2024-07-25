import CategoryFilter from './CategoryFilter';
import DiscountFilter from './DiscountFilter';
import PriceFilter from './PriceFilter';

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
					<h3 className="text-md font-bold">Filters</h3>
					<h3 className="text-sm font-semibold underline cursor-pointer text-blue-500">
						Reset Filters
					</h3>
				</div>

				<div className="space-y-5">
					<CategoryFilter />
					<PriceFilter />
					<DiscountFilter />
				</div>
			</div>
		</>
	);
};

export default Filters;
