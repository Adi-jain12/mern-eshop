import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './features/ui/AppLayout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PageNotFoundPage from './pages/PageNotFoundPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route element={<AppLayout showHero={false} />}> */}
				<Route index element={<Navigate replace to="home" />} />
				<Route
					path="home"
					element={
						<AppLayout showHero={true}>
							<HomePage />
						</AppLayout>
					}
				/>
				<Route
					path="products"
					element={
						<AppLayout>
							<ProductsPage />
						</AppLayout>
					}
				/>
				<Route
					path="search"
					element={
						<AppLayout>
							<SearchPage />
						</AppLayout>
					}
				/>

				<Route
					path="details/:id"
					element={
						<AppLayout>
							<ProductDetailsPage />
						</AppLayout>
					}
				/>

				<Route path="checkout" element={<CheckoutPage />} />
				{/* </Route> */}

				<Route path="*" element={<PageNotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
