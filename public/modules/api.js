window.Api = (() => {
  const API_BASE_USERS = "http://localhost:5000/api/usuarios";
  const API_BASE_RESIDUOS = "http://localhost:5000/api/residuos";
  const API_BASE_REPORTES = "http://localhost:5000/api/reportes";
  const API_BASE_CENTROS = "http://localhost:5000/api/centros";

  async function request(url, options = {}) {
    try {
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
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }

  return {
    // Usuarios
    getUsers: () => request(API_BASE_USERS),
    createUser: (data) => request(API_BASE_USERS, { method: "POST", body: JSON.stringify(data) }),
    updateUser: (id, data) => request(`${API_BASE_USERS}/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    deleteUser: (id) => request(`${API_BASE_USERS}/${id}`, { method: "DELETE" }),

    // Residuos
    getResiduos: () => request(API_BASE_RESIDUOS),
    getResiduo: (id) => request(`${API_BASE_RESIDUOS}/${id}`),
    createResiduo: (data) => request(API_BASE_RESIDUOS, { method: "POST", body: JSON.stringify(data) }),
    updateResiduo: (id, data) => request(`${API_BASE_RESIDUOS}/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    deleteResiduo: (id) => request(`${API_BASE_RESIDUOS}/${id}`, { method: "DELETE" }),

    // Reportes
    getReportes: () => request(API_BASE_REPORTES),
    getReporte: (id) => request(`${API_BASE_REPORTES}/${id}`),
    createReporte: (data) => request(API_BASE_REPORTES, { method: "POST", body: JSON.stringify(data) }),
    updateReporte: (id, data) => request(`${API_BASE_REPORTES}/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    deleteReporte: (id) => request(`${API_BASE_REPORTES}/${id}`, { method: "DELETE" }),

    // Centros
    getCentros: () => request(API_BASE_CENTROS),
    getCentro: (id) => request(`${API_BASE_CENTROS}/${id}`),
    createCentro: (data) => request(API_BASE_CENTROS, { method: "POST", body: JSON.stringify(data) }),
    updateCentro: (id, data) => request(`${API_BASE_CENTROS}/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    deleteCentro: (id) => request(`${API_BASE_CENTROS}/${id}`, { method: "DELETE" })
  };
})();