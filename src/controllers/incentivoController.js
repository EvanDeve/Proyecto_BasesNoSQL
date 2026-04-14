const incentivoService = require('../services/incentivoService');

class IncentivoController {
    async listarIncentivos(req, res) {
        try {
            const incentivos = await incentivoService.listarIncentivos();
            res.status(200).json(incentivos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obtenerIncentivoPorId(req, res) {
        try {
            const incentivo = await incentivoService.obtenerIncentivoPorId(req.params.id);

            if (!incentivo) {
                return res.status(404).json({ mensaje: 'Incentivo no encontrado' });
            }

            res.status(200).json(incentivo);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async crearIncentivo(req, res) {
        try {
            const nuevoIncentivo = await incentivoService.crearIncentivo(req.body);
            res.status(201).json(nuevoIncentivo);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async actualizarIncentivo(req, res) {
        try {
            const incentivoActualizado = await incentivoService.actualizarIncentivo(req.params.id, req.body);

            if (!incentivoActualizado) {
                return res.status(404).json({ mensaje: 'Incentivo no encontrado' });
            }

            res.status(200).json(incentivoActualizado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async eliminarIncentivo(req, res) {
        try {
            const incentivoEliminado = await incentivoService.eliminarIncentivo(req.params.id);

            if (!incentivoEliminado) {
                return res.status(404).json({ mensaje: 'Incentivo no encontrado' });
            }

            res.status(200).json({ mensaje: 'Incentivo eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new IncentivoController();