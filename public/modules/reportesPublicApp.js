document.addEventListener('DOMContentLoaded', () => {
  const app = window.createLocalReadOnlyApp({
    storageKey: 'ticorecicla_reportes',
    rootId: 'public-list-root',
    emptyMessage: 'Aún no hay reportes de reciclaje disponibles.',
    render(records, escapeHtml) {
      return `
        <div class="table-responsive">
          <table class="table table-dark custom-table align-middle mb-0">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Material</th>
                <th>Cantidad</th>
                <th>Ubicación</th>
                <th>Estado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              ${records.map(record => `
                <tr>
                  <td>${escapeHtml(record.usuario || '-')}</td>
                  <td>${escapeHtml(record.material || '-')}</td>
                  <td>${escapeHtml(record.cantidad || '-')}</td>
                  <td>${escapeHtml(record.ubicacion || '-')}</td>
                  <td>${escapeHtml(record.estado || '-')}</td>
                  <td>${escapeHtml(record.fecha || '-')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }
  });

  app.init();
});
