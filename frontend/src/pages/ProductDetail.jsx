// frontend/src/pages/ProductDetail.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProductDetail() {
  const producto = {
    id: 1,
    nombre: "Nike Air Max",
    marca: "Nike",
    deporte: "Running",
    precio: 250000,
    descripcion: "Zapatilla Nike Air Max 270, ideal para correr con comodidad y estilo.",
    tallas: ["38", "39", "40", "41"],
    colores: ["Negro", "Blanco"],
  };

  return (
    <>
      <Navbar />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <img 
                src="/images/nike_airmax.jpg" 
                alt={producto.nombre} 
                className="w-100 h-auto rounded"
              />
            </div>
            <div className="col-md-6">
              <h2>{producto.nombre}</h2>
              <p className="text-muted">Marca: <strong>{producto.marca}</strong></p>
              <p className="text-muted">Deporte: <strong>{producto.deporte}</strong></p>
              <hr />
              <h4 className="text-success">Bs. {parseFloat(producto.precio).toFixed(2)}</h4>
              <p className="mt-3">{producto.descripcion}</p>

              <div className="mt-3">
                <strong>Colores:</strong>
                <ul className="list-inline">
                  {producto.colores.map((color, idx) => (
                    <li key={idx} className="list-inline-item badge bg-primary me-1">{color}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-3">
                <strong>Tallas Disponibles:</strong>
                <div className="btn-group mt-2" role="group">
                  {producto.tallas.map((talla, idx) => (
                    <input key={idx} type="radio" className="btn-check" name="btnradio" id={`talla-${talla}`} autoComplete="off" />
                  ))}
                </div>
              </div>

              <button className="btn btn-primary btn-lg mt-4">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetail;