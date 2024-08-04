import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const Cart = () => {
	const cartDetails = useSelector((state): RootState => state.cart.cart);

	console.log(cartDetails);

	return (
		<div className="flex flex-col bg-white shadow-lg rounded-lg p-6">
			{cartDetails.map((item) => (
				<div key={item._id} className="flex space-x-4 border mb-5">
					<div className="w-40 h-40">
						<img
							src={item.imageSrc}
							alt="Product"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex-1">
						<div>
							<h2 className="text-2xl font-semibold text-gray-800">
								{item.name}
							</h2>
							<p className="text-gray-600 mt-2">₹{item.unitPrice}</p>
							<div className="mt-4 flex items-center mx-6 justify-between">
								<div>
									<button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
										-
									</button>
									<input
										type="number"
										className="border border-gray-300 rounded px-2 py-2 text-center w-16"
										value={item.quantity}
									/>
									<button className="bg-gray-200 px-2 py-2 rounded hover:bg-gray-300">
										+
									</button>
								</div>
							</div>
							<div>
								<button className=" bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
									Remove
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cart;
