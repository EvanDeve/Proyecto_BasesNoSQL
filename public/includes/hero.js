(function renderHero() {
  const root = document.getElementById("hero-root");
  if (!root) return;

  root.innerHTML = `
    <section class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <span class="hero-badge">Economía circular · sostenibilidad · trazabilidad</span>
            <h1 class="hero-title mb-3">
              TICO<span class="green">RECICLA</span> CONNECT
            </h1>
            <p class="hero-subtitle mb-4">
              Plataforma digital para la gestión de residuos sólidos, trazabilidad de
              materiales reciclables, monitoreo de actores del ecosistema y administración
              de información para impulsar decisiones basadas en datos.
            </p>

            <div class="d-flex flex-wrap gap-3">
              <a href="./usuarios.html" class="btn btn-success btn-lg">
                <i class="bi bi-people-fill me-2"></i>Ir a gestión de usuarios
              </a>
              <a href="#modules-preview-root" class="btn btn-outline-light btn-lg">
                <i class="bi bi-grid-1x2-fill me-2"></i>Ver módulos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
})();