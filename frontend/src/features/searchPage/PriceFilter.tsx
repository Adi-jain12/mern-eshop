import { Label } from '@/components/ui/label';
import { priceOptions } from '@/config/products-filter-options';

const PriceFilter = () => {
	return (
		<div className="border-b border-slate-300">
			<h4 className="text-md font-bold mb-2">Price Range</h4>
			{priceOptions.map((range) => (
				<div key={range.id} className="flex">
					<input
						id={`price_${range.label}`}
						type="checkbox"
						value={range.max}
					/>
					<Label
						htmlFor={`price_${range.label}`}
						className="flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-1 font-semibold"
					>
						{range.label}
					</Label>
				</div>
			))}
		</div>
	);
};

export default PriceFilter;
