document.addEventListener('DOMContentLoaded', () => {
    const app = window.createRemoteCrudApp({
        api: {
            list: () => window.Api.getIncentivos(),
            create: (data) => window.Api.createIncentivo(data),
            update: (id, data) => window.Api.updateIncentivo(id, data),
            delete: (id) => window.Api.deleteIncentivo(id)
        },
        createTitle: 'Registrar incentivo',
        editTitle: 'Editar incentivo',
        fields: [
            { id: 'puntos', required: true },
            { id: 'titulo', required: true },
            { id: 'icono', required: true },
            { id: 'descripcion', required: true },
            { id: 'acciones', required: true }
        ],
        columns: [
            { key: 'puntos' },
            { key: 'titulo' },
            { key: 'icono' },
            { key: 'descripcion' },
            { key: 'acciones' }
        ],
        messages: {
            created: 'Incentivo registrado correctamente.',
            updated: 'Incentivo actualizado correctamente.',
            deleted: 'Incentivo eliminado correctamente.',
            confirmDelete: '¿Deseas eliminar este incentivo?'
        }
    });

    app.init();
});