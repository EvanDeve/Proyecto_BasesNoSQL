window.EntityConfigs = {
  "usuarios": {
    "endpoint": "usuarios",
    "singular": "Usuario",
    "plural": "Usuarios registrados",
    "publicTitle": "Usuarios registrados",
    "pageTitle": "Gestión de usuarios",
    "description": "Administra las personas registradas dentro de TicoRecicla Connect.",
    "publicDescription": "Consulta pública de usuarios registrados dentro del sistema.",
    "icon": "people-fill",
    "sectionTag": "Backend activo",
    "fields": [
      {
        "id": "nombre",
        "label": "Nombre completo",
        "type": "text",
        "placeholder": "Ej: Andrea Solís",
        "required": true
      },
      {
        "id": "correo",
        "label": "Correo",
        "type": "email",
        "placeholder": "Ej: andrea@correo.com",
        "required": true
      },
      {
        "id": "telefono",
        "label": "Teléfono",
        "type": "text",
        "placeholder": "Ej: 8888-1111",
        "required": true
      },
      {
        "id": "puntos",
        "label": "Puntos",
        "type": "number",
        "placeholder": "Ej: 120",
        "required": true
      },
      {
        "id": "direccion",
        "label": "Dirección",
        "type": "text",
        "placeholder": "Ej: San José, Desamparados",
        "required": true
      }
    ],
    "columns": [
      {
        "key": "nombre",
        "label": "Nombre"
      },
      {
        "key": "correo",
        "label": "Correo"
      },
      {
        "key": "telefono",
        "label": "Teléfono"
      },
      {
        "key": "puntos",
        "label": "Puntos"
      },
      {
        "key": "direccion",
        "label": "Dirección"
      }
    ],
    "messages": {
      "created": "Usuario registrado correctamente.",
      "updated": "Usuario actualizado correctamente.",
      "deleted": "Usuario eliminado correctamente.",
      "confirmDelete": "¿Deseas eliminar este usuario?"
    },
    "adminPage": "usuarios.html",
    "publicPage": "usuarios-publico.html"
  },
  "residuos": {
    "endpoint": "residuos",
    "singular": "Residuo",
    "plural": "Residuos registrados",
    "publicTitle": "Residuos valorizables",
    "pageTitle": "Gestión de residuos",
    "description": "Registra, edita y consulta materiales valorizables del sistema.",
    "publicDescription": "Consulta pública de residuos valorizables registrados.",
    "icon": "box-seam",
    "sectionTag": "Backend activo",
    "fields": [
      {
        "id": "nombre",
        "label": "Nombre del residuo",
        "type": "text",
        "placeholder": "Ej: Botellas PET",
        "required": true
      },
      {
        "id": "categoria",
        "label": "Categoría",
        "type": "select",
        "options": [
          "Plástico",
          "Papel y cartón",
          "Vidrio",
          "Metal",
          "Electrónico",
          "Orgánico"
        ],
        "required": true
      },
      {
        "id": "descripcion",
        "label": "Descripción",
        "type": "textarea",
        "placeholder": "Ej: Envases limpios y secos",
        "required": true
      },
      {
        "id": "unidadMedida",
        "label": "Unidad de medida",
        "type": "select",
        "options": [
          "Kilogramos",
          "Unidades",
          "Bolsas",
          "Cajas"
        ],
        "required": true
      },
      {
        "id": "estado",
        "label": "Estado",
        "type": "select",
        "options": [
          "Activo",
          "Inactivo"
        ],
        "required": true
      }
    ],
    "columns": [
      {
        "key": "nombre",
        "label": "Nombre"
      },
      {
        "key": "categoria",
        "label": "Categoría"
      },
      {
        "key": "descripcion",
        "label": "Descripción"
      },
      {
        "key": "unidadMedida",
        "label": "Unidad"
      },
      {
        "key": "estado",
        "label": "Estado"
      }
    ],
    "messages": {
      "created": "Residuo registrado correctamente.",
      "updated": "Residuo actualizado correctamente.",
      "deleted": "Residuo eliminado correctamente.",
      "confirmDelete": "¿Deseas eliminar este residuo?"
    },
    "adminPage": "residuos.html",
    "publicPage": "residuos-publico.html"
  },
  "reportes": {
    "endpoint": "reportes",
    "singular": "Reporte de reciclaje",
    "plural": "Reportes registrados",
    "publicTitle": "Reportes de reciclaje",
    "pageTitle": "Gestión de reportes de reciclaje",
    "description": "Administra reportes de reciclaje creados por los usuarios.",
    "publicDescription": "Consulta pública de reportes de reciclaje registrados.",
    "icon": "clipboard-data",
    "sectionTag": "Backend activo",
    "fields": [
      {
        "id": "usuario_id",
        "label": "ID de usuario",
        "type": "text",
        "placeholder": "Ej: USR-001",
        "required": true
      },
      {
        "id": "tipo_residuo",
        "label": "Tipo de residuo",
        "type": "text",
        "placeholder": "Ej: Plástico",
        "required": true
      },
      {
        "id": "cantidad",
        "label": "Cantidad",
        "type": "number",
        "placeholder": "Ej: 25",
        "required": true
      },
      {
        "id": "ubicacion",
        "label": "Ubicación",
        "type": "text",
        "placeholder": "Ej: San José centro",
        "required": true
      },
      {
        "id": "estado",
        "label": "Estado",
        "type": "select",
        "options": [
          "Pendiente",
          "En proceso",
          "Recolectado",
          "Cancelado"
        ],
        "required": true
      },
      {
        "id": "fecha",
        "label": "Fecha",
        "type": "date",
        "required": true
      }
    ],
    "columns": [
      {
        "key": "usuario_id",
        "label": "Usuario"
      },
      {
        "key": "tipo_residuo",
        "label": "Residuo"
      },
      {
        "key": "cantidad",
        "label": "Cantidad"
      },
      {
        "key": "ubicacion",
        "label": "Ubicación"
      },
      {
        "key": "estado",
        "label": "Estado"
      },
      {
        "key": "fecha",
        "label": "Fecha"
      }
    ],
    "messages": {
      "created": "Reporte registrado correctamente.",
      "updated": "Reporte actualizado correctamente.",
      "deleted": "Reporte eliminado correctamente.",
      "confirmDelete": "¿Deseas eliminar este reporte?"
    },
    "adminPage": "reportes-reciclaje.html",
    "publicPage": "reportes-publico.html"
  },
  "centros": {
    "endpoint": "centros",
    "singular": "Centro de acopio",
    "plural": "Centros de acopio registrados",
    "publicTitle": "Centros de acopio",
    "pageTitle": "Gestión de centros de acopio",
    "description": "Administra centros de acopio y puntos de reciclaje disponibles.",
    "publicDescription": "Consulta pública de centros de acopio registrados.",
    "icon": "geo-alt",
    "sectionTag": "Backend activo",
    "fields": [
      {
        "id": "nombre",
        "label": "Nombre",
        "type": "text",
        "placeholder": "Ej: Centro Verde Heredia",
        "required": true
      },
      {
        "id": "encargado",
        "label": "Encargado",
        "type": "text",
        "placeholder": "Ej: Laura Vega",
        "required": true
      },
      {
        "id": "telefono",
        "label": "Teléfono",
        "type": "text",
        "placeholder": "Ej: 2222-3333",
        "required": true
      },
      {
        "id": "direccion",
        "label": "Dirección",
        "type": "text",
        "placeholder": "Ej: 200m norte del parque",
        "required": true
      },
      {
        "id": "horario",
        "label": "Horario",
        "type": "text",
        "placeholder": "Ej: L-S 8:00 a.m. a 5:00 p.m.",
        "required": true
      },
      {
        "id": "materiales",
        "label": "Materiales aceptados",
        "type": "textarea",
        "placeholder": "Ej: plástico, vidrio, cartón",
        "required": true
      }
    ],
    "columns": [
      {
        "key": "nombre",
        "label": "Nombre"
      },
      {
        "key": "encargado",
        "label": "Encargado"
      },
      {
        "key": "telefono",
        "label": "Teléfono"
      },
      {
        "key": "direccion",
        "label": "Dirección"
      },
      {
        "key": "horario",
        "label": "Horario"
      },
      {
        "key": "materiales",
        "label": "Materiales"
      }
    ],
    "messages": {
      "created": "Centro de acopio registrado correctamente.",
      "updated": "Centro de acopio actualizado correctamente.",
      "deleted": "Centro de acopio eliminado correctamente.",
      "confirmDelete": "¿Deseas eliminar este centro de acopio?"
    },
    "adminPage": "centros-acopio.html",
    "publicPage": "centros-publico.html"
  },
  "recolecciones": {
    "endpoint": "recolecciones",
    "singular": "Recolección",
    "plural": "Recolecciones registradas",
    "publicTitle": "Recolecciones",
    "pageTitle": "Gestión de recolecciones",
    "description": "Administra recolecciones programadas y completadas del sistema.",
    "publicDescription": "Consulta pública de recolecciones registradas.",
    "icon": "truck",
    "sectionTag": "CRUD completo",
    "fields": [
      {
        "id": "reporteId",
        "label": "ID del reporte",
        "type": "text",
        "placeholder": "Ej: RPT-001",
        "required": true
      },
      {
        "id": "recicladorId",
        "label": "ID del reciclador",
        "type": "text",
        "placeholder": "Ej: REC-001",
        "required": true
      },
      {
        "id": "fechaProgramada",
        "label": "Fecha programada",
        "type": "date",
        "required": true
      },
      {
        "id": "fechaCompletada",
        "label": "Fecha completada",
        "type": "date",
        "required": false
      },
      {
        "id": "estado",
        "label": "Estado",
        "type": "select",
        "options": [
          "Pendiente",
          "En ruta",
          "Completada",
          "Cancelada"
        ],
        "required": true
      },
      {
        "id": "observaciones",
        "label": "Observaciones",
        "type": "textarea",
        "placeholder": "Detalles de la recolección",
        "required": false
      }
    ],
    "columns": [
      {
        "key": "reporteId",
        "label": "Reporte"
      },
      {
        "key": "recicladorId",
        "label": "Reciclador"
      },
      {
        "key": "fechaProgramada",
        "label": "Programada"
      },
      {
        "key": "fechaCompletada",
        "label": "Completada"
      },
      {
        "key": "estado",
        "label": "Estado"
      }
    ],
    "messages": {
      "created": "Recolección registrada correctamente.",
      "updated": "Recolección actualizada correctamente.",
      "deleted": "Recolección eliminada correctamente.",
      "confirmDelete": "¿Deseas eliminar esta recolección?"
    },
    "adminPage": "recolecciones.html",
    "publicPage": "recolecciones-publico.html"
  },
  "incentivos": {
    "endpoint": "incentivos",
    "singular": "Incentivo",
    "plural": "Incentivos registrados",
    "publicTitle": "Incentivos",
    "pageTitle": "Gestión de incentivos",
    "description": "Administra incentivos, premios y recompensas disponibles.",
    "publicDescription": "Consulta pública de incentivos disponibles.",
    "icon": "award",
    "sectionTag": "CRUD completo",
    "fields": [
      {
        "id": "nombre",
        "label": "Nombre",
        "type": "text",
        "placeholder": "Ej: Cupón ecológico",
        "required": true
      },
      {
        "id": "descripcion",
        "label": "Descripción",
        "type": "textarea",
        "placeholder": "Detalle del incentivo",
        "required": true
      },
      {
        "id": "puntosRequeridos",
        "label": "Puntos requeridos",
        "type": "number",
        "placeholder": "Ej: 150",
        "required": true
      },
      {
        "id": "categoria",
        "label": "Categoría",
        "type": "select",
        "options": [
          "Descuento",
          "Cupón",
          "Producto",
          "Servicio",
          "Otro"
        ],
        "required": true
      },
      {
        "id": "activo",
        "label": "Activo",
        "type": "select",
        "options": [
          "Sí",
          "No"
        ],
        "required": true
      }
    ],
    "columns": [
      {
        "key": "nombre",
        "label": "Nombre"
      },
      {
        "key": "descripcion",
        "label": "Descripción"
      },
      {
        "key": "puntosRequeridos",
        "label": "Puntos"
      },
      {
        "key": "categoria",
        "label": "Categoría"
      },
      {
        "key": "activo",
        "label": "Activo"
      }
    ],
    "messages": {
      "created": "Incentivo registrado correctamente.",
      "updated": "Incentivo actualizado correctamente.",
      "deleted": "Incentivo eliminado correctamente.",
      "confirmDelete": "¿Deseas eliminar este incentivo?"
    },
    "adminPage": "incentivos.html",
    "publicPage": "incentivos-publico.html"
  },
  "recicladores": {
    "endpoint": "recicladores",
    "singular": "Reciclador",
    "plural": "Recicladores registrados",
    "publicTitle": "Recicladores",
    "pageTitle": "Gestión de recicladores",
    "description": "Administra los recicladores activos dentro del sistema.",
    "publicDescription": "Consulta pública de recicladores registrados.",
    "icon": "person-badge",
    "sectionTag": "CRUD completo",
    "fields": [
      {
        "id": "nombre",
        "label": "Nombre",
        "type": "text",
        "placeholder": "Ej: Carlos Rodríguez",
        "required": true
      },
      {
        "id": "correo",
        "label": "Correo",
        "type": "email",
        "placeholder": "Ej: carlos@correo.com",
        "required": true
      },
      {
        "id": "telefono",
        "label": "Teléfono",
        "type": "text",
        "placeholder": "Ej: 8888-2222",
        "required": true
      },
      {
        "id": "vehiculo",
        "label": "Vehículo",
        "type": "text",
        "placeholder": "Ej: Camión liviano",
        "required": true
      },
      {
        "id": "zonaAsignada",
        "label": "Zona asignada",
        "type": "text",
        "placeholder": "Ej: Heredia centro",
        "required": true
      },
      {
        "id": "estado",
        "label": "Estado",
        "type": "select",
        "options": [
          "Activo",
          "Inactivo"
        ],
        "required": true
      }
    ],
    "columns": [
      {
        "key": "nombre",
        "label": "Nombre"
      },
      {
        "key": "correo",
        "label": "Correo"
      },
      {
        "key": "telefono",
        "label": "Teléfono"
      },
      {
        "key": "vehiculo",
        "label": "Vehículo"
      },
      {
        "key": "zonaAsignada",
        "label": "Zona"
      },
      {
        "key": "estado",
        "label": "Estado"
      }
    ],
    "messages": {
      "created": "Reciclador registrado correctamente.",
      "updated": "Reciclador actualizado correctamente.",
      "deleted": "Reciclador eliminado correctamente.",
      "confirmDelete": "¿Deseas eliminar este reciclador?"
    },
    "adminPage": "recicladores.html",
    "publicPage": "recicladores-publico.html"
  },
  "recompensas": {
    "endpoint": "recompensas-usuario",
    "singular": "Recompensa de usuario",
    "plural": "Recompensas de usuario registradas",
    "publicTitle": "Recompensas de usuario",
    "pageTitle": "Gestión de recompensas de usuario",
    "description": "Administra canjes e historial de recompensas por usuario.",
    "publicDescription": "Consulta pública de recompensas canjeadas por usuarios.",
    "icon": "gift",
    "sectionTag": "CRUD completo",
    "fields": [
      {
        "id": "usuarioId",
        "label": "ID de usuario",
        "type": "text",
        "placeholder": "Ej: USR-001",
        "required": true
      },
      {
        "id": "incentivoId",
        "label": "ID del incentivo",
        "type": "text",
        "placeholder": "Ej: INC-001",
        "required": true
      },
      {
        "id": "fechaCanje",
        "label": "Fecha de canje",
        "type": "date",
        "required": true
      },
      {
        "id": "puntosUtilizados",
        "label": "Puntos utilizados",
        "type": "number",
        "placeholder": "Ej: 150",
        "required": true
      },
      {
        "id": "estado",
        "label": "Estado",
        "type": "select",
        "options": [
          "Canjeado",
          "Entregado",
          "Vencido"
        ],
        "required": true
      }
    ],
    "columns": [
      {
        "key": "usuarioId",
        "label": "Usuario"
      },
      {
        "key": "incentivoId",
        "label": "Incentivo"
      },
      {
        "key": "fechaCanje",
        "label": "Fecha"
      },
      {
        "key": "puntosUtilizados",
        "label": "Puntos"
      },
      {
        "key": "estado",
        "label": "Estado"
      }
    ],
    "messages": {
      "created": "Recompensa de usuario registrada correctamente.",
      "updated": "Recompensa de usuario actualizada correctamente.",
      "deleted": "Recompensa de usuario eliminada correctamente.",
      "confirmDelete": "¿Deseas eliminar esta recompensa de usuario?"
    },
    "adminPage": "recompensas-usuario.html",
    "publicPage": "recompensas-usuario-publico.html"
  },
  "empresas": {
    "endpoint": "empresas-recicladoras",
    "singular": "Empresa recicladora",
    "plural": "Empresas recicladoras registradas",
    "publicTitle": "Empresas recicladoras",
    "pageTitle": "Gestión de empresas recicladoras",
    "description": "Administra empresas que procesan materiales reciclados.",
    "publicDescription": "Consulta pública de empresas recicladoras registradas.",
    "icon": "building",
    "sectionTag": "CRUD completo",
    "fields": [
      {
        "id": "nombre",
        "label": "Nombre",
        "type": "text",
        "placeholder": "Ej: EcoPlast Costa Rica",
        "required": true
      },
      {
        "id": "tipoMaterialProcesado",
        "label": "Material procesado",
        "type": "text",
        "placeholder": "Ej: Plástico",
        "required": true
      },
      {
        "id": "contacto",
        "label": "Contacto",
        "type": "text",
        "placeholder": "Ej: María López",
        "required": true
      },
      {
        "id": "telefono",
        "label": "Teléfono",
        "type": "text",
        "placeholder": "Ej: 2222-3333",
        "required": true
      },
      {
        "id": "direccion",
        "label": "Dirección",
        "type": "text",
        "placeholder": "Ej: Cartago, Costa Rica",
        "required": true
      },
      {
        "id": "certificada",
        "label": "Certificada",
        "type": "select",
        "options": [
          "Sí",
          "No"
        ],
        "required": true
      }
    ],
    "columns": [
      {
        "key": "nombre",
        "label": "Nombre"
      },
      {
        "key": "tipoMaterialProcesado",
        "label": "Material"
      },
      {
        "key": "contacto",
        "label": "Contacto"
      },
      {
        "key": "telefono",
        "label": "Teléfono"
      },
      {
        "key": "direccion",
        "label": "Dirección"
      },
      {
        "key": "certificada",
        "label": "Certificada"
      }
    ],
    "messages": {
      "created": "Empresa recicladora registrada correctamente.",
      "updated": "Empresa recicladora actualizada correctamente.",
      "deleted": "Empresa recicladora eliminada correctamente.",
      "confirmDelete": "¿Deseas eliminar esta empresa recicladora?"
    },
    "adminPage": "empresas-recicladoras.html",
    "publicPage": "empresas-recicladoras-publico.html"
  },
  "rutas": {
    "endpoint": "rutas-recoleccion",
    "singular": "Ruta de recolección",
    "plural": "Rutas de recolección registradas",
    "publicTitle": "Rutas de recolección",
    "pageTitle": "Gestión de rutas de recolección",
    "description": "Administra rutas activas por zona y frecuencia.",
    "publicDescription": "Consulta pública de rutas de recolección registradas.",
    "icon": "signpost",
    "sectionTag": "CRUD completo",
    "fields": [
      {
        "id": "nombreRuta",
        "label": "Nombre de ruta",
        "type": "text",
        "placeholder": "Ej: Ruta GAM Norte",
        "required": true
      },
      {
        "id": "zona",
        "label": "Zona",
        "type": "text",
        "placeholder": "Ej: Heredia",
        "required": true
      },
      {
        "id": "recicladorId",
        "label": "ID del reciclador",
        "type": "text",
        "placeholder": "Ej: REC-001",
        "required": true
      },
      {
        "id": "frecuencia",
        "label": "Frecuencia",
        "type": "select",
        "options": [
          "Diaria",
          "Semanal",
          "Quincenal",
          "Mensual"
        ],
        "required": true
      },
      {
        "id": "diaAsignado",
        "label": "Día asignado",
        "type": "text",
        "placeholder": "Ej: Martes",
        "required": true
      },
      {
        "id": "activa",
        "label": "Activa",
        "type": "select",
        "options": [
          "Sí",
          "No"
        ],
        "required": true
      }
    ],
    "columns": [
      {
        "key": "nombreRuta",
        "label": "Ruta"
      },
      {
        "key": "zona",
        "label": "Zona"
      },
      {
        "key": "recicladorId",
        "label": "Reciclador"
      },
      {
        "key": "frecuencia",
        "label": "Frecuencia"
      },
      {
        "key": "diaAsignado",
        "label": "Día"
      },
      {
        "key": "activa",
        "label": "Activa"
      }
    ],
    "messages": {
      "created": "Ruta de recolección registrada correctamente.",
      "updated": "Ruta de recolección actualizada correctamente.",
      "deleted": "Ruta de recolección eliminada correctamente.",
      "confirmDelete": "¿Deseas eliminar esta ruta de recolección?"
    },
    "adminPage": "rutas-recoleccion.html",
    "publicPage": "rutas-recoleccion-publico.html"
  },
  "historial": {
    "endpoint": "historial-materiales",
    "singular": "Historial de material",
    "plural": "Historial de materiales registrado",
    "publicTitle": "Historial de materiales",
    "pageTitle": "Gestión de historial de materiales",
    "description": "Administra trazabilidad de materiales desde su origen hasta su destino.",
    "publicDescription": "Consulta pública del historial de materiales registrados.",
    "icon": "clock-history",
    "sectionTag": "CRUD completo",
    "fields": [
      {
        "id": "reporteId",
        "label": "ID del reporte",
        "type": "text",
        "placeholder": "Ej: RPT-001",
        "required": true
      },
      {
        "id": "residuoId",
        "label": "ID del residuo",
        "type": "text",
        "placeholder": "Ej: RES-001",
        "required": true
      },
      {
        "id": "origen",
        "label": "Origen",
        "type": "text",
        "placeholder": "Ej: Hogar usuario",
        "required": true
      },
      {
        "id": "destino",
        "label": "Destino",
        "type": "text",
        "placeholder": "Ej: Centro Verde",
        "required": true
      },
      {
        "id": "fechaMovimiento",
        "label": "Fecha del movimiento",
        "type": "date",
        "required": true
      },
      {
        "id": "estadoProceso",
        "label": "Estado del proceso",
        "type": "select",
        "options": [
          "Reportado",
          "Recolectado",
          "Clasificado",
          "Entregado",
          "Procesado"
        ],
        "required": true
      }
    ],
    "columns": [
      {
        "key": "reporteId",
        "label": "Reporte"
      },
      {
        "key": "residuoId",
        "label": "Residuo"
      },
      {
        "key": "origen",
        "label": "Origen"
      },
      {
        "key": "destino",
        "label": "Destino"
      },
      {
        "key": "fechaMovimiento",
        "label": "Fecha"
      },
      {
        "key": "estadoProceso",
        "label": "Estado"
      }
    ],
    "messages": {
      "created": "Historial de material registrado correctamente.",
      "updated": "Historial de material actualizado correctamente.",
      "deleted": "Historial de material eliminado correctamente.",
      "confirmDelete": "¿Deseas eliminar este historial de material?"
    },
    "adminPage": "historial-materiales.html",
    "publicPage": "historial-materiales-publico.html"
  },
  "notificaciones": {
    "endpoint": "notificaciones",
    "singular": "Notificación",
    "plural": "Notificaciones registradas",
    "publicTitle": "Notificaciones",
    "pageTitle": "Gestión de notificaciones",
    "description": "Administra mensajes y alertas enviadas por el sistema.",
    "publicDescription": "Consulta pública de notificaciones registradas.",
    "icon": "bell",
    "sectionTag": "CRUD completo",
    "fields": [
      {
        "id": "usuarioId",
        "label": "ID de usuario",
        "type": "text",
        "placeholder": "Ej: USR-001",
        "required": true
      },
      {
        "id": "titulo",
        "label": "Título",
        "type": "text",
        "placeholder": "Ej: Recolección programada",
        "required": true
      },
      {
        "id": "mensaje",
        "label": "Mensaje",
        "type": "textarea",
        "placeholder": "Escribe el mensaje",
        "required": true
      },
      {
        "id": "tipo",
        "label": "Tipo",
        "type": "select",
        "options": [
          "Sistema",
          "Reporte",
          "Recolección",
          "Incentivo"
        ],
        "required": true
      },
      {
        "id": "leida",
        "label": "Leída",
        "type": "select",
        "options": [
          "Sí",
          "No"
        ],
        "required": true
      }
    ],
    "columns": [
      {
        "key": "usuarioId",
        "label": "Usuario"
      },
      {
        "key": "titulo",
        "label": "Título"
      },
      {
        "key": "mensaje",
        "label": "Mensaje"
      },
      {
        "key": "tipo",
        "label": "Tipo"
      },
      {
        "key": "leida",
        "label": "Leída"
      }
    ],
    "messages": {
      "created": "Notificación registrada correctamente.",
      "updated": "Notificación actualizada correctamente.",
      "deleted": "Notificación eliminada correctamente.",
      "confirmDelete": "¿Deseas eliminar esta notificación?"
    },
    "adminPage": "notificaciones.html",
    "publicPage": "notificaciones-publico.html"
  }
};
