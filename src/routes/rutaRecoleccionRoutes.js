const express = require('express');
const router = express.Router();
const rutaRecoleccionController = require('../controllers/rutaRecoleccionController');

// Rutas para Rutas de Recolección
router.get('/rutas-recoleccion', rutaRecoleccionController.listarRutas);
router.get('/rutas-recoleccion/:id', rutaRecoleccionController.obtenerRutaPorId);
router.post('/rutas-recoleccion', rutaRecoleccionController.crearRuta);
router.put('/rutas-recoleccion/:id', rutaRecoleccionController.actualizarRuta);
router.delete('/rutas-recoleccion/:id', rutaRecoleccionController.eliminarRuta);

module.exports = router;