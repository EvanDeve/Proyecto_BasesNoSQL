const empresaRecicladoraService = require('../services/empresaRecicladoraService');

class EmpresaRecicladoraController {
    async listarEmpresas(req, res) {
        try {
            const empresas = await empresaRecicladoraService.listarEmpresas();
            res.status(200).json(empresas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obtenerEmpresaPorId(req, res) {
        try {
            const empresa = await empresaRecicladoraService.obtenerEmpresaPorId(req.params.id);

            if (!empresa) {
                return res.status(404).json({ mensaje: 'Empresa recicladora no encontrada' });
            }

            res.status(200).json(empresa);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async crearEmpresa(req, res) {
        try {
            const nuevaEmpresa = await empresaRecicladoraService.crearEmpresa(req.body);
            res.status(201).json(nuevaEmpresa);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async actualizarEmpresa(req, res) {
        try {
            const empresaActualizada = await empresaRecicladoraService.actualizarEmpresa(req.params.id, req.body);

            if (!empresaActualizada) {
                return res.status(404).json({ mensaje: 'Empresa recicladora no encontrada' });
            }

            res.status(200).json(empresaActualizada);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async eliminarEmpresa(req, res) {
        try {
            const empresaEliminada = await empresaRecicladoraService.eliminarEmpresa(req.params.id);

            if (!empresaEliminada) {
                return res.status(404).json({ mensaje: 'Empresa recicladora no encontrada' });
            }

            res.status(200).json({ mensaje: 'Empresa recicladora eliminada correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new EmpresaRecicladoraController();