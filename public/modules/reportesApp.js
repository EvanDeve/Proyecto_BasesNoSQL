document.addEventListener('DOMContentLoaded', () => {
  const app = window.createRemoteCrudApp({
    api: {
      list: () => window.Api.getReportes(),
      create: (data) => window.Api.createReporte(data),
      update: (id, data) => window.Api.updateReporte(id, data),
      delete: (id) => window.Api.deleteReporte(id)
    },
    createTitle: 'Registrar reporte',
    editTitle: 'Editar reporte',
    fields: [
      { id: 'usuario_id', required: true },
      { id: 'tipo_residuo', required: true },
      { id: 'cantidad', required: true, transform: value => Number(value) },
      { id: 'ubicacion', required: true },
      { id: 'estado', required: true },
      { id: 'fecha', required: true }
    ],
    columns: [
      { key: 'usuario_id' },
      { key: 'tipo_residuo' },
      { key: 'cantidad' },
      { key: 'ubicacion' },
      { key: 'estado' },
      { key: 'fecha' }
    ],
    messages: {
      created: 'Reporte registrado correctamente.',
      updated: 'Reporte actualizado correctamente.',
      deleted: 'Reporte eliminado correctamente.',
      confirmDelete: '¿Deseas eliminar este reporte?'
    }
  });

  app.init();
});
