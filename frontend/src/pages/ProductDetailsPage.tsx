import ProductDetails from '@/features/products/ProductDetails';
import { useState } from 'react';
import { useParams } from 'react-router';

export type CartItem = {
	_id: string;
	name: string;
	price: string;
	quantity: number;
};

const ProductDetailsPage = () => {
	const { productId } = useParams();

	const [cartItems, setCartItems] = useState<CartItem[]>();

	return (
		<div className="grid grid-cols-[30rem_1fr] h-screen">
			<div className="bg-slate-200">Image</div>

			<div className="flex flex-col m-12">
				<ProductDetails onAddtoCart={() => setCartItems(item)} />

				<div className="flex flex-col mt-10 text-gray-700">
					<span className="text-md font-bold text-gray-700 mb-2">
						PRODUCT DETAILS
					</span>
					<div className="flex flex-col justify-center text-gray-600 mb-6">
						<span>Navy blue checked opaque Formal shirt</span>
						<span>Has a spread collar</span>
						<span>Button placket</span>
						<span>1 patch pocket</span>
					</div>

					<span className="text-md font-bold text-gray-700 mb-2">
						Material & Care
					</span>
					<div className="flex flex-col text-gray-600">
						<span>100% Cotton</span>
						<span>Machine-wash</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsPage;
