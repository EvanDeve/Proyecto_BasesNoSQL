const recicladorService = require('../services/recicladorService');

class RecicladorController {
  async listar(req, res) {
    try {
      const data = await recicladorService.listar();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerPorId(req, res) {
    try {
      const item = await recicladorService.obtenerPorId(req.params.id);
      if (!item) return res.status(404).json({ mensaje: 'Reciclador no encontrado' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async crear(req, res) {
    try {
      const item = await recicladorService.crear(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async actualizar(req, res) {
    try {
      const item = await recicladorService.actualizar(req.params.id, req.body);
      if (!item) return res.status(404).json({ mensaje: 'Reciclador no encontrado' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async eliminar(req, res) {
    try {
      const item = await recicladorService.eliminar(req.params.id);
      if (!item) return res.status(404).json({ mensaje: 'Reciclador no encontrado' });
      res.status(200).json({ mensaje: 'Reciclador eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new RecicladorController();
