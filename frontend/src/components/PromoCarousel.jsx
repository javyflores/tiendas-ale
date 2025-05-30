// frontend/src/components/PromoCarousel.jsx
import React from 'react';

function PromoCarousel({ promos }) {
  if (!promos.length) return null;

  return (
    <div id="promoCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner d-flex align-items-center">
        {promos.map((promo, index) => (
          <div key={promo.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <a href={promo.link_destino} className="text-decoration-none text-white w-100">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={promo.imagen_url}
                  alt={promo.titulo}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{promo.titulo}</h5>
                  <p className="card-text text-muted small">{promo.descripcion}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Botones de desplazamiento */}
      <button className="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>

      {/* Indicadores (opcional) */}
      <div className="carousel-indicators">
        {promos.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#promoCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default PromoCarousel;