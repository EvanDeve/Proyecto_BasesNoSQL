(function renderGenericCrudPageSection() {
  const root = document.getElementById("generic-crud-page-section-root");
  const entityKey = document.body.dataset.entity;
  const config = window.EntityConfigs?.[entityKey];
  if (!root || !config) return;

  function renderField(field) {
    if (field.type === 'select') {
      return `
        <div class="mb-3">
          <label for="${field.id}" class="form-label">${field.label}</label>
          <select id="${field.id}" class="form-select custom-input" ${field.required ? 'required' : ''}>
            <option value="">Selecciona una opción</option>
            ${(field.options || []).map(option => `<option value="${option}">${option}</option>`).join('')}
          </select>
        </div>
      `;
    }

    if (field.type === 'textarea') {
      return `
        <div class="mb-3">
          <label for="${field.id}" class="form-label">${field.label}</label>
          <textarea id="${field.id}" class="form-control custom-input custom-textarea" rows="3" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}></textarea>
        </div>
      `;
    }

    return `
      <div class="mb-3">
        <label for="${field.id}" class="form-label">${field.label}</label>
        <input id="${field.id}" class="form-control custom-input" type="${field.type || 'text'}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''} />
      </div>
    `;
  }

  root.innerHTML = `
    <section class="users-section section-block">
      <div class="container">
        <div class="text-center mb-5">
          <div class="d-flex justify-content-center gap-2 flex-wrap mt-3">
            <a href="./${config.publicPage}" class="btn btn-outline-light"><i class="bi bi-eye me-2"></i>Ver registros publicados</a>
            <a href="./modulos.html" class="btn btn-outline-light">Volver a módulos</a>
          </div>
          <p class="section-tag">${config.sectionTag || 'CRUD activo'}</p>
          <h1 class="section-title users-main-title">${config.pageTitle}</h1>
          <p class="section-text users-main-text mx-auto" style="max-width: 780px;">${config.description}</p>
        </div>

        <div class="row g-4 align-items-start">
          <div class="col-12 col-xl-4">
            <div class="panel-card">
              <h3 id="crud-form-title" class="form-title">Registrar ${config.singular.toLowerCase()}</h3>
              <p class="form-text">Completa la información para guardar un nuevo registro.</p>
              <form id="crud-form" novalidate>
                <input type="hidden" id="record-id" />
                ${config.fields.map(renderField).join('')}
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-success btn-lg"><i class="bi bi-floppy me-2"></i>Guardar registro</button>
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
                  <h3 class="form-title mb-1">${config.plural}</h3>
                  <p class="form-text mb-0">Listado de registros creados en esta colección.</p>
                </div>
                <button id="reload-btn" class="btn btn-outline-success btn-sm px-3"><i class="bi bi-arrow-clockwise me-2"></i>Recargar</button>
              </div>
              <div class="table-responsive">
                <table class="table table-dark custom-table align-middle mb-0">
                  <thead>
                    <tr>
                      ${config.columns.map(column => `<th>${column.label}</th>`).join('')}
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
