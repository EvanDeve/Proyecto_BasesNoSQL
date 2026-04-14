document.addEventListener('DOMContentLoaded', () => {
  const app = window.createRemoteCrudApp({
    api: {
      list: () => window.Api.getResiduos(),
      create: (data) => window.Api.createResiduo(data),
      update: (id, data) => window.Api.updateResiduo(id, data),
      delete: (id) => window.Api.deleteResiduo(id)
    },
    createTitle: 'Registrar residuo',
    editTitle: 'Editar residuo',
    fields: [
      { id: 'nombre', required: true },
      { id: 'categoria', required: true },
      { id: 'descripcion', required: false },
      { id: 'unidadMedida', required: true },
      { id: 'estado', required: true }
    ],
    columns: [
      { key: 'nombre' },
      { key: 'categoria' },
      { key: 'descripcion' },
      { key: 'unidadMedida' },
      { key: 'estado' }
    ],
    messages: {
      created: 'Residuo registrado correctamente.',
      updated: 'Residuo actualizado correctamente.',
      deleted: 'Residuo eliminado correctamente.',
      confirmDelete: '¿Deseas eliminar este residuo?'
    }
  });

  app.init();
});
