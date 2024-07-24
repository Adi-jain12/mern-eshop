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
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="products" element={<Products />} />
        </Route>

        <Route path="search" element={<SearchPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
