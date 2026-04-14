(function renderRecoleccionesPageSection() {
  const root = document.getElementById("recolecciones-page-section-root");
  if (!root) return;

  const routes = [
    {
      nombre: "Ruta GAM Norte",
      zona: "Heredia, Tibás y Moravia",
      dia: "Lunes y jueves",
      horario: "7:00 a.m. - 2:00 p.m.",
      materiales: "Plástico, cartón, aluminio"
    },
    {
      nombre: "Ruta GAM Este",
      zona: "Curridabat, Tres Ríos y Cartago centro",
      dia: "Martes",
      horario: "8:00 a.m. - 3:30 p.m.",
      materiales: "Vidrio, papel, electrónicos pequeños"
    },
    {
      nombre: "Ruta GAM Oeste",
      zona: "Escazú, Santa Ana y Belén",
      dia: "Miércoles",
      horario: "7:30 a.m. - 1:30 p.m.",
      materiales: "Plástico, latas, tetra pak"
    },
    {
      nombre: "Ruta Pacífico",
      zona: "Puntarenas centro y zonas cercanas",
      dia: "Viernes",
      horario: "8:00 a.m. - 12:30 p.m.",
      materiales: "Cartón, vidrio, residuos valorizables"
    }
  ];

  root.innerHTML = `
    <section class="users-section section-block">
      <div class="container">
        <div class="text-center mb-5">
          <div class="d-flex justify-content-center gap-2 flex-wrap mt-3">
            <a href="./modulos.html" class="btn btn-outline-light">Volver a módulos</a>
          </div>
          <p class="section-tag">Nuevo módulo</p>
          <h1 class="section-title users-main-title">Rutas de recolección</h1>
          <p class="section-text users-main-text mx-auto" style="max-width: 780px;">
            Consulta visual de rutas activas de recolección dentro de Costa Rica. Este módulo muestra
            zonas, horarios y materiales recolectados de manera clara para facilitar la logística del sistema.
          </p>
        </div>

        <div class="row g-4 mb-4">
          <div class="col-md-4">
            <div class="stat-card">
              <p class="stat-label">Rutas activas</p>
              <div class="stat-value">4</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="stat-card">
              <p class="stat-label">Provincias cubiertas</p>
              <div class="stat-value">5</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="stat-card">
              <p class="stat-label">Frecuencia semanal</p>
              <div class="stat-value">5 días</div>
            </div>
          </div>
        </div>

        <div class="row g-4 align-items-stretch">
          <div class="col-12 col-xl-7">
            <div class="panel-card h-100">
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                <div>
                  <h3 class="form-title mb-1">Cobertura en mapa</h3>
                  <p class="form-text mb-0">Vista ilustrativa de puntos de recolección en Costa Rica.</p>
                </div>
                <span class="status-badge status-active">Mapa ilustrativo</span>
              </div>

              <div class="reco-map-wrap" style="padding: 20px;">
                <div
                  style="
                    position: relative;
                    width: 100%;
                    min-height: 420px;
                    border-radius: 22px;
                    background: linear-gradient(180deg, #f7faef 0%, #edf6dc 100%);
                    border: 1px solid rgba(126, 165, 61, 0.14);
                    overflow: hidden;
                  "
                >
                  <img
                    src="./assets/img/mapa-costa-rica.png"
                    alt="Mapa de Costa Rica"
                    style="
                      width: 100%;
                      max-width: 760px;
                      display: block;
                      margin: 0 auto;
                      padding: 24px 18px 10px;
                      position: relative;
                      z-index: 1;
                    "
                  />

                  <!-- PUNTOS -->
                  <span style="
                    position:absolute; top: 37%; left: 42%;
                    width: 22px; height: 22px; border-radius: 50%;
                    background: #5a7f1d; border: 4px solid #fff;
                    box-shadow: 0 0 0 4px rgba(90,127,29,0.15);
                    z-index: 3;
                  "></span>

                  <span style="
                    position:absolute; top: 34%; left: 53%;
                    width: 22px; height: 22px; border-radius: 50%;
                    background: #5a7f1d; border: 4px solid #fff;
                    box-shadow: 0 0 0 4px rgba(90,127,29,0.15);
                    z-index: 3;
                  "></span>

                  <span style="
                    position:absolute; top: 43%; left: 60%;
                    width: 22px; height: 22px; border-radius: 50%;
                    background: #5a7f1d; border: 4px solid #fff;
                    box-shadow: 0 0 0 4px rgba(90,127,29,0.15);
                    z-index: 3;
                  "></span>

                  <span style="
                    position:absolute; top: 57%; left: 66%;
                    width: 22px; height: 22px; border-radius: 50%;
                    background: #5a7f1d; border: 4px solid #fff;
                    box-shadow: 0 0 0 4px rgba(90,127,29,0.15);
                    z-index: 3;
                  "></span>

                  <span style="
                    position:absolute; top: 50%; left: 73%;
                    width: 22px; height: 22px; border-radius: 50%;
                    background: #5a7f1d; border: 4px solid #fff;
                    box-shadow: 0 0 0 4px rgba(90,127,29,0.15);
                    z-index: 3;
                  "></span>

                  <span style="
                    position:absolute; top: 55%; left: 34%;
                    width: 22px; height: 22px; border-radius: 50%;
                    background: #5a7f1d; border: 4px solid #fff;
                    box-shadow: 0 0 0 4px rgba(90,127,29,0.15);
                    z-index: 3;
                  "></span>

                  <!-- LÍNEAS -->
                  <svg
                    viewBox="0 0 1000 520"
                    preserveAspectRatio="none"
                    style="
                      position:absolute;
                      inset: 0;
                      width: 100%;
                      height: 100%;
                      z-index: 2;
                      pointer-events:none;
                    "
                  >
                    <line x1="430" y1="195" x2="535" y2="180"
                      stroke="rgba(90,127,29,0.55)" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 10"/>
                    <line x1="535" y1="180" x2="610" y2="225"
                      stroke="rgba(90,127,29,0.55)" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 10"/>
                    <line x1="610" y1="225" x2="735" y2="260"
                      stroke="rgba(90,127,29,0.55)" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 10"/>
                    <line x1="430" y1="195" x2="345" y2="315"
                      stroke="rgba(90,127,29,0.55)" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 10"/>
                    <line x1="610" y1="225" x2="665" y2="315"
                      stroke="rgba(90,127,29,0.55)" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 10"/>
                  </svg>

                  <!-- ETIQUETAS -->
                  <div style="
                    position:absolute; top: 23%; left: 36%;
                    background:#fff; color:#446118; font-weight:800;
                    font-size: 15px; padding: 8px 14px; border-radius: 999px;
                    z-index: 4; box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                  ">Heredia</div>

                  <div style="
                    position:absolute; top: 19%; left: 47%;
                    background:#fff; color:#446118; font-weight:800;
                    font-size: 15px; padding: 8px 14px; border-radius: 999px;
                    z-index: 4; box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                  ">San José</div>

                  <div style="
                    position:absolute; top: 41%; left: 53%;
                    background:#fff; color:#446118; font-weight:800;
                    font-size: 15px; padding: 8px 14px; border-radius: 999px;
                    z-index: 4; box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                  ">Cartago</div>

                  <div style="
                    position:absolute; top: 34%; left: 69%;
                    background:#fff; color:#446118; font-weight:800;
                    font-size: 15px; padding: 8px 14px; border-radius: 999px;
                    z-index: 4; box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                  ">Puntarenas</div>

                  <div style="
                    position:absolute; top: 58%; left: 22%;
                    background:#fff; color:#446118; font-weight:800;
                    font-size: 15px; padding: 8px 14px; border-radius: 999px;
                    z-index: 4; box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                  ">Zona Oeste</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-5">
            <div class="d-grid gap-3">
              ${routes.map(route => `
                <div class="reco-route-card">
                  <div class="d-flex justify-content-between align-items-start gap-3 flex-wrap mb-2">
                    <div>
                      <h3 class="reco-route-title">${route.nombre}</h3>
                      <p class="reco-route-zone mb-0"><i class="bi bi-geo-alt me-2"></i>${route.zona}</p>
                    </div>
                    <span class="route-badge"><i class="bi bi-truck me-1"></i>${route.dia}</span>
                  </div>

                  <div class="reco-route-meta">
                    <span><i class="bi bi-clock me-2"></i>${route.horario}</span>
                    <span><i class="bi bi-recycle me-2"></i>${route.materiales}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
})();