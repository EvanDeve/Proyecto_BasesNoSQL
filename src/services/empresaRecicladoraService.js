const EmpresaRecicladora = require('../models/EmpresaRecicladora');

class EmpresaRecicladoraService {
    async listarEmpresas() {
        return await EmpresaRecicladora.find();
    }

    async obtenerEmpresaPorId(id) {
        return await EmpresaRecicladora.findById(id);
    }

    async crearEmpresa(datos) {
        const nuevaEmpresa = new EmpresaRecicladora(datos);
        return await nuevaEmpresa.save();
    }

    async actualizarEmpresa(id, datos) {
        return await EmpresaRecicladora.findByIdAndUpdate(id, datos, { new: true });
    }

    async eliminarEmpresa(id) {
        return await EmpresaRecicladora.findByIdAndDelete(id);
    }
}

module.exports = new EmpresaRecicladoraService();