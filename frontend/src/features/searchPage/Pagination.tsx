import { PAGE_COUNT } from '@/config/constants';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';

type Props = {
	count: number;
};

const buttonStyle =
	'bg-slate-100 border-none rounded-sm font-medium text-base flex items-center justify-center gap-1 p-1.5 transition-all duration-300 hover:bg-slate-400 hover:text-slate-700';

const Pagination = ({ count }: Props) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const currPage = !searchParams.get('page')
		? 1
		: Number(searchParams.get('page'));

	const totalPages = Math.ceil(count / PAGE_COUNT);

	const handlePreviousPage = () => {
		const previous = currPage === 1 ? currPage : currPage - 1;

		searchParams.set('page', previous.toString());
		setSearchParams(searchParams);
	};

	const handleNextPage = () => {
		const next = currPage === totalPages ? currPage : currPage + 1;

		searchParams.set('page', next.toString());
		setSearchParams(searchParams);
	};

	return (
		<div className="w-full flex items-center justify-center ">
			<div className="flex gap-2 items-center">
				<button
					className={buttonStyle}
					onClick={handlePreviousPage}
					disabled={currPage === 1}
				>
					<HiChevronLeft />
					<span>Previous</span>
				</button>

				<p className="text-base mx-2">
					Page <span> {currPage} </span> of <span> {totalPages} </span>
				</p>

				<button
					className={buttonStyle}
					onClick={handleNextPage}
					disabled={currPage === totalPages}
				>
					<span>Next</span>
					<HiChevronRight />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
