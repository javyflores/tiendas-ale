// backend/controllers/promoController.js
const Promo = require('../models/Promo');

const getPromos = async (req, res) => {
  try {
    const promos = await Promo.getAll();
    res.json(promos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error al obtener promociones');
  }
};

module.exports = { getPromos };