const express = require('express');
const router = express.Router();
const historialMaterialController = require('../controllers/historialMaterialController');

// Rutas para Historial de Materiales
router.get('/historial-materiales', historialMaterialController.listarHistoriales);
router.get('/historial-materiales/:id', historialMaterialController.obtenerHistorialPorId);
router.post('/historial-materiales', historialMaterialController.crearHistorial);
router.put('/historial-materiales/:id', historialMaterialController.actualizarHistorial);
router.delete('/historial-materiales/:id', historialMaterialController.eliminarHistorial);

module.exports = router;