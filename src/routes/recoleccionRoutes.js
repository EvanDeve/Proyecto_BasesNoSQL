const express = require('express');
const router = express.Router();
const recoleccionController = require('../controllers/recoleccionController');

router.get('/recolecciones', recoleccionController.listar);
router.get('/recolecciones/:id', recoleccionController.obtenerPorId);
router.post('/recolecciones', recoleccionController.crear);
router.put('/recolecciones/:id', recoleccionController.actualizar);
router.delete('/recolecciones/:id', recoleccionController.eliminar);

module.exports = router;
