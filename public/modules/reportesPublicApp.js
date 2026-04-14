document.addEventListener('DOMContentLoaded', () => {
  const app = window.createRemoteReadOnlyApp({
    api: {
      list: () => window.Api.getReportes()
    },
    rootId: 'public-list-root',
    emptyMessage: 'Aún no hay reportes registrados para mostrar.',
    render(records, escapeHtml) {
      return `
        <div class="row g-4">
          ${records.map(record => `
            <div class="col-md-6 col-xl-4">
              <article class="module-card h-100">
                <span class="status-badge status-active">${escapeHtml(record.estado || 'pendiente')}</span>
                <div class="module-icon"><i class="bi bi-file-earmark-text"></i></div>
                <h3 class="module-title">${escapeHtml(record.usuario_id)}</h3>
                <p class="module-text mb-1"><strong>Material:</strong> ${escapeHtml(record.tipo_residuo)}</p>
                <p class="module-text mb-1"><strong>Cantidad:</strong> ${escapeHtml(record.cantidad)}</p>
                <p class="module-text mb-1"><strong>Ubicación:</strong> ${escapeHtml(record.ubicacion)}</p>
                <p class="module-text mb-0"><strong>Fecha:</strong> ${escapeHtml(record.fecha)}</p>
              </article>
            </div>
          `).join('')}
        </div>
      `;
    }
  });

  app.init();
});
