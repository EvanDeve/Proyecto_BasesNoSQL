const express = require('express');
const router = express.Router();
const empresaRecicladoraController = require('../controllers/empresaRecicladoraController');

// Rutas para Empresas Recicladoras
router.get('/empresas-recicladoras', empresaRecicladoraController.listarEmpresas);
router.get('/empresas-recicladoras/:id', empresaRecicladoraController.obtenerEmpresaPorId);
router.post('/empresas-recicladoras', empresaRecicladoraController.crearEmpresa);
router.put('/empresas-recicladoras/:id', empresaRecicladoraController.actualizarEmpresa);
router.delete('/empresas-recicladoras/:id', empresaRecicladoraController.eliminarEmpresa);

module.exports = router;