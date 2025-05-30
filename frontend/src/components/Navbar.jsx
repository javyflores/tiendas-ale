// frontend/src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="/">Tiendas Ale 👟</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="/productos">Productos</a></li>
            <li className="nav-item"><a className="nav-link" href="/carrito">Carrito</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
