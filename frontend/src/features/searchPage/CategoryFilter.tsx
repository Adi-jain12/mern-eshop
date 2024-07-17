import { Label } from "@/components/ui/label";
import { categoriesOptions } from "@/config/products-filter-options";

const CategoryFilter = () => {
  return (
    <div className="flex flex-col border-b border-slate-300">
      <div className="text-md font-bold mb-2">Categories</div>
      <div className="flex flex-col mb-4">
        {categoriesOptions.map((category) => (
          <div className="flex">
            <input
              id={`category_${category}`}
              type="checkbox"
              // checked={selectedCategories.includes(category)}
              value={category}
              //   onChange={handleCategoriesFilterChange}
            />

            <Label
              htmlFor={`category_${category}`}
              className="flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-1 font-semibold"
            >
              {category}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
