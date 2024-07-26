import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './features/ui/AppLayout';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import Products from './pages/Products';
import SearchPage from './pages/SearchPage';

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
							<Products />
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
				{/* </Route> */}

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
