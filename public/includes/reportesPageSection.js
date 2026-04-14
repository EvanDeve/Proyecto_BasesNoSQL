(function renderReportesPageSection() {
  const root = document.getElementById("reportes-page-section-root");
  if (!root) return;

  root.innerHTML = `
    <section class="users-section section-block">
      <div class="container">
        <div class="text-center mb-5">
          <div class="d-flex justify-content-center gap-2 flex-wrap mt-3">
            <a href="./reportes-publico.html" class="btn btn-outline-light"><i class="bi bi-eye me-2"></i>Ver reportes publicados</a>
            <a href="./modulos.html" class="btn btn-outline-light">Volver a módulos</a>
          </div>
          <p class="section-tag">Frontend activo</p>
          <h1 class="section-title users-main-title">Reportes de reciclaje</h1>
          <p class="section-text users-main-text mx-auto" style="max-width: 760px;">
            Módulo visual para registrar reportes ciudadanos sobre material disponible para recolección.
            Toda la información se maneja en frontend con almacenamiento local y ahora también se muestra en una vista pública de consulta.
          </p>
        </div>

        <div class="row g-4 align-items-start">
          <div class="col-12 col-xl-4">
            <div class="panel-card">
              <h3 id="crud-form-title" class="form-title">Registrar reporte</h3>
              <p class="form-text">Completa los datos del reporte de reciclaje.</p>
              <form id="crud-form" novalidate>
                <input type="hidden" id="record-id" />
                <div class="mb-3">
                  <label for="usuario" class="form-label">Usuario</label>
                  <input id="usuario" class="form-control custom-input" type="text" placeholder="Ej: María González" required />
                </div>
                <div class="mb-3">
                  <label for="material" class="form-label">Material reportado</label>
                  <input id="material" class="form-control custom-input" type="text" placeholder="Ej: Cartón limpio" required />
                </div>
                <div class="mb-3">
                  <label for="cantidad" class="form-label">Cantidad</label>
                  <input id="cantidad" class="form-control custom-input" type="number" min="0" step="0.01" placeholder="Ej: 12.5" required />
                </div>
                <div class="mb-3">
                  <label for="ubicacion" class="form-label">Ubicación</label>
                  <input id="ubicacion" class="form-control custom-input" type="text" placeholder="Ej: Desamparados, San José" required />
                </div>
                <div class="mb-3">
                  <label for="estado" class="form-label">Estado</label>
                  <select id="estado" class="form-select custom-input" required>
                    <option value="">Selecciona un estado</option>
                    <option>Pendiente</option>
                    <option>En proceso</option>
                    <option>Recolectado</option>
                    <option>Cancelado</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="fecha" class="form-label">Fecha</label>
                  <input id="fecha" class="form-control custom-input" type="date" required />
                </div>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-success btn-lg"><i class="bi bi-floppy me-2"></i>Guardar reporte</button>
                  <button type="button" id="cancel-edit-btn" class="btn btn-outline-secondary">Cancelar edición</button>
                </div>
              </form>
              <div id="alert-container" class="mt-3"></div>
            </div>
          </div>

          <div class="col-12 col-xl-8">
            <div class="panel-card">
              <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
                <div>
                  <h3 class="form-title mb-1">Reportes registrados</h3>
                  <p class="form-text mb-0">Listado de reportes generados por usuarios desde el frontend.</p>
                </div>
                <button id="reload-btn" class="btn btn-outline-success btn-sm px-3"><i class="bi bi-arrow-clockwise me-2"></i>Recargar</button>
              </div>
              <div class="table-responsive">
                <table class="table table-dark custom-table align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Usuario</th>
                      <th>Material</th>
                      <th>Cantidad</th>
                      <th>Ubicación</th>
                      <th>Estado</th>
                      <th>Fecha</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody id="crud-table-body"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
})();
