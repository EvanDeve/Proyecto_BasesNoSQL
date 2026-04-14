// src/controllers/residuoController.js
const residuoService = require('../services/residuoService');

class ResiduoController {
  async listarResiduos(req, res) {
    try {
      const residuos = await residuoService.listarResiduos();
      res.status(200).json(residuos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerResiduoPorId(req, res) {
    try {
      const residuo = await residuoService.obtenerResiduoPorId(req.params.id);

      if (!residuo) {
        return res.status(404).json({ mensaje: 'Residuo no encontrado' });
      }

      res.status(200).json(residuo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async crearResiduo(req, res) {
    try {
      const nuevoResiduo = await residuoService.crearResiduo(req.body);
      res.status(201).json(nuevoResiduo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async actualizarResiduo(req, res) {
    try {
      const residuoActualizado = await residuoService.actualizarResiduo(
        req.params.id,
        req.body
      );

      if (!residuoActualizado) {
        return res.status(404).json({ mensaje: 'Residuo no encontrado' });
      }

      res.status(200).json(residuoActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async eliminarResiduo(req, res) {
    try {
      const residuoEliminado = await residuoService.eliminarResiduo(req.params.id);

      if (!residuoEliminado) {
        return res.status(404).json({ mensaje: 'Residuo no encontrado' });
      }

      res.status(200).json({ mensaje: 'Residuo eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ResiduoController();
