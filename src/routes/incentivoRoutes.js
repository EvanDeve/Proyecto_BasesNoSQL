const express = require('express');
const router = express.Router();
const incentivoController = require('../controllers/incentivoController');

// Rutas para Incentivos
router.get('/incentivos', incentivoController.listarIncentivos);
router.get('/incentivos/:id', incentivoController.obtenerIncentivoPorId);
router.post('/incentivos', incentivoController.crearIncentivo);
router.put('/incentivos/:id', incentivoController.actualizarIncentivo);
router.delete('/incentivos/:id', incentivoController.eliminarIncentivo);

module.exports = router;