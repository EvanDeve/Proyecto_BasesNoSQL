// src/controllers/cursoController.js
const cursoService = require('../services/cursoService');

class CursoController {
  async listarCursos(req, res) {
    try {
      const cursos = await cursoService.listarCursos();
      res.status(200).json(cursos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerCursoPorId(req, res) {
    try {
      const curso = await cursoService.obtenerCursoPorId(req.params.id);

      if (!curso) {
        return res.status(404).json({ mensaje: 'Curso no encontrado' });
      }

      res.status(200).json(curso);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async crearCurso(req, res) {
    try {
      const nuevoCurso = await cursoService.crearCurso(req.body);
      res.status(201).json(nuevoCurso);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async actualizarCurso(req, res) {
    try {
      const cursoActualizado = await cursoService.actualizarCurso(
        req.params.id,
        req.body
      );

      if (!cursoActualizado) {
        return res.status(404).json({ mensaje: 'Curso no encontrado' });
      }

      res.status(200).json(cursoActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async eliminarCurso(req, res) {
    try {
      const cursoEliminado = await cursoService.eliminarCurso(req.params.id);

      if (!cursoEliminado) {
        return res.status(404).json({ mensaje: 'Curso no encontrado' });
      }

      res.status(200).json({ mensaje: 'Curso eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CursoController();
