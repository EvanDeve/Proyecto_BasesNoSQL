const mongoose = require('mongoose');

const IncentivoSchema = new mongoose.Schema(
    {
        puntos: {
            type: String,
            required: true,
            trim: true
        },
        titulo: {
            type: String,
            required: true,
            trim: true
        },
        icono: {
            type: String,
            required: true,
            trim: true
        },
        descripcion: {
            type: String,
            required: true,
            trim: true
        },
        acciones: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        collection: 'incentivos',
        timestamps: true
    }
);

module.exports = mongoose.model('Incentivo', IncentivoSchema);