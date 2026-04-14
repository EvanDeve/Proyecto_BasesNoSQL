document.addEventListener('DOMContentLoaded', () => {
    const app = window.createRemoteCrudApp({
        api: {
            list: () => window.Api.getEmpresasRecicladoras(),
            create: (data) => window.Api.createEmpresaRecicladora(data),
            update: (id, data) => window.Api.updateEmpresaRecicladora(id, data),
            delete: (id) => window.Api.deleteEmpresaRecicladora(id)
        },
        createTitle: 'Registrar empresa recicladora',
        editTitle: 'Editar empresa recicladora',
        fields: [
            { id: 'nombre', required: true },
            { id: 'tipoMaterial', required: true },
            { id: 'contacto', required: true },
            { id: 'direccion', required: true }
        ],
        columns: [
            { key: 'nombre' },
            { key: 'tipoMaterial' },
            { key: 'contacto' },
            { key: 'direccion' }
        ],
        messages: {
            created: 'Empresa recicladora registrada correctamente.',
            updated: 'Empresa recicladora actualizada correctamente.',
            deleted: 'Empresa recicladora eliminada correctamente.',
            confirmDelete: '¿Deseas eliminar esta empresa recicladora?'
        }
    });

    app.init();
});