import React from 'react';

function Categorias() {
  const cats = ['Damas', 'Caballeros', 'Niños'];
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="h3 text-center mb-4">Categorías</h3>
        <div className="row g-4 justify-content-center">
          {cats.map((cat) => (
            <div key={cat} className="col-md-3">
              <div className="card bg-light text-center p-4 h-100">
                <h4 className="h5">{cat}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categorias;