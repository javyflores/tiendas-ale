// frontend/src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import PromoCarousel from '../components/PromoCarousel';
import CategorySection from '../components/CategorySection';

function Home() {
  const [zapatos, setZapatos] = useState([]);
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    fetchProductos();
    fetchPromos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/productos');
      const data = await response.json();
      setZapatos(data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  const fetchPromos = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/promos');
      const data = await response.json();
      setPromos(data);
    } catch (error) {
      console.error('Error al cargar promociones:', error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">¡Sueña en grande!</h1>
          <p className="lead">Compra zapatos deportivos importados de calidad al mejor precio.</p>
        </div>

        {/* Carrusel Dinámico */}
        <div className="container mt-4">
          <PromoCarousel promos={promos} />
        </div>
      </section>

      {/* Destacados */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="h3 text-center mb-4">Artículos más destacados</h2>
          <div className="row g-4">
            {zapatos.map((producto) => (
              <div key={producto.id} className="col-md-3">
                <ProductCard producto={producto} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías por Género */}
      <section className="py-5">
        <div className="container">
          <h2 className="h3 text-center mb-4">Categorías por Género</h2>
          <CategorySection />
        </div>
      </section>

      {/* Footer */}
    </>
  );
}

export default Home;