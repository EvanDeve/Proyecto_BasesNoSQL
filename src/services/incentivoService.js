const Incentivo = require('../models/Incentivo');

class IncentivoService {
    async listarIncentivos() {
        return await Incentivo.find();
    }

    async obtenerIncentivoPorId(id) {
        return await Incentivo.findById(id);
    }

    async crearIncentivo(datos) {
        const nuevoIncentivo = new Incentivo(datos);
        return await nuevoIncentivo.save();
    }

    async actualizarIncentivo(id, datos) {
        return await Incentivo.findByIdAndUpdate(id, datos, { new: true });
    }

    async eliminarIncentivo(id) {
        return await Incentivo.findByIdAndDelete(id);
    }
}

module.exports = new IncentivoService();