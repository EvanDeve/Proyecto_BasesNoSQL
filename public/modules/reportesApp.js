document.addEventListener('DOMContentLoaded', () => {
  const app = window.createLocalCrudApp({
    storageKey: 'ticorecicla_reportes',
    createTitle: 'Registrar reporte',
    editTitle: 'Editar reporte',
    fields: [
      { id: 'usuario', required: true },
      { id: 'material', required: true },
      { id: 'cantidad', required: true, transform: value => Number(value) },
      { id: 'ubicacion', required: true },
      { id: 'estado', required: true },
      { id: 'fecha', required: true }
    ],
    columns: [
      { key: 'usuario' },
      { key: 'material' },
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
