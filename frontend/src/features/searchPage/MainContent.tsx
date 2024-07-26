import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';
import SearchResultInfo from './SearchResultInfo';
import SortingOptions from './SortingOptions';

const MainContent = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const sortBy = searchParams.get('sortBy' || '');

	const handleSortingOptionChange = (value?: string) => {
		if (value) searchParams.set('sortBy', value);
		else searchParams.delete('sortBy'); // for handling where sortByValue can be undefined

		setSearchParams(searchParams);
	};

	const selectedSortingOption = sortBy || undefined;

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col justify-between gap-3 lg:flex-row">
				<SearchResultInfo />
				<SortingOptions
					selectedSortingOption={selectedSortingOption}
					onChangeOption={handleSortingOptionChange}
				/>
			</div>

			<div>Content</div>
			<Pagination />
		</div>
	);
};

export default MainContent;
