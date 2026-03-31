window.AppModule = (() => {
  async function refreshUsers() {
    try {
      const users = await window.Api.getUsers();
      window.AppState.users = Array.isArray(users) ? users : [];
      window.UsersTableModule.render(window.AppState.users);
    } catch (error) {
      window.Alerts.show("No se pudieron cargar los usuarios desde la API.", "danger");
      console.error(error);
    }
  }

  function bindEvents() {
    const form = document.getElementById("user-form");
    const cancelBtn = document.getElementById("cancel-edit-btn");
    const reloadBtn = document.getElementById("reload-btn");

    if (form) {
      form.addEventListener("submit", window.UsersFormModule.handleSubmit);
    }

    if (cancelBtn) {
      cancelBtn.addEventListener("click", window.UsersFormModule.clear);
    }

    if (reloadBtn) {
      reloadBtn.addEventListener("click", refreshUsers);
    }
  }

  function init() {
    bindEvents();
    refreshUsers();
  }

  return {
    init,
    refreshUsers
  };
})();

document.addEventListener("DOMContentLoaded", window.AppModule.init);