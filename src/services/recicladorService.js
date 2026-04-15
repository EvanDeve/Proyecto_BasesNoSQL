const Reciclador = require('../models/Reciclador');

class RecicladorService {
  async listar() {
    return await Reciclador.find().sort({ createdAt: -1 });
  }

  async obtenerPorId(id) {
    return await Reciclador.findById(id);
  }

  async crear(data) {
    const item = new Reciclador(data);
    await item.save();
    return item;
  }

  async actualizar(id, data) {
    return await Reciclador.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async eliminar(id) {
    return await Reciclador.findByIdAndDelete(id);
  }
}

module.exports = new RecicladorService();
