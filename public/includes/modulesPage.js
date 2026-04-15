(function renderModulesPage() {
  const root = document.getElementById("modules-page-root");
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
  },
  {
    "title": "Recicladores",
    "icon": "person-badge",
    "admin": "./recicladores.html",
    "public": "./recicladores-publico.html",
    "text": "Administra los recicladores activos dentro del sistema."
  },
  {
    "title": "Recompensas de usuario",
    "icon": "gift",
    "admin": "./recompensas-usuario.html",
    "public": "./recompensas-usuario-publico.html",
    "text": "Administra canjes e historial de recompensas por usuario."
  },
  {
    "title": "Empresas recicladoras",
    "icon": "building",
    "admin": "./empresas-recicladoras.html",
    "public": "./empresas-recicladoras-publico.html",
    "text": "Administra empresas que procesan materiales reciclados."
  },
  {
    "title": "Rutas de recolección",
    "icon": "signpost",
    "admin": "./rutas-recoleccion.html",
    "public": "./rutas-recoleccion-publico.html",
    "text": "Administra rutas activas por zona y frecuencia."
  },
  {
    "title": "Historial de materiales",
    "icon": "clock-history",
    "admin": "./historial-materiales.html",
    "public": "./historial-materiales-publico.html",
    "text": "Administra trazabilidad de materiales desde su origen hasta su destino."
  },
  {
    "title": "Notificaciones",
    "icon": "bell",
    "admin": "./notificaciones.html",
    "public": "./notificaciones-publico.html",
    "text": "Administra mensajes y alertas enviadas por el sistema."
  }
];

  root.innerHTML = `
    <section class="section-block">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-tag">Sistema completo</p>
          <h2 class="section-title">Módulos de TicoRecicla Connect</h2>
          <p class="section-text mx-auto" style="max-width: 820px;">
            La plataforma ahora integra 12 colecciones con CRUD completo y vista pública de consulta para cada módulo.
          </p>
        </div>

        <div class="row g-4">
          ${entries.map(entry => `
            <div class="col-md-6 col-xl-3">
              <div class="module-card h-100">
                <span class="status-badge status-active">CRUD completo</span>
                <div class="module-icon"><i class="bi bi-${entry.icon}"></i></div>
                <h3 class="module-title">${entry.title}</h3>
                <p class="module-text">${entry.text}</p>
                <div class="d-flex gap-2 flex-wrap mt-3">
                  <a href="${entry.admin}" class="btn btn-success btn-sm">Administrar</a>
                  <a href="${entry.public}" class="btn btn-outline-success btn-sm">Ver publicados</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
})();
