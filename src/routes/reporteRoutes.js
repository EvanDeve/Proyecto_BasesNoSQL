// src/routes/reporteRoutes.js
const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

// Rutas para Reportes
router.get('/reportes', reporteController.listarReportes);
router.get('/reportes/:id', reporteController.obtenerReportePorId);
router.post('/reportes', reporteController.crearReporte);
router.put('/reportes/:id', reporteController.actualizarReporte);
router.delete('/reportes/:id', reporteController.eliminarReporte);

module.exports = router;
