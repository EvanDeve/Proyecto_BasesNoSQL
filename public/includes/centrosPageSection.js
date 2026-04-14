(function renderCentrosPageSection() {
  const root = document.getElementById("centros-page-section-root");
  if (!root) return;

  root.innerHTML = `
    <section class="users-section section-block">
      <div class="container">
        <div class="text-center mb-5">
          <div class="d-flex justify-content-center gap-2 flex-wrap mt-3">
            <a href="./centros-publico.html" class="btn btn-outline-light"><i class="bi bi-eye me-2"></i>Ver centros publicados</a>
            <a href="./modulos.html" class="btn btn-outline-light">Volver a módulos</a>
          </div>
          <p class="section-tag">Frontend activo</p>
          <h1 class="section-title users-main-title">Centros de acopio</h1>
          <p class="section-text users-main-text mx-auto" style="max-width: 760px;">
            Módulo visual para administrar centros de acopio y puntos de recepción de materiales reciclables.
            Se mantiene en frontend con persistencia local.
          </p>
        </div>

        <div class="row g-4 align-items-start">
          <div class="col-12 col-xl-4">
            <div class="panel-card">
              <h3 id="crud-form-title" class="form-title">Registrar centro</h3>
              <p class="form-text">Completa la información del centro de acopio.</p>
              <form id="crud-form" novalidate>
                <input type="hidden" id="record-id" />
                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre del centro</label>
                  <input id="nombre" class="form-control custom-input" type="text" placeholder="Ej: Centro Verde Heredia" required />
                </div>
                <div class="mb-3">
                  <label for="encargado" class="form-label">Encargado</label>
                  <input id="encargado" class="form-control custom-input" type="text" placeholder="Ej: Luis Ramírez" required />
                </div>
                <div class="mb-3">
                  <label for="telefono" class="form-label">Teléfono</label>
                  <input id="telefono" class="form-control custom-input" type="text" placeholder="Ej: 8888-1111" required />
                </div>
                <div class="mb-3">
                  <label for="direccion" class="form-label">Dirección</label>
                  <input id="direccion" class="form-control custom-input" type="text" placeholder="Ej: Tibás, San José" required />
                </div>
                <div class="mb-3">
                  <label for="horario" class="form-label">Horario</label>
                  <input id="horario" class="form-control custom-input" type="text" placeholder="Ej: Lunes a sábado, 8:00 a.m. - 5:00 p.m." required />
                </div>
                <div class="mb-3">
                  <label for="materiales" class="form-label">Materiales aceptados</label>
                  <textarea id="materiales" class="form-control custom-input custom-textarea" rows="3" placeholder="Ej: Plástico, vidrio, aluminio, cartón" required></textarea>
                </div>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-success btn-lg"><i class="bi bi-floppy me-2"></i>Guardar centro</button>
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
                  <h3 class="form-title mb-1">Centros registrados</h3>
                  <p class="form-text mb-0">Listado de centros de acopio administrados desde el navegador.</p>
                </div>
                <button id="reload-btn" class="btn btn-outline-success btn-sm px-3"><i class="bi bi-arrow-clockwise me-2"></i>Recargar</button>
              </div>
              <div class="table-responsive">
                <table class="table table-dark custom-table align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Encargado</th>
                      <th>Teléfono</th>
                      <th>Dirección</th>
                      <th>Horario</th>
                      <th>Materiales</th>
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
