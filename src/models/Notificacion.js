const mongoose = require('mongoose');

const NotificacionSchema = new mongoose.Schema(
    {
        usuario: {
            type: String,
            required: true,
            trim: true
        },
        titulo: {
            type: String,
            required: true,
            trim: true
        },
        mensaje: {
            type: String,
            required: true,
            trim: true
        },
        leida: {
            type: Boolean,
            default: false
        },
        fecha: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        collection: 'notificaciones',
        timestamps: true
    }
);

module.exports = mongoose.model('Notificacion', NotificacionSchema);