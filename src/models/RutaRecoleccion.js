const mongoose = require('mongoose');

const RutaRecoleccionSchema = new mongoose.Schema(
    {
        nombreRuta: {
            type: String,
            required: true,
            trim: true
        },
        zona: {
            type: String,
            required: true,
            trim: true
        },
        recicladorAsignado: {
            type: String,
            required: true,
            trim: true
        },
        frecuencia: {
            type: String,
            required: true,
            trim: true
        },
        estado: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        collection: 'rutas_recoleccion',
        timestamps: true
    }
);

module.exports = mongoose.model('RutaRecoleccion', RutaRecoleccionSchema);