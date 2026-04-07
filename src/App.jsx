import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import ProductDetailPage from './components/ProductDetailPage';
import BrowseCategoriesPage from './components/BrowseCategoriesPage';
import CheckoutPage from './components/CheckoutPage';
import ProductListingPage from './components/ProductListingPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/categories" element={<BrowseCategoriesPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/medicines" element={<ProductListingPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsAndConditionsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/shipping-policy" element={<ShippingPolicyPage />} />



      </Routes>
    </Router>
  );
}

export default App;
