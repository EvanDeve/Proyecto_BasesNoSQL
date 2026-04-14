document.addEventListener('DOMContentLoaded', () => {
    const app = window.createRemoteCrudApp({
        api: {
            list: () => window.Api.getNotificaciones(),
            create: (data) => window.Api.createNotificacion(data),
            update: (id, data) => window.Api.updateNotificacion(id, data),
            delete: (id) => window.Api.deleteNotificacion(id)
        },
        createTitle: 'Registrar notificación',
        editTitle: 'Editar notificación',
        fields: [
            { id: 'usuario', required: true },
            { id: 'titulo', required: true },
            { id: 'mensaje', required: true },
            { id: 'leida', required: false },
            { id: 'fecha', required: true }
        ],
        columns: [
            { key: 'usuario' },
            { key: 'titulo' },
            { key: 'mensaje' },
            { key: 'leida' },
            { key: 'fecha' }
        ],
        messages: {
            created: 'Notificación registrada correctamente.',
            updated: 'Notificación actualizada correctamente.',
            deleted: 'Notificación eliminada correctamente.',
            confirmDelete: '¿Deseas eliminar esta notificación?'
        }
    });

    app.init();
});