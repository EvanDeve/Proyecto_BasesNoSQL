document.addEventListener('DOMContentLoaded', () => {
  const app = window.createRemoteReadOnlyApp({
    api: {
      list: () => window.Api.getCentros()
    },
    rootId: 'public-list-root',
    emptyMessage: 'Aún no hay centros de acopio registrados para mostrar.',
    render(records, escapeHtml) {
      return `
        <div class="row g-4">
          ${records.map(record => `
            <div class="col-md-6 col-xl-4">
              <article class="module-card h-100">
                <div class="module-icon"><i class="bi bi-geo-alt"></i></div>
                <h3 class="module-title">${escapeHtml(record.nombre)}</h3>
                <p class="module-text mb-2"><strong>Encargado:</strong> ${escapeHtml(record.encargado)}</p>
                <p class="module-text mb-2"><strong>Teléfono:</strong> ${escapeHtml(record.telefono)}</p>
                <p class="module-text mb-2"><strong>Horario:</strong> ${escapeHtml(record.horario)}</p>
                <p class="module-text mb-2"><strong>Dirección:</strong> ${escapeHtml(record.direccion)}</p>
                <p class="module-text mb-0"><strong>Materiales:</strong> ${escapeHtml(record.materiales)}</p>
              </article>
            </div>
          `).join('')}
        </div>
      `;
    }
  });

  app.init();
});
