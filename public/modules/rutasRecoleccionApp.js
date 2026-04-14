document.addEventListener('DOMContentLoaded', () => {
    const app = window.createRemoteCrudApp({
        api: {
            list: () => window.Api.getRutasRecoleccion(),
            create: (data) => window.Api.createRutaRecoleccion(data),
            update: (id, data) => window.Api.updateRutaRecoleccion(id, data),
            delete: (id) => window.Api.deleteRutaRecoleccion(id)
        },
        createTitle: 'Registrar ruta de recolección',
        editTitle: 'Editar ruta de recolección',
        fields: [
            { id: 'nombreRuta', required: true },
            { id: 'zona', required: true },
            { id: 'recicladorAsignado', required: true },
            { id: 'frecuencia', required: true },
            { id: 'estado', required: true }
        ],
        columns: [
            { key: 'nombreRuta' },
            { key: 'zona' },
            { key: 'recicladorAsignado' },
            { key: 'frecuencia' },
            { key: 'estado' }
        ],
        messages: {
            created: 'Ruta de recolección registrada correctamente.',
            updated: 'Ruta de recolección actualizada correctamente.',
            deleted: 'Ruta de recolección eliminada correctamente.',
            confirmDelete: '¿Deseas eliminar esta ruta de recolección?'
        }
    });

    app.init();
});