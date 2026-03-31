// src/routes/cursoRoutes.js
const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.get('/cursos', cursoController.listarCursos);
router.get('/cursos/:id', cursoController.obtenerCursoPorId);
router.post('/cursos', cursoController.crearCurso);
router.put('/cursos/:id', cursoController.actualizarCurso);
router.delete('/cursos/:id', cursoController.eliminarCurso);

module.exports = router;
