const Recoleccion = require('../models/Recoleccion');

class RecoleccionService {
  async listar() {
    return await Recoleccion.find().sort({ createdAt: -1 });
  }

  async obtenerPorId(id) {
    return await Recoleccion.findById(id);
  }

  async crear(data) {
    const item = new Recoleccion(data);
    await item.save();
    return item;
  }

  async actualizar(id, data) {
    return await Recoleccion.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async eliminar(id) {
    return await Recoleccion.findByIdAndDelete(id);
  }
}

module.exports = new RecoleccionService();
