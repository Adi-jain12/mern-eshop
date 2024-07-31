import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './features/ui/AppLayout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PageNotFoundPage from './pages/PageNotFoundPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Tanstack query configuration
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 60 * 1000, //to set cache time for how long the queries should stay fresh here i.e 60 seconds
			staleTime: 0, //to set cache time for how long the queries should stay fresh here i.e 0 seconds
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
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
						path="details/:productId"
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
		</QueryClientProvider>
	);
}

export default App;
