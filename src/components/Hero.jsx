import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center bg-primary">
      <div className="container">
        <h2 className="display-5 fw-bold mb-3">¡Sueña en grande!</h2>
        <p className="lead mb-4">Compra zapatos deportivos importados de calidad al mejor precio.</p>
        <a href="/productos" className="btn btn-light btn-lg">Ver productos</a>
      </div>
    </section>
  );
}

export default Hero;