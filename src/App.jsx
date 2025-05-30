import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destacados from './components/Destacados';
import Categorias from './components/Categorias';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Destacados />
      <Categorias />
      <Footer />
    </div>
  );
}

export default App;