import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useFetchProductDetails = () => {
	const { productId } = useParams();

	const getProductDetails = async (productId?: string) => {
		const response = await fetch(
			`${API_BASE_URL}/api/v1/products/${productId}`
		);

		if (!response.ok) {
			throw new Error('Error getting product');
		}

		return response.json();
	};

	const { data: productDetails, isLoading } = useQuery({
		queryKey: ['product', productId],
		queryFn: () => getProductDetails(productId),
		enabled: !!productId,
	});

	return {
		productDetails,
		isLoading,
	};
};

export const useFetchAllProducts = () => {
	const getAllProducts = async () => {
		const response = await fetch(`${API_BASE_URL}/api/v1/products`);

		if (!response.ok) {
			throw new Error('Error getting all products');
		}

		return response.json();
	};

	const { data: allProducts, isLoading } = useQuery({
		queryKey: ['products'],
		queryFn: getAllProducts,
	});

	return { allProducts, isLoading };
};
