const express = require('express');
const router = express.Router();
const recicladorController = require('../controllers/recicladorController');

router.get('/recicladores', recicladorController.listar);
router.get('/recicladores/:id', recicladorController.obtenerPorId);
router.post('/recicladores', recicladorController.crear);
router.put('/recicladores/:id', recicladorController.actualizar);
router.delete('/recicladores/:id', recicladorController.eliminar);

module.exports = router;
