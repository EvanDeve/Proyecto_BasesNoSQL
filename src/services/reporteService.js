// src/services/reporteService.js
const Reporte = require('../models/Reporte');

class ReporteService {
  async listarReportes() {
    return await Reporte.find();
  }

  async obtenerReportePorId(id) {
    return await Reporte.findById(id);
  }

  async crearReporte(datos) {
    const nuevoReporte = new Reporte(datos);
    return await nuevoReporte.save();
  }

  async actualizarReporte(id, datos) {
    return await Reporte.findByIdAndUpdate(id, datos, { new: true });
  }

  async eliminarReporte(id) {
    return await Reporte.findByIdAndDelete(id);
  }
}

module.exports = new ReporteService();
