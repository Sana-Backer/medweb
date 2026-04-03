import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import ProductDetailPage from './components/ProductDetailPage';
import BrowseCategoriesPage from './components/BrowseCategoriesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/categories" element={<BrowseCategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
