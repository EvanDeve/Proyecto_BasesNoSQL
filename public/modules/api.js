window.Api = (() => {
  const API_ROOT = "http://localhost:5000/api";

  async function request(url, options = {}) {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      ...options
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Error en la solicitud");
    }

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return response.json();
    }

    return response.text();
  }

  // Usuarios
  function getUsers() {
    return request(`${API_ROOT}/usuarios`);
  }

  function createUser(data) {
    return request(`${API_ROOT}/usuarios`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateUser(id, data) {
    return request(`${API_ROOT}/usuarios/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteUser(id) {
    return request(`${API_ROOT}/usuarios/${id}`, {
      method: "DELETE"
    });
  }

  // Residuos
  function getResiduos() {
    return request(`${API_ROOT}/residuos`);
  }

  function createResiduo(data) {
    return request(`${API_ROOT}/residuos`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateResiduo(id, data) {
    return request(`${API_ROOT}/residuos/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteResiduo(id) {
    return request(`${API_ROOT}/residuos/${id}`, {
      method: "DELETE"
    });
  }

  // Reportes
  function getReportes() {
    return request(`${API_ROOT}/reportes`);
  }

  function createReporte(data) {
    return request(`${API_ROOT}/reportes`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateReporte(id, data) {
    return request(`${API_ROOT}/reportes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteReporte(id) {
    return request(`${API_ROOT}/reportes/${id}`, {
      method: "DELETE"
    });
  }

  // Centros
  function getCentros() {
    return request(`${API_ROOT}/centros`);
  }

  function createCentro(data) {
    return request(`${API_ROOT}/centros`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateCentro(id, data) {
    return request(`${API_ROOT}/centros/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteCentro(id) {
    return request(`${API_ROOT}/centros/${id}`, {
      method: "DELETE"
    });
  }

  // Incentivos
  function getIncentivos() {
    return request(`${API_ROOT}/incentivos`);
  }

  function createIncentivo(data) {
    return request(`${API_ROOT}/incentivos`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateIncentivo(id, data) {
    return request(`${API_ROOT}/incentivos/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteIncentivo(id) {
    return request(`${API_ROOT}/incentivos/${id}`, {
      method: "DELETE"
    });
  }

  // Recompensas usuario
  function getRecompensasUsuario() {
    return request(`${API_ROOT}/recompensas-usuario`);
  }

  function createRecompensaUsuario(data) {
    return request(`${API_ROOT}/recompensas-usuario`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateRecompensaUsuario(id, data) {
    return request(`${API_ROOT}/recompensas-usuario/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteRecompensaUsuario(id) {
    return request(`${API_ROOT}/recompensas-usuario/${id}`, {
      method: "DELETE"
    });
  }

  // Empresas recicladoras
  function getEmpresasRecicladoras() {
    return request(`${API_ROOT}/empresas-recicladoras`);
  }

  function createEmpresaRecicladora(data) {
    return request(`${API_ROOT}/empresas-recicladoras`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateEmpresaRecicladora(id, data) {
    return request(`${API_ROOT}/empresas-recicladoras/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteEmpresaRecicladora(id) {
    return request(`${API_ROOT}/empresas-recicladoras/${id}`, {
      method: "DELETE"
    });
  }

  // Rutas de recolección
  function getRutasRecoleccion() {
    return request(`${API_ROOT}/rutas-recoleccion`);
  }

  function createRutaRecoleccion(data) {
    return request(`${API_ROOT}/rutas-recoleccion`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateRutaRecoleccion(id, data) {
    return request(`${API_ROOT}/rutas-recoleccion/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteRutaRecoleccion(id) {
    return request(`${API_ROOT}/rutas-recoleccion/${id}`, {
      method: "DELETE"
    });
  }

  // Historial de materiales
  function getHistorialMateriales() {
    return request(`${API_ROOT}/historial-materiales`);
  }

  function createHistorialMaterial(data) {
    return request(`${API_ROOT}/historial-materiales`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateHistorialMaterial(id, data) {
    return request(`${API_ROOT}/historial-materiales/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteHistorialMaterial(id) {
    return request(`${API_ROOT}/historial-materiales/${id}`, {
      method: "DELETE"
    });
  }

  // Notificaciones
  function getNotificaciones() {
    return request(`${API_ROOT}/notificaciones`);
  }

  function createNotificacion(data) {
    return request(`${API_ROOT}/notificaciones`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateNotificacion(id, data) {
    return request(`${API_ROOT}/notificaciones/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteNotificacion(id) {
    return request(`${API_ROOT}/notificaciones/${id}`, {
      method: "DELETE"
    });
  }

  return {
    getUsers,
    createUser,
    updateUser,
    deleteUser,

    getResiduos,
    createResiduo,
    updateResiduo,
    deleteResiduo,

    getReportes,
    createReporte,
    updateReporte,
    deleteReporte,

    getCentros,
    createCentro,
    updateCentro,
    deleteCentro,

    getIncentivos,
    createIncentivo,
    updateIncentivo,
    deleteIncentivo,

    getRecompensasUsuario,
    createRecompensaUsuario,
    updateRecompensaUsuario,
    deleteRecompensaUsuario,

    getEmpresasRecicladoras,
    createEmpresaRecicladora,
    updateEmpresaRecicladora,
    deleteEmpresaRecicladora,

    getRutasRecoleccion,
    createRutaRecoleccion,
    updateRutaRecoleccion,
    deleteRutaRecoleccion,

    getHistorialMateriales,
    createHistorialMaterial,
    updateHistorialMaterial,
    deleteHistorialMaterial,

    getNotificaciones,
    createNotificacion,
    updateNotificacion,
    deleteNotificacion
  };
})();