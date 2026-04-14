document.addEventListener('DOMContentLoaded', () => {
    const app = window.createRemoteCrudApp({
        api: {
            list: () => window.Api.getRecompensasUsuario(),
            create: (data) => window.Api.createRecompensaUsuario(data),
            update: (id, data) => window.Api.updateRecompensaUsuario(id, data),
            delete: (id) => window.Api.deleteRecompensaUsuario(id)
        },
        createTitle: 'Registrar recompensa de usuario',
        editTitle: 'Editar recompensa de usuario',
        fields: [
            { id: 'usuario', required: true },
            { id: 'incentivo', required: true },
            { id: 'fechaCanje', required: true },
            { id: 'estado', required: true }
        ],
        columns: [
            { key: 'usuario' },
            { key: 'incentivo' },
            { key: 'fechaCanje' },
            { key: 'estado' }
        ],
        messages: {
            created: 'Recompensa de usuario registrada correctamente.',
            updated: 'Recompensa de usuario actualizada correctamente.',
            deleted: 'Recompensa de usuario eliminada correctamente.',
            confirmDelete: '¿Deseas eliminar esta recompensa de usuario?'
        }
    });

    app.init();
});