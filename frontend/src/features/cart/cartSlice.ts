import { createSlice } from '@reduxjs/toolkit';

type Cart = {
	id: number;
	name: string;
	quantity: number;
	imageSrc: string;
	imageAlt: string;
	unitPrice: number;
	totalPrice: number;
	color: string;
};

type CartState = {
	cart: Cart[];
	isAdded: boolean;
};

const initialState: CartState = {
	cart: [
		{
			id: 1,
			name: 'Basic Tee',
			quantity: 1,
			imageSrc:
				'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
			imageAlt: "Front of men's Basic Tee in black.",
			unitPrice: 400,
			totalPrice: 400,
			color: 'Black',
		},

		// {
		// 	id: 2,
		// 	name: 'Basic Tee',
		// 	href: '#',
		// 	imageSrc:
		// 		'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		// 	imageAlt: "Front of men's Basic Tee in black.",
		// 	price: '$35',
		// 	color: 'Black',
		// },
		// {
		// 	id: 3,
		// 	name: 'Basic Tee',
		// 	href: '#',
		// 	imageSrc:
		// 		'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		// 	imageAlt: "Front of men's Basic Tee in black.",
		// 	price: '$35',
		// 	color: 'Black',
		// },
		// {
		// 	id: 4,
		// 	name: 'Basic Tee',
		// 	href: '#',
		// 	imageSrc:
		// 		'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		// 	imageAlt: "Front of men's Basic Tee in black.",
		// 	price: '$35',
		// 	color: 'Black',
		// },
		// {
		// 	id: 5,
		// 	name: 'Basic Tee',
		// 	href: '#',
		// 	imageSrc:
		// 		'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		// 	imageAlt: "Front of men's Basic Tee in black.",
		// 	price: '$35',
		// 	color: 'Black',
		// },
	],
	isAdded: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			// action.payload = {...}
			state.cart.push(action.payload);
			state.isAdded = true;
		},
		removeItem(state, action) {
			// action.payload = productId
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},
		increaseItemQuantity(state, action) {
			const itemInCart = state.cart.find((item) => item.id === action.payload);

			if (itemInCart) {
				itemInCart.quantity++;
				itemInCart.totalPrice = itemInCart?.unitPrice * itemInCart?.quantity;
			}
		},
		decreaseItemQuantity(state, action) {
			const itemInCart = state.cart.find((item) => item.id === action.payload);

			if (itemInCart) {
				itemInCart.quantity--;
				itemInCart.totalPrice = itemInCart.quantity * itemInCart.unitPrice;
			}
		},
		clearCart(state) {
			state.cart = [];
		},
	},
});

export const {
	addItem,
	removeItem,
	increaseItemQuantity,
	decreaseItemQuantity,
	clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
