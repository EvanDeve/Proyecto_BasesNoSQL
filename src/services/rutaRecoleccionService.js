const RutaRecoleccion = require('../models/RutaRecoleccion');

class RutaRecoleccionService {
    async listarRutas() {
        return await RutaRecoleccion.find();
    }

    async obtenerRutaPorId(id) {
        return await RutaRecoleccion.findById(id);
    }

    async crearRuta(datos) {
        const nuevaRuta = new RutaRecoleccion(datos);
        return await nuevaRuta.save();
    }

    async actualizarRuta(id, datos) {
        return await RutaRecoleccion.findByIdAndUpdate(id, datos, { new: true });
    }

    async eliminarRuta(id) {
        return await RutaRecoleccion.findByIdAndDelete(id);
    }
}

module.exports = new RutaRecoleccionService();