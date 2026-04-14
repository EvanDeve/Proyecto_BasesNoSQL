document.addEventListener('DOMContentLoaded', () => {
    const app = window.createRemoteCrudApp({
        api: {
            list: () => window.Api.getHistorialMateriales(),
            create: (data) => window.Api.createHistorialMaterial(data),
            update: (id, data) => window.Api.updateHistorialMaterial(id, data),
            delete: (id) => window.Api.deleteHistorialMaterial(id)
        },
        createTitle: 'Registrar historial de material',
        editTitle: 'Editar historial de material',
        fields: [
            { id: 'material', required: true },
            { id: 'origen', required: true },
            { id: 'destino', required: true },
            { id: 'fechaMovimiento', required: true },
            { id: 'estado', required: true }
        ],
        columns: [
            { key: 'material' },
            { key: 'origen' },
            { key: 'destino' },
            { key: 'fechaMovimiento' },
            { key: 'estado' }
        ],
        messages: {
            created: 'Historial de material registrado correctamente.',
            updated: 'Historial de material actualizado correctamente.',
            deleted: 'Historial de material eliminado correctamente.',
            confirmDelete: '¿Deseas eliminar este historial de material?'
        }
    });

    app.init();
});