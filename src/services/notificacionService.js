const Notificacion = require('../models/Notificacion');

class NotificacionService {
    async listarNotificaciones() {
        return await Notificacion.find();
    }

    async obtenerNotificacionPorId(id) {
        return await Notificacion.findById(id);
    }

    async crearNotificacion(datos) {
        const nuevaNotificacion = new Notificacion(datos);
        return await nuevaNotificacion.save();
    }

    async actualizarNotificacion(id, datos) {
        return await Notificacion.findByIdAndUpdate(id, datos, { new: true });
    }

    async eliminarNotificacion(id) {
        return await Notificacion.findByIdAndDelete(id);
    }
}

module.exports = new NotificacionService();