(function renderModulesPreview() {
  const root = document.getElementById("modules-preview-root");
  if (!root) return;

  root.innerHTML = `
    <section class="section-block">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-tag">Módulos del sistema</p>
          <h2 class="section-title">Arquitectura funcional de la plataforma</h2>
          <p class="section-text mx-auto" style="max-width: 760px;">
            La base de datos contempla múltiples colecciones y módulos de trabajo.
            Actualmente el backend solo tiene activo el módulo de usuarios, pero la
            plataforma ya se presenta como un ecosistema completo de reciclaje.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-xl-3">
            <article class="module-card">
              <span class="status-badge status-active">Activo</span>
              <div class="module-icon"><i class="bi bi-people-fill"></i></div>
              <h3 class="module-title">Usuarios</h3>
              <p class="module-text">
                Registro, consulta, edición y eliminación de usuarios dentro de la plataforma.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-3">
            <article class="module-card">
              <span class="status-badge status-soon">Próximamente</span>
              <div class="module-icon"><i class="bi bi-box-seam"></i></div>
              <h3 class="module-title">Residuos</h3>
              <p class="module-text">
                Gestión de tipos de materiales reciclables y clasificación de residuos valorizables.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-3">
            <article class="module-card">
              <span class="status-badge status-soon">Próximamente</span>
              <div class="module-icon"><i class="bi bi-clipboard-data"></i></div>
              <h3 class="module-title">Reportes de reciclaje</h3>
              <p class="module-text">
                Reportes realizados por usuarios cuando cuentan con material disponible.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-3">
            <article class="module-card">
              <span class="status-badge status-soon">Próximamente</span>
              <div class="module-icon"><i class="bi bi-geo-alt-fill"></i></div>
              <h3 class="module-title">Centros de acopio</h3>
              <p class="module-text">
                Ubicación, administración y visualización de puntos de reciclaje y centros de recepción.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-3">
            <article class="module-card">
              <span class="status-badge status-soon">Próximamente</span>
              <div class="module-icon"><i class="bi bi-truck"></i></div>
              <h3 class="module-title">Recolecciones</h3>
              <p class="module-text">
                Monitoreo de procesos logísticos y seguimiento de recolecciones programadas.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-3">
            <article class="module-card">
              <span class="status-badge status-soon">Próximamente</span>
              <div class="module-icon"><i class="bi bi-award-fill"></i></div>
              <h3 class="module-title">Incentivos</h3>
              <p class="module-text">
                Administración de recompensas, puntos y beneficios por participación ciudadana.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-3">
            <article class="module-card">
              <span class="status-badge status-soon">Próximamente</span>
              <div class="module-icon"><i class="bi bi-signpost-2-fill"></i></div>
              <h3 class="module-title">Rutas de recolección</h3>
              <p class="module-text">
                Organización de recorridos y optimización del traslado de materiales reciclables.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-3">
            <article class="module-card">
              <span class="status-badge status-soon">Próximamente</span>
              <div class="module-icon"><i class="bi bi-clock-history"></i></div>
              <h3 class="module-title">Historial y trazabilidad</h3>
              <p class="module-text">
                Seguimiento del material desde su origen hasta su tratamiento o valorización final.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  `;
})();