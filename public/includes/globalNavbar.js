(function renderGlobalNavbar() {
  const root = document.getElementById("navbar-root");
  if (!root) return;

  const path = window.location.pathname.split("/").pop() || "index.html";

  function isActive(files) {
    return files.includes(path) ? "active" : "";
  }

  const addMenuItems = [
  {
    "href": "./usuarios.html",
    "icon": "people-fill",
    "title": "Añadir usuario"
  },
  {
    "href": "./residuos.html",
    "icon": "box-seam",
    "title": "Añadir residuo"
  },
  {
    "href": "./reportes-reciclaje.html",
    "icon": "clipboard-data",
    "title": "Añadir reporte de reciclaje"
  },
  {
    "href": "./centros-acopio.html",
    "icon": "geo-alt",
    "title": "Añadir centro de acopio"
  },
  {
    "href": "./recolecciones.html",
    "icon": "truck",
    "title": "Añadir recolección"
  },
  {
    "href": "./incentivos.html",
    "icon": "award",
    "title": "Añadir incentivo"
  },
  {
    "href": "./recicladores.html",
    "icon": "person-badge",
    "title": "Añadir reciclador"
  },
  {
    "href": "./recompensas-usuario.html",
    "icon": "gift",
    "title": "Añadir recompensa de usuario"
  },
  {
    "href": "./empresas-recicladoras.html",
    "icon": "building",
    "title": "Añadir empresa recicladora"
  },
  {
    "href": "./rutas-recoleccion.html",
    "icon": "signpost",
    "title": "Añadir ruta de recolección"
  },
  {
    "href": "./historial-materiales.html",
    "icon": "clock-history",
    "title": "Añadir historial de material"
  },
  {
    "href": "./notificaciones.html",
    "icon": "bell",
    "title": "Añadir notificación"
  }
];
  const viewMenuItems = [
  {
    "href": "./usuarios-publico.html",
    "icon": "people-fill",
    "title": "Ver usuarios registrados"
  },
  {
    "href": "./residuos-publico.html",
    "icon": "box-seam",
    "title": "Ver residuos valorizables"
  },
  {
    "href": "./reportes-publico.html",
    "icon": "clipboard-data",
    "title": "Ver reportes de reciclaje"
  },
  {
    "href": "./centros-publico.html",
    "icon": "geo-alt",
    "title": "Ver centros de acopio"
  },
  {
    "href": "./recolecciones-publico.html",
    "icon": "truck",
    "title": "Ver recolecciones"
  },
  {
    "href": "./incentivos-publico.html",
    "icon": "award",
    "title": "Ver incentivos"
  },
  {
    "href": "./recicladores-publico.html",
    "icon": "person-badge",
    "title": "Ver recicladores"
  },
  {
    "href": "./recompensas-usuario-publico.html",
    "icon": "gift",
    "title": "Ver recompensas de usuario"
  },
  {
    "href": "./empresas-recicladoras-publico.html",
    "icon": "building",
    "title": "Ver empresas recicladoras"
  },
  {
    "href": "./rutas-recoleccion-publico.html",
    "icon": "signpost",
    "title": "Ver rutas de recolección"
  },
  {
    "href": "./historial-materiales-publico.html",
    "icon": "clock-history",
    "title": "Ver historial de materiales"
  },
  {
    "href": "./notificaciones-publico.html",
    "icon": "bell",
    "title": "Ver notificaciones"
  }
];

  function renderMenuItems(items) {
    return items.map(item => `
      <a href="${item.href}" class="tico-side-link ${isActive([item.href.replace('./','')])}">
        <span class="tico-side-left">
          <span class="tico-side-icon">
            <i class="bi ${item.icon}"></i>
          </span>
          <span class="tico-side-title">${item.title}</span>
        </span>
        <i class="bi bi-chevron-right tico-side-arrow"></i>
      </a>
    `).join("");
  }

  root.innerHTML = `
    <div class="topbar py-2">
      <div class="container d-flex flex-wrap justify-content-between align-items-center gap-2">
        <div class="d-flex flex-wrap gap-3">
          <span><i class="bi bi-telephone-fill me-2"></i>+506 2560-2171</span>
          <span><i class="bi bi-envelope-fill me-2"></i>info@ticorecicla.com</span>
        </div>
        <div class="d-flex gap-3">
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg main-navbar sticky-top">
      <div class="container">
        <a class="navbar-brand text-white" href="./index.html">
          <i class="bi bi-recycle me-2 brand-green"></i>
          TICO<span class="brand-green">RECICLA</span>
        </a>

        <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#ticoGlobalNav" aria-controls="ticoGlobalNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list fs-2"></i>
        </button>

        <div class="collapse navbar-collapse" id="ticoGlobalNav">
          <div class="tico-actions-wrap ms-lg-4 me-lg-4">
            <button class="tico-menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuAgregarGlobal" aria-controls="menuAgregarGlobal">
              <i class="bi bi-list"></i>
              <span>Añadir registros</span>
              <i class="bi bi-chevron-down"></i>
            </button>

            <button class="tico-menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuVerGlobal" aria-controls="menuVerGlobal">
              <i class="bi bi-list"></i>
              <span>Ver registros</span>
              <i class="bi bi-chevron-down"></i>
            </button>
          </div>

          <ul class="navbar-nav ms-auto gap-lg-3">
            <li class="nav-item"><a class="nav-link tico-main-nav-link ${isActive(['index.html',''])}" href="./index.html">Inicio</a></li>
            <li class="nav-item"><a class="nav-link tico-main-nav-link ${isActive(['modulos.html'])}" href="./modulos.html">Módulos</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="offcanvas offcanvas-start tico-offcanvas" tabindex="-1" id="menuAgregarGlobal" aria-labelledby="menuAgregarGlobalLabel">
      <div class="offcanvas-header tico-offcanvas-header">
        <h5 class="offcanvas-title" id="menuAgregarGlobalLabel"><i class="bi bi-grid me-2"></i>AÑADIR REGISTROS</h5>
        <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
      </div>
      <div class="offcanvas-body p-0"><div class="tico-side-list">${renderMenuItems(addMenuItems)}</div></div>
    </div>

    <div class="offcanvas offcanvas-start tico-offcanvas" tabindex="-1" id="menuVerGlobal" aria-labelledby="menuVerGlobalLabel">
      <div class="offcanvas-header tico-offcanvas-header">
        <h5 class="offcanvas-title" id="menuVerGlobalLabel"><i class="bi bi-grid me-2"></i>VER REGISTROS</h5>
        <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
      </div>
      <div class="offcanvas-body p-0"><div class="tico-side-list">${renderMenuItems(viewMenuItems)}</div></div>
    </div>
  `;
})();
