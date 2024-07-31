export type Product = {
	_id: string;
	user: string;
	productName: string;
	city: string;
	country: string;
	deliveryPrice: number;
	estimatedDeliveryTime: number;
	cuisines: string[];
	imageUrl: string;
	lastUpdated: string;
};
