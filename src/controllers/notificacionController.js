const notificacionService = require('../services/notificacionService');

class NotificacionController {
    async listarNotificaciones(req, res) {
        try {
            const notificaciones = await notificacionService.listarNotificaciones();
            res.status(200).json(notificaciones);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obtenerNotificacionPorId(req, res) {
        try {
            const notificacion = await notificacionService.obtenerNotificacionPorId(req.params.id);

            if (!notificacion) {
                return res.status(404).json({ mensaje: 'Notificación no encontrada' });
            }

            res.status(200).json(notificacion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async crearNotificacion(req, res) {
        try {
            const nuevaNotificacion = await notificacionService.crearNotificacion(req.body);
            res.status(201).json(nuevaNotificacion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async actualizarNotificacion(req, res) {
        try {
            const notificacionActualizada = await notificacionService.actualizarNotificacion(req.params.id, req.body);

            if (!notificacionActualizada) {
                return res.status(404).json({ mensaje: 'Notificación no encontrada' });
            }

            res.status(200).json(notificacionActualizada);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async eliminarNotificacion(req, res) {
        try {
            const notificacionEliminada = await notificacionService.eliminarNotificacion(req.params.id);

            if (!notificacionEliminada) {
                return res.status(404).json({ mensaje: 'Notificación no encontrada' });
            }

            res.status(200).json({ mensaje: 'Notificación eliminada correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new NotificacionController();