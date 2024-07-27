import CategoryFilter from '@/features/searchPage/CategoryFilter';
import DiscountFilter from '@/features/searchPage/DiscountFilter';
import MainContent from '@/features/searchPage/MainContent';
import Pagination from '@/features/searchPage/Pagination';
import PriceFilter from '@/features/searchPage/PriceFilter';
import SearchResultInfo from '@/features/searchPage/SearchResultInfo';
import SortingOptions from '@/features/searchPage/SortingOptions';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const sortBy = searchParams.get('sortBy') || '';

	const handleSortingOptionChange = (value?: string) => {
		if (value) searchParams.set('sortBy', value);
		else searchParams.delete('sortBy'); // for handling where sortByValue can be undefined

		setSearchParams(searchParams);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
			<div id="products-list">
				<div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
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
			</div>

			<div className="flex flex-col gap-5">
				<div className="flex flex-col justify-between gap-3 items-center lg:flex-row">
					<SearchResultInfo />
					<SortingOptions
						selectedSortingOption={sortBy}
						onChangeOption={handleSortingOptionChange}
					/>
				</div>

				<div>
					<MainContent />
				</div>

				<div className="">
					<Pagination count={50} />
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
