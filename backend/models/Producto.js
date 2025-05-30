// backend/models/Producto.js
const pool = require('../config/db');

const Producto = {
  // Obtener todos los productos
  getAll: async () => {
    const result = await pool.query('SELECT * FROM productos');
    return result.rows;
  },

  // Obtener un producto por ID
  getById: async (id) => {
    const result = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
    return result.rows[0];
  },

  // Crear un nuevo producto
  create: async (producto) => {
    const {
      nombre,
      descripcion,
      precio,
      imagen_url,
      categoria_id,
      stock,
      marca,
      tallas,
      destacado,
      colores,
      deporte
    } = producto;

    const result = await pool.query(
      `INSERT INTO productos 
      (nombre, descripcion, precio, imagen_url, categoria_id, stock, marca, tallas, destacado, colores, deporte)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *`,
      [nombre, descripcion, precio, imagen_url, categoria_id, stock, marca, tallas, destacado, colores, deporte]
    );

    return result.rows[0];
  },

  // Actualizar un producto
  update: async (id, producto) => {
    const {
      nombre,
      descripcion,
      precio,
      imagen_url,
      categoria_id,
      stock,
      marca,
      tallas,
      destacado,
      colores,
      deporte
    } = producto;

    const result = await pool.query(
      `UPDATE productos SET
        nombre = $1,
        descripcion = $2,
        precio = $3,
        imagen_url = $4,
        categoria_id = $5,
        stock = $6,
        marca = $7,
        tallas = $8,
        destacado = $9,
        colores = $10,
        deporte = $11
      WHERE id = $12
      RETURNING *`,
      [nombre, descripcion, precio, imagen_url, categoria_id, stock, marca, tallas, destacado, colores, deporte, id]
    );

    return result.rows[0];
  },

  // Eliminar un producto
  delete: async (id) => {
    const result = await pool.query('DELETE FROM productos WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Producto;