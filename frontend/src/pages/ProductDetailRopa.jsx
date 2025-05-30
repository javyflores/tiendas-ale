// frontend/src/pages/ProductDetailRopa.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProductDetailRopa() {
  const producto = {
    id: 101,
    nombre: "Camiseta Dry-Fit",
    marca: "Nike",
    tipo: "Camiseta",
    precio: 70000,
    descripcion: "Camiseta transpirable y cómoda para entrenamientos intensos.",
    tallas: ["S", "M", "L", "XL"],
    colores: ["Rojo", "Negro", "Azul"],
    genero: "Unisex"
  };

  return (
    <>
      <Navbar />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <img 
                src="/images/ropa_deportiva.jpg" 
                alt={producto.nombre} 
                className="w-100 h-auto rounded"
              />
            </div>
            <div className="col-md-6">
              <h2>{producto.nombre}</h2>
              <p className="text-muted">Marca: <strong>{producto.marca}</strong></p>
              <p className="text-muted">Tipo: <strong>{producto.tipo}</strong></p>
              <p className="text-muted">Género: <strong>{producto.genero}</strong></p>
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

export default ProductDetailRopa;