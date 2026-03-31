// src/services/usuarioService.js
const Usuario = require('../models/Usuario');

class UsuarioService {
  async listarUsuarios() {
    return await Usuario.find().sort({ createdAt: -1 });
  }

  async obtenerUsuarioPorId(id) {
    return await Usuario.findById(id);
  }

  async crearUsuario(data) {
    const usuario = new Usuario(data);
    await usuario.save();
    return usuario;
  }

  async actualizarUsuario(id, data) {
    return await Usuario.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
  }

  async eliminarUsuario(id) {
    return await Usuario.findByIdAndDelete(id);
  }
}

module.exports = new UsuarioService();
