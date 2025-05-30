import React from 'react';

function Destacados() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h3 className="h3 text-center mb-4">Artículos más destacados</h3>
        <div className="row g-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="col-md-3">
              <div className="card h-100 shadow-sm">
                <img src="https://via.placeholder.com/300x200?text=Zapato+Deportivo " alt="Zapato" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Nike Air Max {item}</h5>
                  <p className="card-text text-success">Bs. 250.000</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destacados;