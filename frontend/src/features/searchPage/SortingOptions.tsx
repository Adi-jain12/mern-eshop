const SORT_OPTIONS = [
	{ label: 'Sort By', value: '' },
	{
		label: 'Price : Low to High',
		value: 'regularPrice-asc',
	},
	{
		label: 'Price : High to Low',
		value: 'regularPrice-desc',
	},

	{
		label: 'With Discount',
		value: 'with-discount',
	},

	{
		label: 'Highest Ratings',
		value: 'ratings-desc',
	},
];

type Props = {
	selectedSortingOption?: string;
	onChangeOption: (value?: string) => void;
};

const SortingOptions = ({ selectedSortingOption, onChangeOption }: Props) => {
	return (
		<div>
			<select
				className="p-2 border rounded-md w-full"
				value={selectedSortingOption}
				onChange={(event) =>
					onChangeOption(event.target.value ? event.target.value : undefined)
				}
			>
				{SORT_OPTIONS.map((option) => (
					<option value={option.value} key={option.label}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SortingOptions;
