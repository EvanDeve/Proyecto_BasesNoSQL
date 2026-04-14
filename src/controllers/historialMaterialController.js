const historialMaterialService = require('../services/historialMaterialService');

class HistorialMaterialController {
    async listarHistoriales(req, res) {
        try {
            const historiales = await historialMaterialService.listarHistoriales();
            res.status(200).json(historiales);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obtenerHistorialPorId(req, res) {
        try {
            const historial = await historialMaterialService.obtenerHistorialPorId(req.params.id);

            if (!historial) {
                return res.status(404).json({ mensaje: 'Historial de materiales no encontrado' });
            }

            res.status(200).json(historial);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async crearHistorial(req, res) {
        try {
            const nuevoHistorial = await historialMaterialService.crearHistorial(req.body);
            res.status(201).json(nuevoHistorial);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async actualizarHistorial(req, res) {
        try {
            const historialActualizado = await historialMaterialService.actualizarHistorial(req.params.id, req.body);

            if (!historialActualizado) {
                return res.status(404).json({ mensaje: 'Historial de materiales no encontrado' });
            }

            res.status(200).json(historialActualizado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async eliminarHistorial(req, res) {
        try {
            const historialEliminado = await historialMaterialService.eliminarHistorial(req.params.id);

            if (!historialEliminado) {
                return res.status(404).json({ mensaje: 'Historial de materiales no encontrado' });
            }

            res.status(200).json({ mensaje: 'Historial de materiales eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new HistorialMaterialController();