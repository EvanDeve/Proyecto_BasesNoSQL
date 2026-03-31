(function renderUsersPageNavbar() {
  const root = document.getElementById("users-page-navbar-root");
  if (!root) return;

  root.innerHTML = `
    <div class="topbar py-2">
      <div class="container d-flex flex-wrap justify-content-between align-items-center gap-2">
        <div class="d-flex flex-wrap gap-3">
          <span><i class="bi bi-telephone-fill me-2"></i>+506 2560-2171</span>
          <span><i class="bi bi-envelope-fill me-2"></i>info@ticorecicla.com</span>
        </div>
        <div class="d-flex gap-3">
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg main-navbar sticky-top">
      <div class="container">
        <a class="navbar-brand text-white" href="./index.html">
          <i class="bi bi-recycle me-2 brand-green"></i>
          TICO<span class="brand-green">RECICLA</span>
        </a>

        <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#usersNav">
          <i class="bi bi-list fs-2"></i>
        </button>

        <div class="collapse navbar-collapse" id="usersNav">
          <ul class="navbar-nav ms-auto gap-lg-3">
            <li class="nav-item"><a class="nav-link" href="./index.html">Inicio</a></li>
            <li class="nav-item"><a class="nav-link active" href="./usuarios.html">Usuarios</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
})();