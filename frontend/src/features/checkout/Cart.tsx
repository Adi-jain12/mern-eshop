import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const Cart = () => {
	const cartDetails = useSelector((state): RootState => state.cart.cart);

	console.log(cartDetails);

	return (
		<div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-6">
			{cartDetails.map((item) => (
				<div key={item._id} className="flex space-x-4">
					<img
						src="https://via.placeholder.com/150"
						alt="Product"
						className="w-40 h-40 object-cover rounded-lg"
					/>
					<div className="flex-1">
						<h2 className="text-2xl font-semibold text-gray-800">
							{item.name}
						</h2>
						<p className="text-gray-600 mt-2">₹{item.unitPrice}</p>
						<div className="mt-4 flex items-center space-x-4">
							<button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
								-
							</button>
							<input
								type="number"
								className="border border-gray-300 rounded px-4 py-2 text-center w-16"
								value={item.quantity}
							/>
							<button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
								+
							</button>
						</div>
						<button className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
							Remove product
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cart;
