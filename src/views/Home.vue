<template>
  <div class="home">
    <!-- Hero Arcade Section -->
    <section class="hero-arcade">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 text-center">
            <div class="hero-content arcade-glow">
              <!-- Arcade Title with Glitch -->
              <h1 class="hero-title glitch-hover mb-4">
                <span class="gradient-arcade">FLIPERAMA</span>
                <span class="d-block mt-2 neon-pulse">DE VERDADE</span>
              </h1>
              
              <p class="hero-subtitle mb-5 float-8bit">
                <i class="bi bi-controller"></i> A MAIOR COMUNIDADE DE JOGOS DE LUTA DO BRASIL
              </p>

              <!-- Stats with Arcade Style -->
              <div class="row g-3 justify-content-center mb-5">
                <div class="col-6 col-md-4 col-lg-2">
                  <div class="stat-box pixel-border-anim">
                    <div class="stat-number rgb-split">500+</div>
                    <div class="stat-label">PLAYERS</div>
                  </div>
                </div>
                <div class="col-6 col-md-4 col-lg-2">
                  <div class="stat-box pixel-border-anim">
                    <div class="stat-number rgb-split">50+</div>
                    <div class="stat-label">TORNEIOS</div>
                  </div>
                </div>
                <div class="col-6 col-md-4 col-lg-2">
                  <div class="stat-box pixel-border-anim">
                    <div class="stat-number rgb-split">24/7</div>
                    <div class="stat-label">ONLINE</div>
                  </div>
                </div>
                <div class="col-6 col-md-4 col-lg-2">
                  <div class="stat-box pixel-border-anim">
                    <div class="stat-number rgb-split">100K+</div>
                    <div class="stat-label">MATCHES</div>
                  </div>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="d-flex flex-wrap gap-3 justify-content-center">
                <router-link to="/campeonatos" class="btn-arcade btn-arcade-primary">
                  <i class="bi bi-trophy-fill"></i>
                  <span>PRÓXIMOS TORNEIOS</span>
                </router-link>
                <router-link to="/rankings" class="btn-arcade btn-arcade-secondary">
                  <i class="bi bi-bar-chart-fill"></i>
                  <span>VER RANKINGS</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Arcade Decoration Elements -->
      <div class="arcade-particles"></div>
    </section>

    <!-- Próximos Campeonatos -->
    <section class="section-arcade campeonatos-section">
      <div class="container-fluid px-4 px-lg-5">
        <div class="section-header-arcade mb-5">
          <div class="header-content">
            <span class="header-icon"><i class="bi bi-trophy-fill"></i></span>
            <h2 class="neon-pulse mb-0">PRÓXIMOS CAMPEONATOS</h2>
          </div>
          <router-link to="/campeonatos" class="view-all-arcade">
            VER TODOS <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-xl-4" v-for="c in 3" :key="c">
            <CardCampeonato />
          </div>
        </div>
      </div>
    </section>

    <!-- Rankings Section -->
    <section class="section-arcade rankings-special">
      <div class="container-fluid px-4 px-lg-5">
        <div class="section-header-arcade mb-5">
          <h2 class="neon-pulse">
            <i class="bi bi-bar-chart-fill"></i> RANKINGS ATUALIZADOS
          </h2>
          <router-link to="/rankings" class="view-all-arcade">
            VER TODOS <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
        <div class="row g-4">
          <div class="col-12 col-lg-4" v-for="(ranking, index) in rankings" :key="index">
            <CardRanking :jogo="ranking.jogo" :jogadores="ranking.jogadores" />
          </div>
        </div>
      </div>
    </section>

    <!-- Últimas Novidades -->
    <section class="section-arcade">
      <div class="container-fluid px-4 px-lg-5">
        <div class="section-header-arcade mb-5">
          <h2 class="neon-pulse">
            <i class="bi bi-newspaper"></i> ÚLTIMAS NOVIDADES
          </h2>
          <router-link to="/novidades" class="view-all-arcade">
            VER TODAS <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-xl-4" v-for="n in 3" :key="n">
            <CardNoticia />
          </div>
        </div>
      </div>
    </section>

    <!-- Podcast Section -->
    <section class="section-arcade podcast-arcade">
      <div class="container-fluid px-4 px-lg-5">
        <div class="section-header-arcade mb-5">
          <h2 class="neon-pulse">
            <i class="bi bi-mic-fill"></i> ÚLTIMO PODCAST
          </h2>
          <router-link to="/podcast" class="view-all-arcade">
            VER TODOS <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
        <PodcastPlayer />
      </div>
    </section>

    <!-- Galeria Preview -->
    <section class="section-arcade">
      <div class="container-fluid px-4 px-lg-5">
        <div class="section-header-arcade mb-5">
          <h2 class="neon-pulse">
            <i class="bi bi-images"></i> GALERIA
          </h2>
          <router-link to="/galeria" class="view-all-arcade">
            VER GALERIA <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
        <div class="row g-3">
          <div class="col-6 col-md-4 col-lg-3" v-for="i in 4" :key="i">
            <CardGaleria />
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-arcade">
      <div class="container-fluid px-4 px-lg-5">
        <div class="section-header-arcade mb-5">
          <h2 class="neon-pulse">
            <i class="bi bi-people-fill"></i> NOSSA EQUIPE
          </h2>
          <router-link to="/equipe" class="view-all-arcade">
            CONHECER TODOS <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
        <div class="row g-4">
          <div class="col-6 col-md-4 col-lg-3" v-for="e in 4" :key="e">
            <CardEquipe />
          </div>
        </div>
      </div>
    </section>

    <!-- Insert Coin CTA -->
    <section class="insert-coin-section">
      <div class="container text-center">
        <div class="coin-box">
          <h3 class="blink mb-4">
            <i class="bi bi-coin"></i> PRONTO PARA JOGAR?
          </h3>
          <p class="mb-4">Junte-se à maior comunidade de jogos de luta do Brasil</p>
          <button class="btn-arcade btn-arcade-glow">
            <span class="coin-animation d-inline-block">🪙</span>
            INSERT COIN TO CONTINUE
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardNoticia from '../components/CardNoticia.vue'
import CardGaleria from '../components/CardGaleria.vue'
import CardCampeonato from '../components/CardCampeonato.vue'
import CardEquipe from '../components/CardEquipe.vue'
import CardRanking from '../components/CardRanking.vue'
import PodcastPlayer from '../components/PodcastPlayer.vue'

import street from '../data/rankings/street.json'
import tekken from '../data/rankings/tekken.json'
import mk from '../data/rankings/mk.json'

export default {
  name: 'Home',
  components: {
    CardNoticia,
    CardGaleria,
    CardCampeonato,
    CardEquipe,
    CardRanking,
    PodcastPlayer
  },
  data() {
    return {
      rankings: [street, tekken, mk]
    }
  }
}
</script>



<style scoped>
.home {
  width: 100%;
  overflow-x: hidden;
}

/* === HERO ARCADE SECTION === */
.hero-arcade {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  margin: -20px -15px 60px -15px;
  background: 
    linear-gradient(135deg, rgba(10, 10, 20, 0.4) 0%, rgba(30, 15, 40, 0.5) 50%, rgba(10, 10, 20, 0.4) 100%),
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 136, 0, 0.02) 2px, rgba(255, 136, 0, 0.02) 4px);
  overflow: hidden;
}

.hero-arcade::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(255, 136, 0, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.arcade-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(2px 2px at 20% 30%, #ff8800, transparent),
    radial-gradient(2px 2px at 60% 70%, #ff3860, transparent),
    radial-gradient(1px 1px at 50% 50%, #ffcc00, transparent),
    radial-gradient(2px 2px at 80% 10%, #ff8800, transparent);
  background-size: 200% 200%;
  background-position: 0% 0%;
  opacity: 0.3;
  animation: particleMove 20s ease-in-out infinite;
}

@keyframes particleMove {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  line-height: 1.3;
  margin-bottom: 20px;
}

.gradient-arcade {
  background: linear-gradient(135deg, #ff8800 0%, #ff3860 50%, #ffcc00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.hero-subtitle {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: #ddd;
  letter-spacing: 2px;
  font-weight: 700;
}

/* Stat Boxes */
.stat-box {
  background: rgba(255, 136, 0, 0.05);
  border: 2px solid #ff8800;
  border-radius: 12px;
  padding: 20px 10px;
  text-align: center;
  transition: all 0.3s ease;
  min-width: 0;
  overflow: hidden;
}

.stat-box:hover {
  background: rgba(255, 136, 0, 0.1);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 136, 0, 0.4);
}

.stat-number {
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.75rem, 2vw, 1.6rem);
  color: #ffcc00;
  display: block;
  margin-bottom: 10px;
  line-height: 1.3;
}

.stat-label {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(0.55rem, 1.2vw, 0.85rem);
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Arcade Buttons */
.btn-arcade {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 35px;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  border: 3px solid;
  border-radius: 10px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.btn-arcade::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}

.btn-arcade:hover::before {
  width: 300px;
  height: 300px;
}

.btn-arcade-primary {
  background: linear-gradient(135deg, #ff8800, #ff3860);
  border-color: #ffcc00;
  color: #fff;
  box-shadow: 0 5px 0 #a02020, 0 10px 30px rgba(255, 136, 0, 0.5);
}

.btn-arcade-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 0 #a02020, 0 15px 40px rgba(255, 136, 0, 0.7);
  color: #fff;
}

.btn-arcade-primary:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #a02020, 0 5px 20px rgba(255, 136, 0, 0.4);
}

.btn-arcade-secondary {
  background: transparent;
  border-color: #ff8800;
  color: #ff8800;
  box-shadow: 0 5px 0 rgba(255, 136, 0, 0.3), 0 10px 30px rgba(255, 136, 0, 0.3);
}

.btn-arcade-secondary:hover {
  background: rgba(255, 136, 0, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 8px 0 rgba(255, 136, 0, 0.4), 0 15px 40px rgba(255, 136, 0, 0.5);
  color: #ffcc00;
}

.btn-arcade-glow {
  background: linear-gradient(135deg, #ffcc00, #ff8800);
  border-color: #fff;
  color: #000;
  font-size: 1.2rem;
  box-shadow: 0 0 30px rgba(255, 204, 0, 0.8);
  animation: btnGlow 2s ease-in-out infinite;
}

@keyframes btnGlow {
  0%, 100% { box-shadow: 0 0 30px rgba(255, 204, 0, 0.8); }
  50% { box-shadow: 0 0 50px rgba(255, 204, 0, 1), 0 0 80px rgba(255, 136, 0, 0.6); }
}

/* === SECTION ARCADE === */
.section-arcade {
  padding: 60px 0;
  position: relative;
}

.section-arcade:nth-child(even) {
  background: rgba(255, 136, 0, 0.03);
}

.campeonatos-section {
  background: 
    linear-gradient(135deg, rgba(255, 136, 0, 0.05) 0%, rgba(255, 56, 96, 0.05) 100%),
    radial-gradient(circle at top right, rgba(255, 204, 0, 0.08) 0%, transparent 50%);
  border-top: 1px solid rgba(255, 136, 0, 0.1);
  border-bottom: 1px solid rgba(255, 136, 0, 0.1);
  padding: 80px 0;
}

.rankings-special {
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.06) 0%, rgba(255, 136, 0, 0.06) 100%);
  border-top: 2px solid rgba(255, 204, 0, 0.2);
  border-bottom: 2px solid rgba(255, 204, 0, 0.2);
  padding: 80px 0;
}

.podcast-arcade {
  background: linear-gradient(135deg, rgba(255, 56, 96, 0.06) 0%, rgba(255, 136, 0, 0.06) 100%);
}

.section-header-arcade {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 3px solid;
  border-image: linear-gradient(90deg, #ff8800, #ff3860, #ffcc00) 1;
}

.section-header-arcade .header-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.section-header-arcade .header-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 136, 0, 0.2), rgba(255, 56, 96, 0.2));
  border-radius: 12px;
  border: 2px solid rgba(255, 136, 0, 0.4);
  font-size: 1.8rem;
  color: #ff8800;
  animation: iconPulse 2s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 20px rgba(255, 136, 0, 0.3);
  }
  50% { 
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(255, 136, 0, 0.6);
  }
}

.section-header-arcade h2 {
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(0.7rem, 2.5vw, 1.5rem);
  color: #ff8800;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  word-break: break-word;
  max-width: 100%;
}

.view-all-arcade {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(0.8rem, 2vw, 1rem);
  font-weight: 700;
  color: #ddd;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid rgba(255, 136, 0, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.view-all-arcade:hover {
  color: #ff8800;
  border-color: #ff8800;
  background: rgba(255, 136, 0, 0.1);
  transform: translateX(5px);
}

/* === INSERT COIN SECTION === */
.insert-coin-section {
  padding: 80px 20px;
  background: 
    linear-gradient(135deg, rgba(255, 204, 0, 0.1) 0%, rgba(255, 136, 0, 0.1) 100%),
    repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.1) 10px, rgba(0, 0, 0, 0.1) 20px);
  border-top: 4px solid;
  border-bottom: 4px solid;
  border-image: linear-gradient(90deg, #ff8800, #ff3860, #ffcc00, #ff8800) 1;
}

.coin-box {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 30px;
  background: rgba(0, 0, 0, 0.5);
  border: 3px solid #ffcc00;
  border-radius: 20px;
  box-shadow: 0 0 50px rgba(255, 204, 0, 0.5);
}

.coin-box h3 {
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #ffcc00;
}

.coin-box p {
  font-family: 'Orbitron', sans-serif;
  color: #ddd;
  font-size: 1.1rem;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .hero-arcade {
    min-height: 60vh;
    padding: 50px 12px;
    margin: -20px -12px 40px -12px;
  }

  .hero-title {
    font-size: clamp(1.2rem, 6vw, 2rem);
  }

  .hero-subtitle {
    font-size: clamp(0.75rem, 2.5vw, 0.95rem);
    padding: 0 10px;
  }

  .section-arcade {
    padding: 40px 0;
  }

  .section-arcade .container-fluid {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .section-header-arcade {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .section-header-arcade h2 {
    font-size: clamp(0.65rem, 2.5vw, 1rem);
    line-height: 1.5;
  }

  .view-all-arcade {
    font-size: 0.8rem;
    padding: 8px 14px;
  }

  .btn-arcade {
    width: 100%;
    justify-content: center;
    font-size: 0.85rem;
    padding: 12px 20px;
  }

  .campeonatos-section,
  .rankings-special {
    padding: 50px 0;
  }

  .insert-coin-section {
    padding: 50px 12px;
  }

  .coin-box {
    padding: 30px 20px;
  }

  .coin-box h3 {
    font-size: clamp(1rem, 4vw, 1.3rem);
  }
}

@media (max-width: 576px) {
  .hero-arcade {
    padding: 40px 10px;
    margin: -20px -10px 30px -10px;
  }

  .stat-box {
    padding: 12px 6px;
  }

  .stat-number {
    font-size: clamp(0.65rem, 4vw, 1rem);
  }

  .stat-label {
    font-size: clamp(0.5rem, 2.5vw, 0.7rem);
  }

  .section-arcade .container-fluid {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .insert-coin-section {
    padding: 40px 10px;
  }

  .coin-box {
    padding: 25px 15px;
  }
}
</style>

