// backend/server.js
const express = require('express');
const cors = require('cors');
const pool = require('./config/db');
const productoRoutes = require('./routes/productoRoutes');
const promoRoutes = require('./routes/promoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', productoRoutes);
app.use('/api', promoRoutes); // Ejemplo: /api/promos

// Puerto
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});