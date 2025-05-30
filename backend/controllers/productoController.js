// backend/controllers/productoController.js
const Producto = require('../models/Producto');

const getProductos = async (req, res) => {
  try {
    const productos = await Producto.getAll();
    res.json(productos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error al obtener productos');
  }
};

const getProductoById = async (req, res) => {
  try {
    const producto = await Producto.getById(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(producto);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error al obtener el producto');
  }
};

module.exports = { getProductos, getProductoById };