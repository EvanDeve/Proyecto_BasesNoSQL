const mongoose = require('mongoose');

const RecoleccionSchema = new mongoose.Schema(
  {
    reporteId: { type: String, required: true, trim: true },
    recicladorId: { type: String, required: true, trim: true },
    fechaProgramada: { type: String, required: true },
    fechaCompletada: { type: String, default: '' },
    estado: { type: String, required: true, enum: ['Pendiente', 'En ruta', 'Completada', 'Cancelada'], default: 'Pendiente' },
    observaciones: { type: String, trim: true, default: '' }
  },
  {
    collection: 'recolecciones',
    timestamps: true
  }
);

module.exports = mongoose.model('Recoleccion', RecoleccionSchema);
