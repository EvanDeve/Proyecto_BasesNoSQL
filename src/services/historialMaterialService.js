const HistorialMaterial = require('../models/HistorialMaterial');

class HistorialMaterialService {
    async listarHistoriales() {
        return await HistorialMaterial.find();
    }

    async obtenerHistorialPorId(id) {
        return await HistorialMaterial.findById(id);
    }

    async crearHistorial(datos) {
        const nuevoHistorial = new HistorialMaterial(datos);
        return await nuevoHistorial.save();
    }

    async actualizarHistorial(id, datos) {
        return await HistorialMaterial.findByIdAndUpdate(id, datos, { new: true });
    }

    async eliminarHistorial(id) {
        return await HistorialMaterial.findByIdAndDelete(id);
    }
}

module.exports = new HistorialMaterialService();