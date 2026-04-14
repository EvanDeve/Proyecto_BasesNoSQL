// src/services/residuoService.js
const Residuo = require('../models/Residuo');

class ResiduoService {
  async listarResiduos() {
    return await Residuo.find();
  }

  async obtenerResiduoPorId(id) {
    return await Residuo.findById(id);
  }

  async crearResiduo(datos) {
    const nuevoResiduo = new Residuo(datos);
    return await nuevoResiduo.save();
  }

  async actualizarResiduo(id, datos) {
    return await Residuo.findByIdAndUpdate(id, datos, { new: true });
  }

  async eliminarResiduo(id) {
    return await Residuo.findByIdAndDelete(id);
  }
}

module.exports = new ResiduoService();
