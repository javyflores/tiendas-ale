// frontend/src/components/CategorySection.jsx
import React from 'react';

function CategorySection() {
  const categories = [
    {
      nombre: "Damas",
      imagen: "/images/damas.jpg",
      link: "/categoria/damas"
    },
    {
      nombre: "Caballeros",
      imagen: "/images/caballeros.jpg",
      link: "/categoria/caballeros"
    },
    {
      nombre: "Niños",
      imagen: "/images/ninos.jpg",
      link: "/categoria/ninos"
    }
  ];

  return (
    <div className="row g-4 justify-content-center">
      {categories.map((cat, idx) => (
        <div key={idx} className="col-md-3 col-sm-6">
          <a href={cat.link} className="text-decoration-none text-dark">
            <div className="card shadow-sm h-100 text-center">
              <img
                src={cat.imagen}
                alt={cat.nombre}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{cat.nombre}</h5>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;