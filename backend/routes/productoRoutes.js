// backend/routes/productoRoutes.js
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Rutas
router.get('/productos', productoController.getProductos);
router.get('/productos/:id', productoController.getProductoById);

// Opcional: agrega estas si planeas crear/editar/eliminar productos
router.post('/productos', async (req, res) => {
  try {
    const producto = await pool.query(
      `INSERT INTO productos 
      (nombre, descripcion, precio, imagen_url, categoria_id, stock, marca, tallas, destacado, colores, deporte)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *`,
      [
        req.body.nombre,
        req.body.descripcion,
        req.body.precio,
        req.body.imagen_url,
        req.body.categoria_id,
        req.body.stock,
        req.body.marca,
        req.body.tallas,
        req.body.destacado,
        req.body.colores,
        req.body.deporte
      ]
    );
    res.status(201).json(producto.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/productos/:id', async (req, res) => {
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
  } = req.body;

  try {
    const producto = await pool.query(
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
      [nombre, descripcion, precio, imagen_url, categoria_id, stock, marca, tallas, destacado, colores, deporte, req.params.id]
    );

    if (producto.rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(producto.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/productos/:id', async (req, res) => {
  try {
    const producto = await pool.query('DELETE FROM productos WHERE id = $1 RETURNING *', [req.params.id]);
    if (producto.rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;