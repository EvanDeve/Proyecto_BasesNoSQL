(function renderEcosystemPreview() {
  const root = document.getElementById("ecosystem-preview-root");
  if (!root) return;

  root.innerHTML = `
    <section class="preview-section section-block">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-tag">Vista del ecosistema</p>
          <h2 class="section-title">Proyección funcional de TicoRecicla Connect</h2>
          <p class="section-text mx-auto" style="max-width: 760px;">
            Esta sección muestra cómo se visualizarán otros componentes del sistema
            se incorpora nuevas colecciones.
          </p>
        </div>

        <div class="row g-4 mb-4">
          <div class="col-md-6 col-xl-3">
            <div class="stat-card">
              <p class="stat-label">Usuarios activos</p>
              <div class="stat-value">CRUD</div>
            </div>
          </div>

          <div class="col-md-6 col-xl-3">
            <div class="stat-card">
              <p class="stat-label">Residuos valorizables</p>
              <div class="stat-value">Preview</div>
            </div>
          </div>

          <div class="col-md-6 col-xl-3">
            <div class="stat-card">
              <p class="stat-label">Centros de acopio</p>
              <div class="stat-value">Preview</div>
            </div>
          </div>

          <div class="col-md-6 col-xl-3">
            <div class="stat-card">
              <p class="stat-label">Incentivos</p>
              <div class="stat-value">Preview</div>
            </div>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-xl-4">
            <article class="preview-card">
              <div class="preview-icon"><i class="bi bi-box2-heart"></i></div>
              <h3 class="preview-title">Panel de residuos</h3>
              <p class="preview-text">
                Próximamente se podrán visualizar tipos de residuos, clasificación
                y material reportado por los ciudadanos.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-4">
            <article class="preview-card">
              <div class="preview-icon"><i class="bi bi-geo"></i></div>
              <h3 class="preview-title">Mapa de centros</h3>
              <p class="preview-text">
                Se integrará una visualización de centros de reciclaje, ubicaciones
                y posibles zonas de impacto.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-4">
            <article class="preview-card">
              <div class="preview-icon"><i class="bi bi-gift-fill"></i></div>
              <h3 class="preview-title">Incentivos ciudadanos</h3>
              <p class="preview-text">
                El sistema mostrará beneficios, puntos y recompensas por participación
                en el reciclaje.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-4">
            <article class="preview-card">
              <div class="preview-icon"><i class="bi bi-truck-front-fill"></i></div>
              <h3 class="preview-title">Rutas y recolecciones</h3>
              <p class="preview-text">
                Administración futura de rutas de recolección, planificación y control logístico.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-4">
            <article class="preview-card">
              <div class="preview-icon"><i class="bi bi-clock-history"></i></div>
              <h3 class="preview-title">Trazabilidad de materiales</h3>
              <p class="preview-text">
                Visualización del recorrido del material desde el origen hasta su
                transformación o disposición final.
              </p>
            </article>
          </div>

          <div class="col-md-6 col-xl-4">
            <article class="preview-card">
              <div class="preview-icon"><i class="bi bi-bell-fill"></i></div>
              <h3 class="preview-title">Notificaciones</h3>
              <p class="preview-text">
                Módulo planeado para alertas, eventos del sistema y comunicación con usuarios.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  `;
})();