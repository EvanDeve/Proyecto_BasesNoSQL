(function renderModulesPreview() {
  const root = document.getElementById("modules-preview-root");
  if (!root) return;
  const entries = [
  {
    "title": "Usuarios registrados",
    "icon": "people-fill",
    "admin": "./usuarios.html",
    "public": "./usuarios-publico.html",
    "text": "Administra las personas registradas dentro de TicoRecicla Connect."
  },
  {
    "title": "Residuos valorizables",
    "icon": "box-seam",
    "admin": "./residuos.html",
    "public": "./residuos-publico.html",
    "text": "Registra, edita y consulta materiales valorizables del sistema."
  },
  {
    "title": "Reportes de reciclaje",
    "icon": "clipboard-data",
    "admin": "./reportes-reciclaje.html",
    "public": "./reportes-publico.html",
    "text": "Administra reportes de reciclaje creados por los usuarios."
  },
  {
    "title": "Centros de acopio",
    "icon": "geo-alt",
    "admin": "./centros-acopio.html",
    "public": "./centros-publico.html",
    "text": "Administra centros de acopio y puntos de reciclaje disponibles."
  },
  {
    "title": "Recolecciones",
    "icon": "truck",
    "admin": "./recolecciones.html",
    "public": "./recolecciones-publico.html",
    "text": "Administra recolecciones programadas y completadas del sistema."
  },
  {
    "title": "Incentivos",
    "icon": "award",
    "admin": "./incentivos.html",
    "public": "./incentivos-publico.html",
    "text": "Administra incentivos, premios y recompensas disponibles."
  }
];

  root.innerHTML = `
    <section class="section-block">
      <div class="container">
        <div class="text-center mb-4">
          <p class="section-tag">Módulos del sistema</p>
          <h2 class="section-title">Vista general de la plataforma</h2>
          <p class="section-text mx-auto" style="max-width: 760px;">
            TicoRecicla Connect cuenta con 12 módulos conectados a la base de datos y listos para gestionar información ambiental.
          </p>
        </div>

        <div class="text-center mb-5">
          <a href="./modulos.html" class="btn btn-success btn-lg"><i class="bi bi-grid-1x2-fill me-2"></i>Ver todos los módulos del sistema</a>
        </div>

        <div class="row g-4">
          ${entries.map(entry => `
            <div class="col-md-6 col-xl-4">
              <article class="module-card h-100">
                <span class="status-badge status-active">CRUD completo</span>
                <div class="module-icon"><i class="bi bi-${entry.icon}"></i></div>
                <h3 class="module-title">${entry.title}</h3>
                <p class="module-text">${entry.text}</p>
              </article>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
})();
