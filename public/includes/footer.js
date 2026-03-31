(function renderFooter() {
  const root = document.getElementById("footer-root");
  if (!root) return;

  root.innerHTML = `
    <footer class="footer py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6">
            <h4 class="footer-title">TicoRecicla Connect</h4>
            <p class="mb-0">
              Plataforma académica orientada a la gestión de residuos, economía circular,
              trazabilidad de materiales e integración progresiva de módulos del ecosistema reciclador.
            </p>
          </div>

          <div class="col-md-3">
            <h5 class="footer-title">Contacto</h5>
            <p class="mb-1"><i class="bi bi-telephone me-2"></i>+506 </p>
            <p class="mb-0"><i class="bi bi-envelope me-2"></i>info@ticorecicla.com</p>
          </div>

          <div class="col-md-3">
            <h5 class="footer-title">Accesos</h5>
            <p class="mb-1"><a href="./index.html" class="text-decoration-none text-light">Inicio</a></p>
            <p class="mb-1"><a href="./modulos.html" class="text-decoration-none text-light">Módulos</a></p>
            <p class="mb-1"><a href="./usuarios.html" class="text-decoration-none text-light">Usuarios</a></p>
            <p class="mb-0"><a href="./index.html#footer-root" class="text-decoration-none text-light">Contacto</a></p>
          </div>
        </div>
      </div>
    </footer>
  `;
})();