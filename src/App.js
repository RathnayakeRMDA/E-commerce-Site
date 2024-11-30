import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import { AuthProvider } from './context/AuthContext';
import ContactUsPage from './components/Pages/ContactUs';
import AboutUsPage from './components/Pages/AboutUs';
import TopSalePage from './components/Pages/TopSalePage';
import SalePage from './components/Pages/SalePage';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import TermsOfService from './components/Pages/TermsOfService';
import LandingPage from './components/Pages/LandingPage';
import PlaceOrder from './components/Cart/PlaceOrder';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/top-sale" element={<TopSalePage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
