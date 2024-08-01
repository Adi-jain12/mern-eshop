import { Product } from '@/types';
import { Link } from 'react-router-dom';

type Props = {
	product: Product;
};

const ProductCard = ({ product }: Props) => {
	return (
		<Link
			to={`/details/${product._id}`}
			key={product._id}
			className="group relative"
		>
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
				<img
					alt={`${product.name} ${product.description}`}
					src={product.imageSrc}
					className="h-full w-full object-cover object-center lg:h-full lg:w-full"
				/>
			</div>
			<div className="mt-3 px-3 flex flex-col justify-between">
				<div className="mb-2">
					<h3 className="text-md font-bold text-gray-800">
						<span aria-hidden="true" className="absolute inset-0" />
						{product.name}
					</h3>
					<h3 className="text-sm text-gray-700">
						<span aria-hidden="true" className="absolute inset-0" />
						{product.description}
					</h3>
				</div>
				<p className="text-sm font-bold text-gray-800">₹{product.unitPrice}</p>
			</div>
		</Link>
	);
};

export default ProductCard;
