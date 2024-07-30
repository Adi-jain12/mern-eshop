const Checkout = () => {
	return (
		<div className="mx-4 flex flex-col shadow-lg p-10 h-screen">
			<div className="flex flex-col">
				<span className="text-md font-bold text-gray-700 mb-2">
					Price details
				</span>

				<div className="flex flex-col gap-2 mb-8 text-sm">
					<span className="flex justify-between">
						<span>Price on MRP</span>
						<span>₹2000</span>
					</span>
					<span className="flex justify-between">
						<span>Discount</span>
						<span>₹2000</span>
					</span>
					<span className="flex justify-between">
						<span>Delivery Fee</span>
						<span>₹2000</span>
					</span>
					<span className="flex justify-between">
						<span>Price</span>
						<span>₹2000</span>
					</span>
				</div>
			</div>

			<span className="flex justify-between font-bold">
				<span>Total Amount</span>
				<span>₹4000</span>
			</span>

			<button className="p-2 mt-4 border-2 border-slate-600 items-center justify-center hover:bg-red-500">
				Place order
			</button>
		</div>
	);
};

export default Checkout;
