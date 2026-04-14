(function renderPublicReportesSection() {
  const root = document.getElementById('public-page-section-root');
  if (!root) return;

  root.innerHTML = `
    <section class="section-block users-section">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-tag">Consulta pública</p>
          <h1 class="section-title users-main-title">Reportes de reciclaje</h1>
          <p class="section-text users-main-text mx-auto" style="max-width: 760px;">
            Esta vista permite consultar los reportes sin entrar a la parte de creación o edición.
          </p>
          <div class="d-flex justify-content-center gap-2 flex-wrap mt-4">
            <a href="./reportes-reciclaje.html" class="btn btn-success"><i class="bi bi-plus-circle me-2"></i>Administrar reportes</a>
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