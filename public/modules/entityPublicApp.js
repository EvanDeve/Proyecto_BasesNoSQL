document.addEventListener('DOMContentLoaded', () => {
  const entityKey = document.body.dataset.entity;
  const config = window.EntityConfigs?.[entityKey];
  if (!config) return;

  const app = window.createRemoteReadOnlyApp({
    rootId: 'public-list-root',
    emptyMessage: `No hay ${config.publicTitle.toLowerCase()} disponibles.`,
    api: {
      list: () => window.Api.list(config.endpoint)
    },
    render(records, escapeHtml) {
      return `
        <div class="table-responsive">
          <table class="table table-dark custom-table align-middle mb-0">
            <thead>
              <tr>
                ${config.columns.map(column => `<th>${column.label}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${records.map(record => `
                <tr>
                  ${config.columns.map(column => `<td>${escapeHtml(record[column.key] ?? '-')}</td>`).join('')}
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
