// src/models/Curso.js
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    correo: {
      type: String,
      required: true,
      trim: true
    },
    telefono: {
      type: String,
      required: true,
      trim: true
    },
    puntos: {
      type: Number,
      required: true,
      trim: true
    },
    direccion: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    collection: 'usuarios',
    timestamps: true
  }
);

module.exports = mongoose.model('Usuario', UsuarioSchema);
