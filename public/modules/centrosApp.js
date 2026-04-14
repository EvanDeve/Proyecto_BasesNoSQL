document.addEventListener('DOMContentLoaded', () => {
  const app = window.createRemoteCrudApp({
    api: {
      list: () => window.Api.getCentros(),
      create: (data) => window.Api.createCentro(data),
      update: (id, data) => window.Api.updateCentro(id, data),
      delete: (id) => window.Api.deleteCentro(id)
    },
    createTitle: 'Registrar centro',
    editTitle: 'Editar centro',
    fields: [
      { id: 'nombre', required: true },
      { id: 'encargado', required: true },
      { id: 'telefono', required: true },
      { id: 'direccion', required: true },
      { id: 'horario', required: true },
      { id: 'materiales', required: true }
    ],
    columns: [
      { key: 'nombre' },
      { key: 'encargado' },
      { key: 'telefono' },
      { key: 'direccion' },
      { key: 'horario' },
      { key: 'materiales' }
    ],
    messages: {
      created: 'Centro de acopio registrado correctamente.',
      updated: 'Centro de acopio actualizado correctamente.',
      deleted: 'Centro de acopio eliminado correctamente.',
      confirmDelete: '¿Deseas eliminar este centro de acopio?'
    }
  });

  app.init();
});
