const rutaRecoleccionService = require('../services/rutaRecoleccionService');

class RutaRecoleccionController {
    async listarRutas(req, res) {
        try {
            const rutas = await rutaRecoleccionService.listarRutas();
            res.status(200).json(rutas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obtenerRutaPorId(req, res) {
        try {
            const ruta = await rutaRecoleccionService.obtenerRutaPorId(req.params.id);

            if (!ruta) {
                return res.status(404).json({ mensaje: 'Ruta de recolección no encontrada' });
            }

            res.status(200).json(ruta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async crearRuta(req, res) {
        try {
            const nuevaRuta = await rutaRecoleccionService.crearRuta(req.body);
            res.status(201).json(nuevaRuta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async actualizarRuta(req, res) {
        try {
            const rutaActualizada = await rutaRecoleccionService.actualizarRuta(req.params.id, req.body);

            if (!rutaActualizada) {
                return res.status(404).json({ mensaje: 'Ruta de recolección no encontrada' });
            }

            res.status(200).json(rutaActualizada);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async eliminarRuta(req, res) {
        try {
            const rutaEliminada = await rutaRecoleccionService.eliminarRuta(req.params.id);

            if (!rutaEliminada) {
                return res.status(404).json({ mensaje: 'Ruta de recolección no encontrada' });
            }

            res.status(200).json({ mensaje: 'Ruta de recolección eliminada correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new RutaRecoleccionController();