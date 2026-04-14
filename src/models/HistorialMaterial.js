const mongoose = require('mongoose');

const HistorialMaterialSchema = new mongoose.Schema(
    {
        material: {
            type: String,
            required: true,
            trim: true
        },
        origen: {
            type: String,
            required: true,
            trim: true
        },
        destino: {
            type: String,
            required: true,
            trim: true
        },
        fechaMovimiento: {
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
        collection: 'historial_materiales',
        timestamps: true
    }
);

module.exports = mongoose.model('HistorialMaterial', HistorialMaterialSchema);