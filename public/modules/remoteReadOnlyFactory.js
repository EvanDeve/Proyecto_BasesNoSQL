window.createRemoteReadOnlyApp = function createRemoteReadOnlyApp(config) {
  let records = [];

  async function loadRecords() {
    try {
      records = await config.api.list();
      render();
    } catch (error) {
      console.error(error);
      const root = document.getElementById(config.rootId);
      if (root) {
        root.innerHTML = `<div class="alert alert-danger">Error al cargar datos del servidor.</div>`;
      }
    }
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function render() {
    const root = document.getElementById(config.rootId);
    if (!root) return;

    if (!records.length) {
      root.innerHTML = `
        <div class="empty-state text-center text-light py-5">
          <i class="bi bi-search fs-1 d-block mb-3 opacity-50"></i>
          <p class="fs-5">${config.emptyMessage}</p>
        </div>
      `;
      return;
    }

    root.innerHTML = config.render(records, escapeHtml);
  }

  function init() {
    loadRecords();
  }

  return { init, render };
};
