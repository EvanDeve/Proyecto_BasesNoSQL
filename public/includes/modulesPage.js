(function renderModulesPage() {
  const root = document.getElementById("modules-page-root");
  if (!root) return;

  root.innerHTML = `
    <section class="section-block">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-tag">Sistema completo</p>
          <h2 class="section-title">Módulos de TicoRecicla Connect</h2>
          <p class="section-text mx-auto" style="max-width: 750px;">
            La plataforma está diseñada para integrar múltiples componentes del ecosistema
            de reciclaje. Actualmente solo el módulo de usuarios esta activo,
            pero el sistema contempla una estructura mucho más amplia.
          </p>
        </div>

        <div class="row g-4">
          ${createCard("Usuarios", "Activo", "people-fill", true)}
          ${createCard("Residuos", "Próximamente", "box-seam")}
          ${createCard("Reportes de reciclaje", "Próximamente", "clipboard-data")}
          ${createCard("Centros de acopio", "Próximamente", "geo-alt")}
          ${createCard("Recolecciones", "Próximamente", "truck")}
          ${createCard("Incentivos", "Próximamente", "award")}
          ${createCard("Rutas de recolección", "Próximamente", "signpost")}
          ${createCard("Trazabilidad", "Próximamente", "clock-history")}
        </div>
      </div>
    </section>
  `;

  function createCard(title, status, icon, active = false) {
    return `
      <div class="col-md-6 col-xl-3">
        <div class="module-card">
          <span class="status-badge ${active ? "status-active" : "status-soon"}">
            ${status}
          </span>

          <div class="module-icon">
            <i class="bi bi-${icon}"></i>
          </div>

          <h3 class="module-title">${title}</h3>

          <p class="module-text">
            ${
              active
                ? "Este módulo ya cuenta con CRUD funcional."
                : "Este componente forma parte del alcance de la plataforma y será integrado progresivamente."
            }
          </p>

          ${
            active
              ? `<a href="./usuarios.html" class="btn btn-success btn-sm mt-3">Ir al módulo</a>`
              : ""
          }
        </div>
      </div>
    `;
  }
})();