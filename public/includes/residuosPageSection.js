(function renderResiduosPageSection() {
  const root = document.getElementById("residuos-page-section-root");
  if (!root) return;

  root.innerHTML = `
    <section class="users-section section-block">
      <div class="container">
        <div class="text-center mb-5">
          <div class="d-flex justify-content-center gap-2 flex-wrap mt-3">
            <a href="./residuos-publico.html" class="btn btn-outline-light"><i class="bi bi-eye me-2"></i>Ver residuos publicados</a>
            <a href="./modulos.html" class="btn btn-outline-light">Volver a módulos</a>
          </div>
          <p class="section-tag">Frontend activo</p>
          <h1 class="section-title users-main-title">Gestión de residuos</h1>
          <p class="section-text users-main-text mx-auto" style="max-width: 760px;">
            Módulo visual para registrar, editar y listar residuos valorizables. También incluye acceso a una vista pública para que otros usuarios puedan consultarlos sin entrar a crear.
          </p>
        </div>

        <div class="row g-4 align-items-start">
          <div class="col-12 col-xl-4">
            <div class="panel-card">
              <h3 id="crud-form-title" class="form-title">Registrar residuo</h3>
              <p class="form-text">Completa la información del material reciclable.</p>
              <form id="crud-form" novalidate>
                <input type="hidden" id="record-id" />
                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre del residuo</label>
                  <input id="nombre" class="form-control custom-input" type="text" placeholder="Ej: Botellas PET" required />
                </div>
                <div class="mb-3">
                  <label for="categoria" class="form-label">Categoría</label>
                  <select id="categoria" class="form-select custom-input" required>
                    <option value="">Selecciona una categoría</option>
                    <option>Plástico</option>
                    <option>Papel y cartón</option>
                    <option>Vidrio</option>
                    <option>Metal</option>
                    <option>Electrónico</option>
                    <option>Orgánico</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="descripcion" class="form-label">Descripción</label>
                  <textarea id="descripcion" class="form-control custom-input custom-textarea" rows="3" placeholder="Ej: Envases transparentes limpios y secos"></textarea>
                </div>
                <div class="mb-3">
                  <label for="unidadMedida" class="form-label">Unidad de medida</label>
                  <select id="unidadMedida" class="form-select custom-input" required>
                    <option value="">Selecciona una unidad</option>
                    <option>Kilogramos</option>
                    <option>Unidades</option>
                    <option>Bolsas</option>
                    <option>Cajas</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="estado" class="form-label">Estado</label>
                  <select id="estado" class="form-select custom-input" required>
                    <option value="">Selecciona un estado</option>
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                </div>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-success btn-lg"><i class="bi bi-floppy me-2"></i>Guardar residuo</button>
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
                  <h3 class="form-title mb-1">Residuos registrados</h3>
                  <p class="form-text mb-0">Listado de materiales valorizables definidos en el frontend.</p>
                </div>
                <button id="reload-btn" class="btn btn-outline-success btn-sm px-3"><i class="bi bi-arrow-clockwise me-2"></i>Recargar</button>
              </div>
              <div class="table-responsive">
                <table class="table table-dark custom-table align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Categoría</th>
                      <th>Descripción</th>
                      <th>Unidad</th>
                      <th>Estado</th>
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
