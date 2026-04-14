// src/models/Centro.js
const mongoose = require('mongoose');

const CentroSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    encargado: {
      type: String,
      required: true,
      trim: true
    },
    telefono: {
      type: String,
      required: true,
      trim: true
    },
    direccion: {
      type: String,
      required: true,
      trim: true
    },
    horario: {
      type: String,
      required: true,
      trim: true
    },
    materiales: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    collection: 'centros_reciclaje',
    timestamps: true
  }
);

module.exports = mongoose.model('Centro', CentroSchema);
