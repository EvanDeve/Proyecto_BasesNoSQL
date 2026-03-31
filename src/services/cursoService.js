// src/services/cursoService.js
const Curso = require('../models/Curso');

class CursoService {
  async listarCursos() {
    return await Curso.find().sort({ createdAt: -1 });
  }

  async obtenerCursoPorId(id) {
    return await Curso.findById(id);
  }

  async crearCurso(data) {
    const curso = new Curso(data);
    await curso.save();
    return curso;
  }

  async actualizarCurso(id, data) {
    return await Curso.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
  }

  async eliminarCurso(id) {
    return await Curso.findByIdAndDelete(id);
  }
}

module.exports = new CursoService();
