window.createRemoteCrudApp = function createRemoteCrudApp(config) {
  const state = {
    records: [],
    isEditing: false,
    currentId: null
  };

  async function loadRecords() {
    try {
      state.records = await config.api.list();
      renderTable();
    } catch (error) {
      console.error(error);
      showAlert('Error al cargar datos.', 'danger');
    }
  }

  function showAlert(message, type = 'success') {
    const container = document.getElementById('alert-container');
    if (!container) return;
    container.innerHTML = `<div class="alert alert-${type} mb-0" role="alert">${message}</div>`;
    setTimeout(() => {
      if (container.innerHTML.includes(message)) {
        container.innerHTML = '';
      }
    }, 3000);
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getFormData() {
    return config.fields.reduce((acc, field) => {
      const element = document.getElementById(field.id);
      acc[field.id] = field.transform ? field.transform(element.value) : element.value.trim();
      return acc;
    }, {});
  }

  function fillForm(record) {
    document.getElementById('record-id').value = record._id; // MongoDB uses _id
    config.fields.forEach(field => {
      const element = document.getElementById(field.id);
      element.value = record[field.id] ?? '';
    });
    document.getElementById('crud-form-title').textContent = config.editTitle;
    state.isEditing = true;
    state.currentId = record._id;
    document.getElementById('crud-form').scrollIntoView({ behavior: 'smooth' });
  }

  function clearForm() {
    document.getElementById('record-id').value = '';
    config.fields.forEach(field => {
      document.getElementById(field.id).value = '';
    });
    document.getElementById('crud-form-title').textContent = config.createTitle;
    state.isEditing = false;
    state.currentId = null;
  }

  function renderTable() {
    const tbody = document.getElementById('crud-table-body');
    if (!tbody) return;

    if (!state.records.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="${config.columns.length + 1}">
            <div class="empty-state">
              <i class="bi bi-inboxes fs-1 d-block mb-2"></i>
              No hay registros disponibles.
            </div>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = state.records.map(record => `
      <tr>
        ${config.columns.map(column => `<td>${escapeHtml(record[column.key] ?? '-')}</td>`).join('')}
        <td>
          <div class="action-buttons">
            <button class="btn btn-warning btn-sm" data-action="edit" data-id="${record._id}">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-danger btn-sm" data-action="delete" data-id="${record._id}">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = getFormData();

    try {
      if (state.isEditing && state.currentId) {
        await config.api.update(state.currentId, data);
        showAlert(config.messages.updated, 'success');
      } else {
        await config.api.create(data);
        showAlert(config.messages.created, 'success');
      }
      clearForm();
      await loadRecords();
    } catch (error) {
      console.error(error);
      showAlert('Error al guardar el registro.', 'danger');
    }
  }

  async function handleTableClick(event) {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    const { action, id } = button.dataset;
    const record = state.records.find(item => item._id === id);
    if (!record) return;

    if (action === 'edit') {
      fillForm(record);
      return;
    }

    if (action === 'delete') {
      const confirmed = window.confirm(config.messages.confirmDelete);
      if (!confirmed) return;
      try {
        await config.api.delete(id);
        showAlert(config.messages.deleted, 'success');
        await loadRecords();
        clearForm();
      } catch (error) {
        console.error(error);
        showAlert('Error al eliminar el registro.', 'danger');
      }
    }
  }

  function bindEvents() {
    document.getElementById('crud-form')?.addEventListener('submit', handleSubmit);
    document.getElementById('cancel-edit-btn')?.addEventListener('click', clearForm);
    document.getElementById('reload-btn')?.addEventListener('click', loadRecords);
    document.getElementById('crud-table-body')?.addEventListener('click', handleTableClick);
  }

  function init() {
    bindEvents();
    loadRecords();
  }

  return { init };
};
