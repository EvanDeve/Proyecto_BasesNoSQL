// src/models/Reporte.js
const mongoose = require('mongoose');

const ReporteSchema = new mongoose.Schema(
  {
    usuario_id: {
      type: String,
      required: true,
      trim: true
    },
    tipo_residuo: {
      type: String,
      required: true,
      trim: true
    },
    cantidad: {
      type: Number,
      required: true,
      min: 0
    },
    ubicacion: {
      type: String,
      required: true,
      trim: true
    },
    estado: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "pendiente",
        "en proceso",
        "recolectado",
        "cancelado",
        "Pendiente",
        "En proceso",
        "Recolectado",
        "Cancelado"
      ]
    },
    fecha: {
      type: String, // Matching "2026-03-30" format in screenshot
      required: true
    }
  },
  {
    collection: 'reportes_reciclaje',
    timestamps: true
  }
);

module.exports = mongoose.model('Reporte', ReporteSchema);
