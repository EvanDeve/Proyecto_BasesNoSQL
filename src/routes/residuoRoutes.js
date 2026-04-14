// src/routes/residuoRoutes.js
const express = require('express');
const router = express.Router();
const residuoController = require('../controllers/residuoController');

// Rutas para Residuos
router.get('/residuos', residuoController.listarResiduos);
router.get('/residuos/:id', residuoController.obtenerResiduoPorId);
router.post('/residuos', residuoController.crearResiduo);
router.put('/residuos/:id', residuoController.actualizarResiduo);
router.delete('/residuos/:id', residuoController.eliminarResiduo);

module.exports = router;
