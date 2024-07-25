import { Label } from '@/components/ui/label';
import { discountOptions } from '@/config/products-filter-options';

const DiscountFilter = () => {
	return (
		<div className="border-b border-slate-300">
			<h4 className="text-md font-bold mb-2">Discount Range</h4>
			{discountOptions.map((discount) => (
				<div key={discount.id} className="flex">
					<input
						id={`discount_${discount.label}`}
						type="checkbox"
						// checked={selectedCategories.includes(category)}
						value={discount.min}
						//   onChange={handleCategoriesFilterChange}
					/>

					<Label
						htmlFor={`discount_${discount.label}`}
						className="flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-1 font-semibold"
					>
						{discount.label}
					</Label>
				</div>
			))}
		</div>
	);
};

export default DiscountFilter;
