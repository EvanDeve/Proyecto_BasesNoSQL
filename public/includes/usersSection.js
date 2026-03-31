(function renderUsersSection() {
  const root = document.getElementById("users-root");
  if (!root) return;

  root.innerHTML = `
    <section class="users-section section-block">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-tag">Módulo activo</p>
          <h2 class="section-title users-main-title">Gestión de usuarios</h2>
          <p class="section-text users-main-text mx-auto" style="max-width: 760px;">
            Este es el módulo que actualmente se encuentra conectado al backend.
            Desde aquí puedes registrar usuarios, consultarlos en la tabla, editarlos
            y eliminarlos.
          </p>
        </div>

        <div class="row g-4 align-items-start">
          <div class="col-12 col-xl-4">
            <div class="panel-card">
              <h3 id="form-title" class="form-title">Registrar usuario</h3>
              <p class="form-text">
                Completa la información para agregar un nuevo usuario al sistema TicoRecicla Connect.
              </p>

              <form id="user-form" novalidate>
                <input type="hidden" id="user-id" />

                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input id="nombre" class="form-control custom-input" type="text" placeholder="Ej: Ana Pérez" required />
                </div>

                <div class="mb-3">
                  <label for="correo" class="form-label">Correo</label>
                  <input id="correo" class="form-control custom-input" type="email" placeholder="Ej: ana@email.com" required />
                </div>

                <div class="mb-3">
                  <label for="telefono" class="form-label">Teléfono</label>
                  <input id="telefono" class="form-control custom-input" type="text" placeholder="Ej: 8888-8888" required />
                </div>

                <div class="mb-3">
                  <label for="puntos" class="form-label">Puntos</label>
                  <input id="puntos" class="form-control custom-input" type="number" placeholder="Ej: 100" required />
                </div>

                <div class="mb-3">
                  <label for="direccion" class="form-label">Dirección</label>
                  <input id="direccion" class="form-control custom-input" type="text" placeholder="Ej: San José, Costa Rica" required />
                </div>

                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-success btn-lg">
                    <i class="bi bi-floppy me-2"></i>Guardar usuario
                  </button>
                  <button type="button" id="cancel-edit-btn" class="btn btn-outline-secondary">
                    Cancelar edición
                  </button>
                </div>
              </form>

              <div id="alert-container" class="mt-3"></div>
            </div>
          </div>

          <div class="col-12 col-xl-8">
            <div class="panel-card">
              <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
                <div>
                  <h3 class="form-title mb-1">Usuarios registrados</h3>
                  <p class="form-text mb-0">
                    Información obtenida desde la API del backend.
                  </p>
                </div>

                <button id="reload-btn" class="btn btn-outline-success btn-sm px-3">
                  <i class="bi bi-arrow-clockwise me-2"></i>Recargar
                </button>
              </div>

              <div class="table-responsive">
                <table class="table table-dark custom-table align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Teléfono</th>
                      <th>Puntos</th>
                      <th>Dirección</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody id="users-table-body"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
})();