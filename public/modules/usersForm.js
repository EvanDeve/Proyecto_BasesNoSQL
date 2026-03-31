window.UsersFormModule = (() => {
  function getFormData() {
    return {
      nombre: document.getElementById("nombre").value.trim(),
      correo: document.getElementById("correo").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      puntos: Number(document.getElementById("puntos").value),
      direccion: document.getElementById("direccion").value.trim()
    };
  }

  function validate(data) {
    return (
      data.nombre &&
      data.correo &&
      data.telefono &&
      !Number.isNaN(data.puntos) &&
      data.direccion
    );
  }

  function clear() {
    document.getElementById("user-id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("puntos").value = "";
    document.getElementById("direccion").value = "";

    document.getElementById("form-title").textContent = "Registrar usuario";
    window.AppState.isEditing = false;
    window.AppState.currentUserId = null;
  }

  function fillForEdit(id, nombre, correo, telefono, puntos, direccion) {
    document.getElementById("user-id").value = id;
    document.getElementById("nombre").value = nombre;
    document.getElementById("correo").value = correo;
    document.getElementById("telefono").value = telefono;
    document.getElementById("puntos").value = puntos;
    document.getElementById("direccion").value = direccion;

    document.getElementById("form-title").textContent = "Editar usuario";
    window.AppState.isEditing = true;
    window.AppState.currentUserId = id;

    document.getElementById("user-form").scrollIntoView({ behavior: "smooth" });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = getFormData();

    if (!validate(data)) {
      window.Alerts.show("Completa todos los campos correctamente.", "warning");
      return;
    }

    try {
      if (window.AppState.isEditing && window.AppState.currentUserId) {
        await window.Api.updateUser(window.AppState.currentUserId, data);
        window.Alerts.show("Usuario actualizado correctamente.", "success");
      } else {
        await window.Api.createUser(data);
        window.Alerts.show("Usuario creado correctamente.", "success");
      }

      clear();
      await window.AppModule.refreshUsers();
    } catch (error) {
      window.Alerts.show("Ocurrió un error al guardar el usuario.", "danger");
      console.error(error);
    }
  }

  return {
    handleSubmit,
    clear,
    fillForEdit
  };
})();