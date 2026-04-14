(function renderPublicResiduosSection() {
  const root = document.getElementById('public-page-section-root');
  if (!root) return;

  root.innerHTML = `
    <section class="section-block users-section">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-tag">Consulta pública</p>
          <h1 class="section-title users-main-title">Residuos valorizables</h1>
          <p class="section-text users-main-text mx-auto" style="max-width: 760px;">
            Aquí cualquier usuario puede revisar los residuos registrados sin entrar al formulario de administración.
          </p>
          <div class="d-flex justify-content-center gap-2 flex-wrap mt-4">
            <a href="./residuos.html" class="btn btn-success"><i class="bi bi-plus-circle me-2"></i>Administrar residuos</a>
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
