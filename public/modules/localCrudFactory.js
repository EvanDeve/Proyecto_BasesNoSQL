window.createLocalCrudApp = function createLocalCrudApp(config) {
  const state = {
    records: [],
    isEditing: false,
    currentId: null
  };

  function loadRecords() {
    try {
      const data = JSON.parse(localStorage.getItem(config.storageKey) || '[]');
      state.records = Array.isArray(data) ? data : [];
    } catch (error) {
      state.records = [];
      console.error(error);
    }
  }

  function saveRecords() {
    localStorage.setItem(config.storageKey, JSON.stringify(state.records));
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
    document.getElementById('record-id').value = record.id;
    config.fields.forEach(field => {
      const element = document.getElementById(field.id);
      element.value = record[field.id] ?? '';
    });
    document.getElementById('crud-form-title').textContent = config.editTitle;
    state.isEditing = true;
    state.currentId = record.id;
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
            <button class="btn btn-warning btn-sm" data-action="edit" data-id="${record.id}">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-danger btn-sm" data-action="delete" data-id="${record.id}">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  function validate(data) {
    return config.fields.every(field => {
      if (!field.required) return true;
      const value = data[field.id];
      return value !== '' && value !== null && value !== undefined && !(typeof value === 'number' && Number.isNaN(value));
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = getFormData();

    if (!validate(data)) {
      showAlert('Completa todos los campos requeridos correctamente.', 'warning');
      return;
    }

    if (state.isEditing && state.currentId) {
      state.records = state.records.map(record => record.id === state.currentId ? { ...record, ...data } : record);
      showAlert(config.messages.updated, 'success');
    } else {
      state.records.unshift({ id: crypto.randomUUID(), ...data });
      showAlert(config.messages.created, 'success');
    }

    saveRecords();
    clearForm();
    renderTable();
  }

  function handleTableClick(event) {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    const { action, id } = button.dataset;
    const record = state.records.find(item => item.id === id);
    if (!record) return;

    if (action === 'edit') {
      fillForm(record);
      return;
    }

    if (action === 'delete') {
      const confirmed = window.confirm(config.messages.confirmDelete);
      if (!confirmed) return;
      state.records = state.records.filter(item => item.id !== id);
      saveRecords();
      renderTable();
      clearForm();
      showAlert(config.messages.deleted, 'success');
    }
  }

  function bindEvents() {
    document.getElementById('crud-form')?.addEventListener('submit', handleSubmit);
    document.getElementById('cancel-edit-btn')?.addEventListener('click', clearForm);
    document.getElementById('reload-btn')?.addEventListener('click', renderTable);
    document.getElementById('crud-table-body')?.addEventListener('click', handleTableClick);
  }

  function init() {
    loadRecords();
    bindEvents();
    renderTable();
  }

  return { init };
};
