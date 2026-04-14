// src/routes/centroRoutes.js
const express = require('express');
const router = express.Router();
const centroController = require('../controllers/centroController');

// Rutas para Centros de Acopio
router.get('/centros', centroController.listarCentros);
router.get('/centros/:id', centroController.obtenerCentroPorId);
router.post('/centros', centroController.crearCentro);
router.put('/centros/:id', centroController.actualizarCentro);
router.delete('/centros/:id', centroController.eliminarCentro);

module.exports = router;
