const recompensaUsuarioService = require('../services/recompensaUsuarioService');

class RecompensaUsuarioController {
    async listarRecompensas(req, res) {
        try {
            const recompensas = await recompensaUsuarioService.listarRecompensas();
            res.status(200).json(recompensas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obtenerRecompensaPorId(req, res) {
        try {
            const recompensa = await recompensaUsuarioService.obtenerRecompensaPorId(req.params.id);

            if (!recompensa) {
                return res.status(404).json({ mensaje: 'Recompensa no encontrada' });
            }

            res.status(200).json(recompensa);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async crearRecompensa(req, res) {
        try {
            const nuevaRecompensa = await recompensaUsuarioService.crearRecompensa(req.body);
            res.status(201).json(nuevaRecompensa);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async actualizarRecompensa(req, res) {
        try {
            const recompensaActualizada = await recompensaUsuarioService.actualizarRecompensa(req.params.id, req.body);

            if (!recompensaActualizada) {
                return res.status(404).json({ mensaje: 'Recompensa no encontrada' });
            }

            res.status(200).json(recompensaActualizada);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async eliminarRecompensa(req, res) {
        try {
            const recompensaEliminada = await recompensaUsuarioService.eliminarRecompensa(req.params.id);

            if (!recompensaEliminada) {
                return res.status(404).json({ mensaje: 'Recompensa no encontrada' });
            }

            res.status(200).json({ mensaje: 'Recompensa eliminada correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new RecompensaUsuarioController();