// src/controllers/centroController.js
const centroService = require('../services/centroService');

class CentroController {
  async listarCentros(req, res) {
    try {
      const centros = await centroService.listarCentros();
      res.status(200).json(centros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerCentroPorId(req, res) {
    try {
      const centro = await centroService.obtenerCentroPorId(req.params.id);
      if (!centro) {
        return res.status(404).json({ mensaje: 'Centro no encontrado' });
      }
      res.status(200).json(centro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async crearCentro(req, res) {
    try {
      console.log('Recibiendo datos para crear centro:', req.body);
      const nuevoCentro = await centroService.crearCentro(req.body);
      console.log('Centro creado exitosamente:', nuevoCentro._id);
      res.status(201).json(nuevoCentro);
    } catch (error) {
      console.error('Error al crear centro:', error.message);
      res.status(500).json({ error: error.message });
    }
  }

  async actualizarCentro(req, res) {
    try {
      const centroActualizado = await centroService.actualizarCentro(
        req.params.id,
        req.body
      );
      if (!centroActualizado) {
        return res.status(404).json({ mensaje: 'Centro no encontrado' });
      }
      res.status(200).json(centroActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async eliminarCentro(req, res) {
    try {
      const centroEliminado = await centroService.eliminarCentro(req.params.id);
      if (!centroEliminado) {
        return res.status(404).json({ mensaje: 'Centro no encontrado' });
      }
      res.status(200).json({ mensaje: 'Centro eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CentroController();
