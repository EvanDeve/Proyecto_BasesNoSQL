window.Alerts = (() => {
  function show(message, type = "success") {
    const container = document.getElementById("alert-container");
    if (!container) return;

    container.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;
  }

  return { show };
})();