// src/models/Residuo.js
const mongoose = require('mongoose');

const ResiduoSchema = new mongoose.Schema(
  
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    categoria: {
      type: String,
      required: true,
      trim: true,
      enum:[
        "Plástico",
        "Papel y cartón",
        "Vidrio",
        "Metal",
        "Electrónico",
        "Orgánico"
      ]
    },
    descripcion: {
      type: String,
      required: true,
      trim: true
    },
    unidadMedida: {
      type: String,
      required: true,
      trim: true,
      enum:[
        "Kilogramos",
        "Unidades",
        "Bolsas",
        "Cajas"
      ]
    },
    estado: {
      type: String,
      required: true,
      trim: true,
      enum:[
        "Activo",
        "Inactivo"
      ]
    }
  },
  {
    collection: 'residuos',
    timestamps: true
  }
    
);

module.exports = mongoose.model('Residuo', ResiduoSchema);
