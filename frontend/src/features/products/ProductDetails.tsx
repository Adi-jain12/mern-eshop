import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = ({ onAddtoCart }) => {
	const [addtoCart, setAddtoCart] = useState(false);

	return (
		<div className="border-b-2 border-slate-200 pb-8">
			<div className="text-xl font-bold">Westside</div>
			<div className="text-md text-gray-500">
				Men Slim Fit Checked Pure Cotton Formal Shirt
			</div>

			<div className="flex items-center max-w-full mt-4 mb-6">
				<div className="flex items-center border-2 border-gray-200 p-1 px-2 rounded-sm">
					<div className="text-md font-semibold">4.4</div>
					<div className="mx-2 text-gray-400">|</div>
					<div className="flex gap-1 text-gray-500">
						<span className="text-sm">10000</span>
						<span className="text-sm">ratings</span>
					</div>
				</div>
			</div>

			<span className="text-md font-bold text-gray-700">SELECT SIZE</span>
			<div className="text-md font-bold">
				<div className="flex gap-6 mt-4">
					<button className="border-2 hover:border-slate-300 hover:bg-slate-300 px-4 py-2 rounded-lg">
						1
					</button>
					<button className="border-2 hover:border-slate-300 hover:bg-slate-300 px-4 py-2 rounded-lg">
						2
					</button>
					<button className="border-2 hover:border-slate-300 hover:bg-slate-300 px-4 py-2 rounded-lg">
						3
					</button>
					<button className="border-2 hover:border-slate-300 hover:bg-slate-300 px-4 py-2 rounded-lg">
						4
					</button>
				</div>
			</div>

			<div className="flex items-center gap-4 mt-10 text-white font-semibold">
				{addtoCart ? (
					<Link to="/checkout" className="bg-red-500 p-3 w-[200px] rounded-lg">
						GO TO CART
					</Link>
				) : (
					<button
						className="bg-red-500 p-3 w-[200px] rounded-lg"
						onClick={onAddtoCart}
					>
						ADD TO BAG
					</button>
				)}
				<button className="bg-teal-500 p-3 rounded-lg w-[120px]">
					WISHLIST
				</button>
			</div>
		</div>
	);
};

export default ProductDetails;
