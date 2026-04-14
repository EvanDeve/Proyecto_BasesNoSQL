// src/services/centroService.js
const Centro = require('../models/Centro');

class CentroService {
  async listarCentros() {
    return await Centro.find();
  }

  async obtenerCentroPorId(id) {
    return await Centro.findById(id);
  }

  async crearCentro(datos) {
    const nuevoCentro = new Centro(datos);
    return await nuevoCentro.save();
  }

  async actualizarCentro(id, datos) {
    return await Centro.findByIdAndUpdate(id, datos, { new: true });
  }

  async eliminarCentro(id) {
    return await Centro.findByIdAndDelete(id);
  }
}

module.exports = new CentroService();
