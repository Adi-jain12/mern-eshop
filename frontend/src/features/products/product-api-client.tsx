import { Product } from '@/types';
import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useFetchProductDetails = (productId?: string) => {
	const getProductDetails = async (): Promise<Product> => {
		const response = await fetch(`${API_BASE_URL}/api/restaurant/${productId}`);

		if (!response.ok) {
			throw new Error('Error getting product');
		}

		return response.json();
	};

	const { data: productDetails, isLoading } = useQuery(
		{
			queryKey: ['products'],
			queryFn: getProductDetails,
		},
		{
			enabled: !!productId,
		}
	);

	return {
		productDetails,
		isLoading,
	};
};
