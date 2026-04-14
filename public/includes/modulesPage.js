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
            de reciclaje. Actualmente el módulo de usuarios está conectado al backend y los módulos de residuos, reportes de reciclaje y centros de acopio ya cuentan con interfaz funcional en frontend.
          </p>
        </div>

        <div class="row g-4">
          ${createCard("Usuarios", "Activo", "people-fill", true, "./usuarios.html")}
          ${createCard("Residuos", "Frontend", "box-seam", true, "./residuos.html", "./residuos-publico.html")}
          ${createCard("Reportes de reciclaje", "Frontend", "clipboard-data", true, "./reportes-reciclaje.html", "./reportes-publico.html")}
          ${createCard("Centros de acopio", "Frontend", "geo-alt", true, "./centros-acopio.html", "./centros-publico.html")}
          ${createCard("Recolecciones", "Próximamente", "truck")}
          ${createCard("Incentivos", "Próximamente", "award")}
        </div>
      </div>
    </section>
  `;

  function createCard(title, status, icon, active = false, href = "", publicHref = "") {
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
                ? "Este módulo ya cuenta con administración y una vista pública de consulta dentro del proyecto."
                : "Este componente forma parte del alcance de la plataforma y será integrado progresivamente."
            }
          </p>

          ${
            active
              ? `<div class="d-flex gap-2 flex-wrap mt-3"><a href="${href}" class="btn btn-success btn-sm">Administrar</a>${publicHref ? `<a href="${publicHref}" class="btn btn-outline-success btn-sm">Ver publicados</a>` : ""}</div>`
              : ""
          }
        </div>
      </div>
    `;
  }
})();