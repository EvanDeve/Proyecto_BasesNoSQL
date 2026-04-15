const mongoose = require('mongoose');

const RecicladorSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    correo: { type: String, required: true, trim: true },
    telefono: { type: String, required: true, trim: true },
    vehiculo: { type: String, required: true, trim: true },
    zonaAsignada: { type: String, required: true, trim: true },
    estado: { type: String, required: true, enum: ['Activo', 'Inactivo'], default: 'Activo' }
  },
  {
    collection: 'recicladores',
    timestamps: true
  }
);

module.exports = mongoose.model('Reciclador', RecicladorSchema);
