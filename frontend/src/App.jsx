// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductDetailRopa from './pages/ProductDetailRopa';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/zapato/:id" element={<ProductDetail />} />
          <Route path="/producto/ropa/:id" element={<ProductDetailRopa />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;