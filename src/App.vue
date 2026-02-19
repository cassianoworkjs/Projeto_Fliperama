<template>
  <div id="app" class="scanlines">
    <!-- Arcade Header -->
    <header class="arcade-header">
      <nav class="navbar navbar-expand-xl navbar-dark">
        <div class="container-fluid px-2 px-lg-3">
          <!-- Logo -->
          <router-link to="/" class="navbar-brand">
            <img src="/img/Nome_FDV.png" alt="Fliperama de Verdade" class="logo-img pixel-pop" />
          </router-link>

          <!-- Mobile Toggle (Hamburger) -->
          <button 
            class="navbar-toggler arcade-button" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <i class="bi bi-joystick"></i>
          </button>

          <!-- Navigation -->
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <router-link to="/" class="nav-link arcade-nav-link">
                  <i class="bi bi-house-fill"></i>
                  <span>Home</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/novidades" class="nav-link arcade-nav-link">
                  <i class="bi bi-newspaper"></i>
                  <span>Novidades</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/campeonatos" class="nav-link arcade-nav-link">
                  <i class="bi bi-trophy-fill"></i>
                  <span>Campeonatos</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/rankings" class="nav-link arcade-nav-link">
                  <i class="bi bi-bar-chart-fill"></i>
                  <span>Rankings</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/podcast" class="nav-link arcade-nav-link">
                  <i class="bi bi-mic-fill"></i>
                  <span>Podcast</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/equipe" class="nav-link arcade-nav-link">
                  <i class="bi bi-people-fill"></i>
                  <span>Equipe</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/galeria" class="nav-link arcade-nav-link">
                  <i class="bi bi-images"></i>
                  <span>Galeria</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="arcade-main">
      <router-view />
    </main>

    <!-- Arcade Footer -->
    <footer class="arcade-footer">
      <div class="container">
        <div class="row g-4">
          <!-- Brand -->
          <div class="col-12 col-md-4">
            <h3 class="footer-title neon-pulse">
              <i class="bi bi-controller"></i> FDV
            </h3>
            <p class="footer-text">A maior comunidade de jogos de luta do Brasil</p>
            <div class="social-icons mt-3">
              <a href="#" class="social-icon arcade-button">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="social-icon arcade-button">
                <i class="bi bi-youtube"></i>
              </a>
              <a href="#" class="social-icon arcade-button">
                <i class="bi bi-twitch"></i>
              </a>
              <a href="#" class="social-icon arcade-button">
                <i class="bi bi-discord"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-6 col-md-4">
            <h4 class="footer-subtitle">Links Rápidos</h4>
            <ul class="footer-links">
              <li><router-link to="/campeonatos"><i class="bi bi-chevron-right"></i> Campeonatos</router-link></li>
              <li><router-link to="/rankings"><i class="bi bi-chevron-right"></i> Rankings</router-link></li>
              <li><router-link to="/novidades"><i class="bi bi-chevron-right"></i> Novidades</router-link></li>
              <li><router-link to="/equipe"><i class="bi bi-chevron-right"></i> Nossa Equipe</router-link></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="col-6 col-md-4">
            <h4 class="footer-subtitle">Contato</h4>
            <ul class="footer-links">
              <li><i class="bi bi-envelope-fill"></i> contato@fliperamaverdade.com</li>
              <li><i class="bi bi-geo-alt-fill"></i> São Paulo, Brasil</li>
              <li><i class="bi bi-clock-fill"></i> 24/7 Online</li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="row mt-4 pt-4 border-top border-secondary">
          <div class="col-12 text-center">
            <p class="copyright mb-0">
              <i class="bi bi-c-circle"></i> 2026 Fliperama de Verdade • 
              <span class="blink">█</span> Desenvolvido por GCG Tech • 
            
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* === ARCADE THEME === */
#app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* Gradiente fixo azul/vermelho arcade - cobre as laterais completamente */
  background: linear-gradient(135deg, rgba(15, 15, 45, 0.75) 0%, rgba(35, 15, 55, 0.8) 50%, rgba(45, 10, 40, 0.75) 100%);
  color: #f0f0f0;
  overflow-x: hidden;
}

/* Header */
.arcade-header {
  background: linear-gradient(135deg, rgba(10, 10, 20, 0.75) 0%, rgba(30, 15, 40, 0.8) 100%);
  border-bottom: 3px solid #ff8800;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 
    0 4px 30px rgba(255, 136, 0, 0.3),
    0 0 50px rgba(255, 56, 96, 0.2);
  overflow: visible;
}

.navbar {
  padding: 0.5rem 0;
}

.navbar-nav {
  flex-wrap: nowrap;
  justify-content: flex-end;
  gap: 4px;
}

.navbar-nav .nav-item {
  margin: 0;
}

.logo-img {
  max-width: 160px;
  height: auto;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 10px rgba(255, 136, 0, 0.5));
}

.logo-img:hover {
  filter: drop-shadow(0 0 20px rgba(255, 136, 0, 0.8));
  transform: scale(1.05);
}

.navbar-toggler {
  border: 2px solid #ff8800;
  background: rgba(255, 136, 0, 0.2);
  color: #ff8800;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
}

.navbar-toggler:hover {
  background: rgba(255, 136, 0, 0.3);
  box-shadow: 0 0 15px rgba(255, 136, 0, 0.6);
}

/* Arcade Nav Links - compactos e próximos para caber todos no desktop */
.arcade-nav-link {
  position: relative;
  padding: 5px 6px !important;
  margin: 2px 0;
  color: #e0e0e0 !important;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  border: 2px solid transparent;
  border-radius: 5px;
  background: rgba(255, 136, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 3px;
  white-space: nowrap;
  flex-shrink: 0;
}

.arcade-nav-link i {
  font-size: 0.85rem;
  flex-shrink: 0;
}

.arcade-nav-link:hover {
  color: #ff8800 !important;
  background: rgba(255, 136, 0, 0.15);
  border-color: #ff8800;
  box-shadow: 
    0 0 15px rgba(255, 136, 0, 0.5),
    inset 0 0 10px rgba(255, 136, 0, 0.2);
  transform: translateY(-2px);
}

.arcade-nav-link.router-link-active {
  color: #ffcc00 !important;
  background: linear-gradient(135deg, rgba(255, 136, 0, 0.2), rgba(255, 56, 96, 0.2));
  border-color: #ffcc00;
  box-shadow: 0 0 20px rgba(255, 204, 0, 0.6);
}

/* Main Content */
.arcade-main {
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 15px;
}

/* Footer */
.arcade-footer {
  background: linear-gradient(135deg, rgba(10, 10, 20, 0.75) 0%, rgba(30, 15, 40, 0.8) 100%);
  border-top: 3px solid #ff8800;
  padding: 50px 20px 30px;
  margin-top: 60px;
}

.footer-title {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.5rem;
  color: #ff8800;
  margin-bottom: 15px;
}

.footer-subtitle {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  color: #ffcc00;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.footer-text {
  color: #aaa;
  font-size: 0.95rem;
  line-height: 1.6;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 136, 0, 0.1);
  border: 2px solid #ff8800;
  border-radius: 8px;
  color: #ff8800;
  font-size: 1.3rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: rgba(255, 136, 0, 0.3);
  border-color: #ffcc00;
  color: #ffcc00;
  box-shadow: 0 0 20px rgba(255, 136, 0, 0.6);
  transform: translateY(-3px) rotate(5deg);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a,
.footer-links li {
  color: #aaa;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: #ff8800;
  transform: translateX(5px);
}

.footer-links i {
  color: #ff8800;
  font-size: 0.9rem;
}

.copyright {
  color: #777;
  font-size: 0.9rem;
  font-family: 'Orbitron', sans-serif;
}

.arcade-button {
  position: relative;
  transition: all 0.2s ease;
}

.arcade-button:active {
  transform: translateY(2px);
}

/* Telas médias - nav bem compacto para caber todos os itens */
@media (min-width: 992px) and (max-width: 1200px) {
  .navbar-nav {
    gap: 2px;
  }

  .logo-img {
    max-width: 140px;
  }

  .arcade-nav-link {
    padding: 4px 5px !important;
    margin: 1px 0;
    font-size: 0.6rem;
    gap: 2px;
  }

  .arcade-nav-link i {
    font-size: 0.75rem;
  }
}

/* Mobile Responsiveness - menu hambúrguer em telas menores que 992px */
@media (max-width: 991px) {
  .logo-img {
    max-width: 180px;
  }

  .navbar-nav {
    margin-top: 20px;
    padding: 20px;
    background: rgba(255, 136, 0, 0.05);
    border-radius: 12px;
  }

  .arcade-nav-link {
    width: 100%;
    justify-content: flex-start;
    white-space: normal;
    padding: 10px 15px !important;
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .arcade-main {
    padding: 15px 12px;
  }

  .arcade-footer {
    padding: 30px 16px 20px;
  }

  .arcade-footer .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-title {
    font-size: 1.2rem;
  }

  .footer-subtitle {
    margin-top: 1.5rem;
  }

  .footer-links {
    text-align: center;
  }

  .footer-links a,
  .footer-links li {
    justify-content: center;
  }

  .social-icons {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .arcade-main {
    padding: 12px 10px;
  }

  .arcade-footer {
    padding: 25px 12px 16px;
  }

  .footer-title {
    font-size: 1rem;
  }

  .footer-subtitle {
    font-size: 0.95rem;
  }

  .footer-links li {
    font-size: 0.9rem;
  }

  .container-fluid {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
</style>
