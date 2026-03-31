(function renderModulesPreview() {
  const root = document.getElementById("modules-preview-root");
  if (!root) return;

  root.innerHTML = `
    <section class="section-block">
      <div class="container">
        <div class="text-center mb-4">
          <p class="section-tag">Módulos del sistema</p>
          <h2 class="section-title">Vista general de la plataforma</h2>
          <p class="section-text mx-auto" style="max-width: 760px;">
            TicoRecicla Connect está pensado como un ecosistema modular. Actualmente
            el backend tiene activo el módulo de usuarios, mientras los demás componentes
            forman parte de la proyección funcional del sistema.
          </p>
        </div>

        <div class="text-center mb-5">
          <a href="./modulos.html" class="btn btn-success btn-lg">
            <i class="bi bi-grid-1x2-fill me-2"></i>Ver todos los módulos del sistema
          </a>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-xl-4">
            <article class="module-card">
              <span class="status-badge status-active">Activo</span>
              <div class="module-icon"><i class="bi bi-people-fill"></i></div>
              <h3 class="module-title">Usuarios</h3>
              <p class="module-text">
                Módulo funcional conectado al backend para registrar, editar, listar
                y eliminar usuarios.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-4">
            <article class="module-card">
              <span class="status-badge status-soon">Próximamente</span>
              <div class="module-icon"><i class="bi bi-box-seam"></i></div>
              <h3 class="module-title">Residuos</h3>
              <p class="module-text">
                Gestión futura de materiales reciclables y clasificación de residuos.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-4">
            <article class="module-card">
              <span class="status-badge status-soon">Próximamente</span>
              <div class="module-icon"><i class="bi bi-geo-alt-fill"></i></div>
              <h3 class="module-title">Centros de acopio</h3>
              <p class="module-text">
                Administración visual y operativa de puntos de reciclaje y recepción.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  `;
})();