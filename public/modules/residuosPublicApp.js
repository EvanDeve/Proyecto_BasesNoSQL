document.addEventListener('DOMContentLoaded', () => {
  const app = window.createLocalReadOnlyApp({
    storageKey: 'ticorecicla_residuos',
    rootId: 'public-list-root',
    emptyMessage: 'Aún no hay residuos registrados para mostrar.',
    render(records, escapeHtml) {
      return `
        <div class="row g-4">
          ${records.map(record => `
            <div class="col-md-6 col-xl-4">
              <article class="module-card h-100">
                <span class="status-badge status-active">${escapeHtml(record.estado || 'Activo')}</span>
                <div class="module-icon"><i class="bi bi-box-seam"></i></div>
                <h3 class="module-title">${escapeHtml(record.nombre)}</h3>
                <p class="module-text mb-2"><strong>Categoría:</strong> ${escapeHtml(record.categoria || '-')}</p>
                <p class="module-text mb-2"><strong>Unidad:</strong> ${escapeHtml(record.unidadMedida || '-')}</p>
                <p class="module-text mb-0">${escapeHtml(record.descripcion || 'Sin descripción registrada.')}</p>
              </article>
            </div>
          `).join('')}
        </div>
      `;
    }
  });

  app.init();
});
