CREATE DATABASE "tiendas-ale"
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'Spanish_Venezuela.1252'
       LC_CTYPE = 'Spanish_Venezuela.1252'
       CONNECTION LIMIT = -1;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    direccion TEXT,
    telefono VARCHAR(20),
    rol VARCHAR(20) DEFAULT 'cliente', -- cliente, admin, vendedor
    activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    categoria_id INT REFERENCES categorias(id),
    stock INT NOT NULL DEFAULT 0,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    marca VARCHAR(100),
    tallas TEXT, -- Ej: ["38", "39", "40"]
    destacado BOOLEAN DEFAULT FALSE,
    colores TEXT, -- Ej: ["Negro", "Blanco"]
    deporte VARCHAR(50),
    rating DECIMAL(3,2) DEFAULT 0,
    vistas INT DEFAULT 0
);

CREATE TABLE estados_pedido (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL -- Pendiente, En proceso, Enviado, Entregado, Cancelado
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado_id INT REFERENCES estados_pedido(id),
    total DECIMAL(10,2) NOT NULL,
    direccion_envio TEXT NOT NULL
);


CREATE TABLE detalles_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id INT REFERENCES pedidos(id),
    producto_id INT REFERENCES productos(id),
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL
);

CREATE TABLE reseñas (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    producto_id INT REFERENCES productos(id),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comentario TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cupones (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    descuento_porcentaje DECIMAL(5,2),
    descuento_fijo DECIMAL(10,2),
    fecha_expiracion DATE,
    usado BOOLEAN DEFAULT FALSE
);

CREATE TABLE carrito (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    producto_id INT REFERENCES productos(id),
    cantidad INT NOT NULL,
    talla VARCHAR(10),
    color VARCHAR(50),
    fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE promociones
(
  id serial NOT NULL,
  titulo character varying(150) NOT NULL,
  descripcion text,
  imagen_url character varying(255),
  categoria character varying(100),
  link_destino character varying(255),
  activo boolean DEFAULT true,
  CONSTRAINT promociones_pkey PRIMARY KEY (id)
)