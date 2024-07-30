import Cart from '@/features/checkout/Cart';
import Checkout from '@/features/checkout/Checkout';

const CheckoutPage = () => {
	return (
		<div className="container mx-auto grid grid-cols-[55rem_1fr]">
			<Cart />
			<Checkout />
		</div>
	);
};

export default CheckoutPage;
