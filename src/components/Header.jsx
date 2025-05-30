import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 text-primary">Tiendas Ale 👟</h1>
        <nav>
          <ul className="d-flex gap-4 list-unstyled mb-0">
            <li><a href="/" className="text-decoration-none text-dark">Inicio</a></li>
            <li><a href="/productos" className="text-decoration-none text-dark">Productos</a></li>
            <li><a href="/carrito" className="text-decoration-none text-dark">Carrito</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;