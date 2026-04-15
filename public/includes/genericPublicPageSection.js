(function renderGenericPublicPageSection() {
  const root = document.getElementById('public-page-section-root');
  const entityKey = document.body.dataset.entity;
  const config = window.EntityConfigs?.[entityKey];
  if (!root || !config) return;

  root.innerHTML = `
    <section class="section-block users-section">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-tag">Consulta pública</p>
          <h1 class="section-title users-main-title">${config.publicTitle}</h1>
          <p class="section-text users-main-text mx-auto" style="max-width: 760px;">${config.publicDescription}</p>
          <div class="d-flex justify-content-center gap-2 flex-wrap mt-4">
            <a href="./${config.adminPage}" class="btn btn-success"><i class="bi bi-plus-circle me-2"></i>Administrar registros</a>
            <a href="./modulos.html" class="btn btn-outline-light">Volver a módulos</a>
          </div>
        </div>

        <div class="panel-card">
          <div id="public-list-root"></div>
        </div>
      </div>
    </section>
  `;
})();
