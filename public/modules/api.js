window.Api = (() => {
  const API_BASE = "http://localhost:5000/api/usuarios";

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

  function getUsers() {
    return request(API_BASE);
  }

  function createUser(data) {
    return request(API_BASE, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function updateUser(id, data) {
    return request(`${API_BASE}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }

  function deleteUser(id) {
    return request(`${API_BASE}/${id}`, {
      method: "DELETE"
    });
  }

  return {
    getUsers,
    createUser,
    updateUser,
    deleteUser
  };
})();