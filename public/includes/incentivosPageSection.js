(function renderIncentivosPageSection() {
  const root = document.getElementById("incentivos-page-section-root");
  if (!root) return;

  const rewards = [
    {
      puntos: "80 pts",
      titulo: "Cupón verde",
      icono: "ticket-perforated",
      descripcion: "Ideal para usuarios nuevos que empiezan a reciclar con frecuencia básica.",
      acciones: "Entregar plástico limpio, cartón y papel durante una semana."
    },
    {
      puntos: "150 pts",
      titulo: "Kit ecológico",
      icono: "bag-heart",
      descripcion: "Incluye bolsa reutilizable, libreta reciclada y termo ecológico.",
      acciones: "Participar en jornadas comunitarias o entregar materiales separados correctamente."
    },
    {
      puntos: "250 pts",
      titulo: "Entrada a experiencia ambiental",
      icono: "tree",
      descripcion: "Acceso a actividades educativas o visitas guiadas relacionadas con sostenibilidad.",
      acciones: "Acumular entregas constantes, reportar centros y participar en campañas."
    },
    {
      puntos: "400 pts",
      titulo: "Premio premium",
      icono: "gift",
      descripcion: "Premio de mayor valor para quienes sostienen un impacto ambiental real y medible.",
      acciones: "Completar retos, liderar actividades y registrar grandes volúmenes reciclados."
    }
  ];

  const actions = [
    { icon: "box-seam", label: "Separar residuos en casa", value: "+20 pts" },
    { icon: "truck", label: "Entregar materiales en ruta", value: "+35 pts" },
    { icon: "people", label: "Participar en jornadas comunales", value: "+50 pts" },
    { icon: "clipboard-check", label: "Completar retos ecológicos", value: "+70 pts" }
  ];

  root.innerHTML = `
    <section class="section-block users-section">
      <div class="container">
        <div class="text-center mb-5">
          <div class="d-flex justify-content-center gap-2 flex-wrap mt-3">
            <a href="./modulos.html" class="btn btn-outline-light">Volver a módulos</a>
          </div>
          <p class="section-tag">Nuevo módulo</p>
          <h1 class="section-title users-main-title">Sistema de incentivos</h1>
          <p class="section-text users-main-text mx-auto" style="max-width: 790px;">
            Entre más acciones de reciclaje realice una persona, más puntos acumula y mejores premios puede desbloquear.
            La lógica del sistema busca premiar constancia, impacto ambiental y participación comunitaria.
          </p>
        </div>

        <div class="row g-4 mb-4">
          ${actions.map(action => `
            <div class="col-12 col-md-6 col-xl-3">
              <div class="stat-card incentive-stat-card">
                <div class="mini-icon mb-3">
                  <i class="bi bi-${action.icon}"></i>
                </div>
                <p class="stat-label">${action.label}</p>
                <div class="stat-value">${action.value}</div>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="panel-card mb-4">
          <div class="row g-4 align-items-center">
            <div class="col-12 col-xl-7">
              <h3 class="form-title mb-2">¿Cómo funciona?</h3>
              <p class="form-text mb-0">
                El sistema asigna puntos según la acción realizada. Actividades simples como separar correctamente
                residuos generan una base inicial, mientras que acciones más constantes o comunitarias otorgan
                una recompensa mayor. Así, el usuario ve un progreso claro y siente que reciclar sí tiene retorno.
              </p>
            </div>
            <div class="col-12 col-xl-5">
              <div class="incentive-progress-wrap">
                <div class="incentive-progress-step">
                  <span class="step-dot active"></span>
                  <span>Acción ecológica</span>
                </div>
                <div class="incentive-progress-line"></div>
                <div class="incentive-progress-step">
                  <span class="step-dot active"></span>
                  <span>Acumula puntos</span>
                </div>
                <div class="incentive-progress-line"></div>
                <div class="incentive-progress-step">
                  <span class="step-dot active"></span>
                  <span>Desbloquea premios</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-4">
          ${rewards.map(reward => `
            <div class="col-12 col-md-6 col-xl-3">
              <div class="incentive-card h-100">
                <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
                  <div class="module-icon mb-0">
                    <i class="bi bi-${reward.icono}"></i>
                  </div>
                  <span class="reward-points">${reward.puntos}</span>
                </div>

                <h3 class="module-title">${reward.titulo}</h3>
                <p class="module-text mb-3">${reward.descripcion}</p>

                <div class="incentive-info">
                  <span class="incentive-info-label">Cómo ganarlo</span>
                  <p class="mb-0">${reward.acciones}</p>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
})();
