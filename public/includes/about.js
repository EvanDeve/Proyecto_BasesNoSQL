(function renderAbout() {
  const root = document.getElementById("about-root");
  if (!root) return;

  root.innerHTML = `
    <section class="section-block bg-white">
      <div class="container">
        <div class="row g-4 align-items-center">
          <div class="col-lg-5">
            <div class="about-card">
              <img
                src="./assets/img/about-recycling.jpg"
                alt="Proyecto de reciclaje"
                class="about-image"
              />
            </div>
          </div>

          <div class="col-lg-7">
            <p class="section-tag">Proyecto</p>
            <h2 class="section-title">¿Qué es TicoRecicla Connect?</h2>
            <p class="section-text">
              TicoRecicla Connect es una propuesta tecnológica orientada a fortalecer la
              gestión de residuos sólidos mediante una plataforma digital conectada a una
              base de datos NoSQL. Su propósito es integrar usuarios, materiales reciclables,
              reportes, centros de acopio, incentivos y trazabilidad dentro de un mismo ecosistema.
            </p>
            <p class="section-text">
              La plataforma está pensada para apoyar a ciudadanos, municipalidades, centros
              de reciclaje y actores de la economía circular, brindando información estructurada,
              escalable y preparada para futuras integraciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
})();