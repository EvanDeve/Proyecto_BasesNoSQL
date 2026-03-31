// src/controllers/usuarioController.js
const usuarioService = require('../services/usuarioService');

class UsuarioController {
  async listarUsuarios(req, res) {
    try {
      const usuarios = await usuarioService.listarUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerUsuarioPorId(req, res) {
    try {
      const usuario = await usuarioService.obtenerUsuarioPorId(req.params.id);

      if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }

      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async crearUsuario(req, res) {
    try {
      const nuevoUsuario = await usuarioService.crearUsuario(req.body);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async actualizarUsuario(req, res) {
    try {
      const usuarioActualizado = await usuarioService.actualizarUsuario(
        req.params.id,
        req.body
      );

      if (!usuarioActualizado) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }

      res.status(200).json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async eliminarUsuario(req, res) {
    try {
      const usuarioEliminado = await usuarioService.eliminarUsuario(req.params.id);

      if (!usuarioEliminado) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }

      res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UsuarioController();
