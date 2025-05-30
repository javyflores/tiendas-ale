// backend/routes/promoRoutes.js
const express = require('express');
const router = express.Router();
const promoController = require('../controllers/promoController');

router.get('/promos', promoController.getPromos);

module.exports = router;