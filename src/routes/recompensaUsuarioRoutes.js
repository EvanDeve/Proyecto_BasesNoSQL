const express = require('express');
const router = express.Router();
const recompensaUsuarioController = require('../controllers/recompensaUsuarioController');

// Rutas para Recompensas de Usuario
router.get('/recompensas-usuario', recompensaUsuarioController.listarRecompensas);
router.get('/recompensas-usuario/:id', recompensaUsuarioController.obtenerRecompensaPorId);
router.post('/recompensas-usuario', recompensaUsuarioController.crearRecompensa);
router.put('/recompensas-usuario/:id', recompensaUsuarioController.actualizarRecompensa);
router.delete('/recompensas-usuario/:id', recompensaUsuarioController.eliminarRecompensa);

module.exports = router;