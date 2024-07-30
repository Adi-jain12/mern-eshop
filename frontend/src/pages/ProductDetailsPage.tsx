const ProductDetailsPage = () => {
	return (
		<div className="grid grid-cols-[30rem_1fr] h-screen">
			<div className="bg-slate-200">Image</div>

			<div className="flex flex-col m-12">
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
						<button className="bg-red-500 p-3 w-[200px] rounded-lg">
							ADD TO BAG
						</button>
						<button className="bg-teal-500 p-3 rounded-lg w-[120px]">
							WISHLIST
						</button>
					</div>
				</div>

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
