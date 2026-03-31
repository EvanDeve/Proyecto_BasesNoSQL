// src/models/Curso.js
const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema(
  {
    codigo: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    creditos: {
      type: Number,
      required: true,
      min: 1
    },
    profesor: {
      type: String,
      required: true,
      trim: true
    },
    horario: {
      type: String,
      required: true,
      trim: true
    },
    aula: {
      type: String,
      required: true,
      trim: true
    },
    cupos: {
      type: Number,
      required: true,
      min: 0
    },
    estado: {
      type: String,
      enum: ['Activo', 'Inactivo'],
      default: 'Activo'
    }
  },
  {
    collection: 'cursos',
    timestamps: true
  }
);

module.exports = mongoose.model('Curso', CursoSchema);
