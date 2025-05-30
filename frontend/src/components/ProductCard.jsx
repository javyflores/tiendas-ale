// frontend/src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ producto }) {
  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={`/images/${producto.id === 1 ? 'nike_airmax.jpg' : 
              producto.id === 2 ? 'adidas_ultraboost.jpg' : 
              producto.id === 3 ? 'puma_rsx.jpg' : 
              'newbalance_574.jpg'}`} 
        alt={producto.nombre} 
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="text-success mb-2">Bs. {parseFloat(producto.precio).toFixed(2)}</p>
        <p className="text-muted small mb-2">Marca: {producto.marca}</p>
        <p className="text-muted small mb-2">Deporte: {producto.deporte}</p>
        <a href={`/producto/${producto.id}`} className="btn btn-outline-primary mt-auto">Ver detalles</a>
      </div>
    </div>
  );
}

export default ProductCard;