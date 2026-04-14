// src/controllers/reporteController.js
const reporteService = require('../services/reporteService');

class ReporteController {
  async listarReportes(req, res) {
    try {
      const reportes = await reporteService.listarReportes();
      res.status(200).json(reportes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerReportePorId(req, res) {
    try {
      const reporte = await reporteService.obtenerReportePorId(req.params.id);
      if (!reporte) {
        return res.status(404).json({ mensaje: 'Reporte no encontrado' });
      }
      res.status(200).json(reporte);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async crearReporte(req, res) {
    try {
      const nuevoReporte = await reporteService.crearReporte(req.body);
      res.status(201).json(nuevoReporte);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async actualizarReporte(req, res) {
    try {
      const reporteActualizado = await reporteService.actualizarReporte(
        req.params.id,
        req.body
      );
      if (!reporteActualizado) {
        return res.status(404).json({ mensaje: 'Reporte no encontrado' });
      }
      res.status(200).json(reporteActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async eliminarReporte(req, res) {
    try {
      const reporteEliminado = await reporteService.eliminarReporte(req.params.id);
      if (!reporteEliminado) {
        return res.status(404).json({ mensaje: 'Reporte no encontrado' });
      }
      res.status(200).json({ mensaje: 'Reporte eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ReporteController();
