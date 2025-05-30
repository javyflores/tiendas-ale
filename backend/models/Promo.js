// backend/models/Promo.js
const pool = require('../config/db');

const Promo = {
  getAll: async () => {
    const result = await pool.query('SELECT * FROM promociones WHERE activo = TRUE');
    return result.rows;
  }
};

module.exports = Promo;