const express = require('express');
const router = express.Router();
const notificacionController = require('../controllers/notificacionController');

// Rutas para Notificaciones
router.get('/notificaciones', notificacionController.listarNotificaciones);
router.get('/notificaciones/:id', notificacionController.obtenerNotificacionPorId);
router.post('/notificaciones', notificacionController.crearNotificacion);
router.put('/notificaciones/:id', notificacionController.actualizarNotificacion);
router.delete('/notificaciones/:id', notificacionController.eliminarNotificacion);

module.exports = router;