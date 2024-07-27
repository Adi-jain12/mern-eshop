import { Label } from '@/components/ui/label';
import { categoriesOptions } from '@/config/products-filter-options';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const CategoryFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [categoryParams, setCategoryParams] = useState<string[]>([]);

	useEffect(() => {
		// const categoriesString = categoryParams.join(',');
		const newSearchParams = new URLSearchParams();

		categoryParams.forEach((category) =>
			newSearchParams.append('categories', category)
		);
		// newSearchParams.set('categories', categoriesString);
		// setSearchParams(newSearchParams);
	}, [categoryParams, searchParams, setSearchParams]);

	const handleCategoriesFilterChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = event.target.value;
		setCategoryParams((prevCategories) =>
			event.target.checked
				? [...prevCategories, value]
				: prevCategories.filter((category) => category !== value)
		);
	};

	return (
		<div className="border-b border-slate-300">
			<h4 className="text-md font-bold mb-2">Categories</h4>
			{categoriesOptions.map((category) => (
				<div key={category.id} className="flex">
					<input
						id={`category_${category.label}`}
						type="checkbox"
						className="rounded"
						checked={categoryParams.includes(category.label)}
						value={category.label}
						onChange={handleCategoriesFilterChange}
					/>

					<Label
						htmlFor={`category_${category.label}`}
						className="flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-1 font-semibold"
					>
						{category.label}
					</Label>
				</div>
			))}
		</div>
	);
};

export default CategoryFilter;
