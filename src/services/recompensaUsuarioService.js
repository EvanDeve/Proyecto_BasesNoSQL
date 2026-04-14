const RecompensaUsuario = require('../models/RecompensaUsuario');

class RecompensaUsuarioService {
    async listarRecompensas() {
        return await RecompensaUsuario.find();
    }

    async obtenerRecompensaPorId(id) {
        return await RecompensaUsuario.findById(id);
    }

    async crearRecompensa(datos) {
        const nuevaRecompensa = new RecompensaUsuario(datos);
        return await nuevaRecompensa.save();
    }

    async actualizarRecompensa(id, datos) {
        return await RecompensaUsuario.findByIdAndUpdate(id, datos, { new: true });
    }

    async eliminarRecompensa(id) {
        return await RecompensaUsuario.findByIdAndDelete(id);
    }
}

module.exports = new RecompensaUsuarioService();