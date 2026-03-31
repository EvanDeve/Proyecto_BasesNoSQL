window.UsersTableModule = (() => {
  function escapeQuotes(value) {
    return String(value ?? "").replace(/'/g, "\\'");
  }

  function render(users) {
    const tbody = document.getElementById("users-table-body");
    if (!tbody) return;

    if (!Array.isArray(users) || users.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6">
            <div class="empty-state">
              <i class="bi bi-people fs-1 d-block mb-2"></i>
              No hay usuarios registrados.
            </div>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = users.map(user => `
      <tr>
        <td>${user.nombre ?? "-"}</td>
        <td>${user.correo ?? "-"}</td>
        <td>${user.telefono ?? "-"}</td>
        <td>${user.puntos ?? 0}</td>
        <td>${user.direccion ?? "-"}</td>
        <td>
          <div class="action-buttons">
            <button
              class="btn btn-warning btn-sm"
              onclick="UsersFormModule.fillForEdit('${user._id}', '${escapeQuotes(user.nombre)}', '${escapeQuotes(user.correo)}', '${escapeQuotes(user.telefono)}', '${user.puntos}', '${escapeQuotes(user.direccion)}')"
            >
              <i class="bi bi-pencil-square"></i>
            </button>

            <button
              class="btn btn-danger btn-sm"
              onclick="UsersTableModule.handleDelete('${user._id}')"
            >
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  async function handleDelete(id) {
    const confirmed = window.confirm("¿Deseas eliminar este usuario?");
    if (!confirmed) return;

    try {
      await window.Api.deleteUser(id);
      window.Alerts.show("Usuario eliminado correctamente.", "success");
      await window.AppModule.refreshUsers();
      window.UsersFormModule.clear();
    } catch (error) {
      window.Alerts.show("No se pudo eliminar el usuario.", "danger");
      console.error(error);
    }
  }

  return {
    render,
    handleDelete
  };
})();