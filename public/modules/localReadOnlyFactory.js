window.createLocalReadOnlyApp = function createLocalReadOnlyApp(config) {
  function loadRecords() {
    try {
      const data = JSON.parse(localStorage.getItem(config.storageKey) || '[]');
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error(error);
      return [];
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

    const records = loadRecords();
    if (!records.length) {
      root.innerHTML = `
        <div class="empty-state text-center">
          <i class="bi bi-search fs-1 d-block mb-2"></i>
          ${config.emptyMessage}
        </div>
      `;
      return;
    }

    root.innerHTML = config.render(records, escapeHtml);
  }

  function init() {
    render();
    window.addEventListener('storage', render);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) render();
    });
    window.addEventListener('focus', render);
  }

  return { init, render };
};
