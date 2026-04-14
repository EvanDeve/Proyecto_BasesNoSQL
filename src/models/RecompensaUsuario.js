const mongoose = require('mongoose');

const RecompensaUsuarioSchema = new mongoose.Schema(
    {
        usuario: {
            type: String,
            required: true,
            trim: true
        },
        incentivo: {
            type: String,
            required: true,
            trim: true
        },
        fechaCanje: {
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
        collection: 'recompensas_usuario',
        timestamps: true
    }
);

module.exports = mongoose.model('RecompensaUsuario', RecompensaUsuarioSchema);