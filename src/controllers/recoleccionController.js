const recoleccionService = require('../services/recoleccionService');

class RecoleccionController {
  async listar(req, res) {
    try {
      const data = await recoleccionService.listar();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerPorId(req, res) {
    try {
      const item = await recoleccionService.obtenerPorId(req.params.id);
      if (!item) return res.status(404).json({ mensaje: 'Recolección no encontrado' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async crear(req, res) {
    try {
      const item = await recoleccionService.crear(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async actualizar(req, res) {
    try {
      const item = await recoleccionService.actualizar(req.params.id, req.body);
      if (!item) return res.status(404).json({ mensaje: 'Recolección no encontrado' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async eliminar(req, res) {
    try {
      const item = await recoleccionService.eliminar(req.params.id);
      if (!item) return res.status(404).json({ mensaje: 'Recolección no encontrado' });
      res.status(200).json({ mensaje: 'Recolección eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new RecoleccionController();
