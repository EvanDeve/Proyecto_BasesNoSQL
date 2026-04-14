const mongoose = require('mongoose');

const EmpresaRecicladoraSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        tipoMaterial: {
            type: String,
            required: true,
            trim: true
        },
        contacto: {
            type: String,
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
        collection: 'empresas_recicladoras',
        timestamps: true
    }
);

module.exports = mongoose.model('EmpresaRecicladora', EmpresaRecicladoraSchema);