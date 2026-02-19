<template>
  <div class="campeonatos" :class="{ 'hadouken-activated': isHadoukenActivated }">
    <!-- Arcade Background Effects -->
    <div class="arcade-bg">
      <!-- Pac-Man -->
      <div class="pacman" :style="{ animationDelay: '0s' }"></div>
      <div class="pacman" :style="{ animationDelay: '5s' }"></div>
      <div class="ghost ghost-red" :style="{ animationDelay: '1s' }"></div>
      <div class="ghost ghost-pink" :style="{ animationDelay: '3s' }"></div>
      <div class="ghost ghost-blue" :style="{ animationDelay: '6s' }"></div>
      
      <!-- Hadouken (Street Fighter) -->
      <div class="hadouken" :style="{ animationDelay: '2s', top: '30%' }"></div>
      <div class="hadouken" :style="{ animationDelay: '7s', top: '70%' }"></div>
      
      <!-- Lightning (Tekken) -->
      <div class="lightning" :style="{ left: '20%', animationDelay: '3s' }"></div>
      <div class="lightning" :style="{ left: '60%', animationDelay: '8s' }"></div>
      
      <!-- Flames (Mortal Kombat) -->
      <div class="flame-container">
        <div class="flame" v-for="n in 8" :key="'flame-' + n" :style="{ left: (n * 12) + '%', animationDelay: (n * 0.2) + 's' }"></div>
      </div>
      
      <!-- Game Particles -->
      <div class="game-particle" v-for="n in 15" :key="'particle-' + n" 
           :style="{ 
             left: (Math.random() * 100) + '%', 
             top: (Math.random() * 100) + '%',
             '--tx': (Math.random() * 200 - 100) + 'px',
             '--ty': (Math.random() * 200 - 100) + 'px',
             animationDelay: (n * 0.5) + 's'
           }"></div>
    </div>

    <!-- CRT Overlay - Apenas quando desbloqueado -->
    <div v-if="isHadoukenActivated" class="crt-overlay"></div>

    <!-- Page Header -->
    <div class="page-header">
      <h1>
        <span class="gradient-text">Campeonatos</span>
      </h1>
      <p class="page-description">Participe dos maiores torneios de jogos de luta do Brasil</p>
    </div>

    <!-- Próximos Campeonatos -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Próximos Torneios</h2>
          <span class="count-badge">3 eventos</span>
        </div>
        <div class="cards-grid">
          <CardCampeonato v-for="c in 6" :key="c" />
        </div>
      </div>
    </section>

    <!-- Campeonatos Anteriores -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Campeonatos Anteriores</h2>
          <button class="filter-btn">Filtrar por jogo</button>
        </div>
        <div class="cards-grid">
          <CardCampeonato v-for="c in 3" :key="'past-' + c" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardCampeonato from '../components/CardCampeonato.vue'

export default {
  name: 'Campeonatos',
  components: {
    CardCampeonato
  },
  data() {
    return {
      isHadoukenActivated: false,
      keyBuffer: []
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    handleKeyDown(e) {
      // Hadouken Code: ↓ ↓ → P (ArrowDown, ArrowDown, ArrowRight, 'p')
      this.keyBuffer.push(e.key.toLowerCase())
      
      // Manter apenas os últimos 4 inputs
      if (this.keyBuffer.length > 4) {
        this.keyBuffer.shift()
      }
      
      // Verificar se a sequência é Hadouken
      if (
        this.keyBuffer.length === 4 &&
        this.keyBuffer[0] === 'arrowdown' &&
        this.keyBuffer[1] === 'arrowdown' &&
        this.keyBuffer[2] === 'arrowright' &&
        this.keyBuffer[3] === 'p'
      ) {
        this.isHadoukenActivated = true
      }
    }
  }
}
</script>

<style scoped>
.campeonatos {
  padding: 40px 0;
  position: relative;
  min-height: 100vh;
}

/* CRT Overlay - Efeito de scanlines */
.crt-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.03) 1px,
    transparent 1px
  );
  background-size: 100% 2px;
  pointer-events: none;
  z-index: 999;
}

/* === ARCADE BACKGROUND EFFECTS === */
.arcade-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

/* Pac-Man */
.pacman {
  position: absolute;
  width: 40px;
  height: 40px;
  background: #ffcc00;
  border-radius: 50%;
  top: 20%;
  clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
  animation: pacman-move 15s linear infinite, pacman-chomp 0.5s ease-in-out infinite;
  filter: drop-shadow(0 0 10px #ffcc00);
}

/* Ghost */
.ghost {
  position: absolute;
  position: relative;
  z-index: 1;
  margin-bottom: 60px;
}

.section-header {
  position: relative;
  z-index: 1;
  border-radius: 40% 40% 0 0;
  animation: pacman-move 18s linear infinite, ghost-float 2s ease-in-out infinite;
  filter: drop-shadow(0 0 10px currentColor);
}

.ghost::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 10px;
  background: linear-gradient(45deg, transparent 33%, currentColor 33%, currentColor 66%, transparent 66%);
  background-size: 12px 12px;
}

.ghost-red { 
  background: #ff3860; 
  color: #ff3860;
  top: 40%;
}
.ghost-pink { 
  background: #ff88cc; 
  color: #ff88cc;
  top: 60%;
}
.ghost-blue { 
  background: #00ccff; 
  color: #00ccff;
  top: 50%;
}

/* Hadouken (Street Fighter) */
.hadouken {
  position: absolute;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(0, 150, 255, 0.8) 0%, rgba(0, 100, 255, 0.4) 50%, transparent 100%);
  border-radius: 50%;
  animation: hadouken 10s ease-in-out infinite;
  filter: blur(2px);
}

.hadouken::before {
  content: '';
  position: absolute;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
  border-radius: 50%;
}

/* Lightning (Tekken) */
.lightning {
  position: absolute;
  width: 4px;
  height: 100%;
  top: 0;
  background: linear-gradient(to bottom, 
    transparent 0%, 
    #ffcc00 20%, 
    #fff 40%, 
    #ffcc00 60%, 
    transparent 80%
  );
  animation: lightning-bolt 4s ease-in-out infinite, lightning-flash 4s ease-in-out infinite;
  filter: drop-shadow(0 0 10px #ffcc00) drop-shadow(0 0 20px #fff);
  transform-origin: top center;
}

.lightning::before,
.lightning::after {
  content: '';
  position: absolute;
  width: 3px;
  height: 40%;
  background: inherit;
}

.lightning::before {
  top: 30%;
  left: -8px;
  transform: rotate(-15deg);
}

.lightning::after {
  top: 50%;
  left: 8px;
  transform: rotate(15deg);
}

/* Flames (Mortal Kombat) */
.flame-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
}

.flame {
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 60px;
  background: linear-gradient(to top, 
    #ff3860 0%, 
    #ff8800 50%, 
    #ffcc00 100%
  );
  border-radius: 50% 50% 0 0;
  animation: flame-rise 2s ease-in-out infinite, flame-flicker 0.3s ease-in-out infinite;
  filter: blur(3px);
  opacity: 0.6;
}

/* Game Particles */
.game-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ff8800;
  border-radius: 2px;
  animation: particle-float 6s ease-in-out infinite;
  opacity: 0;
}

.game-particle:nth-child(3n) { background: #ff3860; }
.game-particle:nth-child(3n+1) { background: #ffcc00; }
.game-particle:nth-child(3n+2) { background: #00ccff; }

.page-header {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(255, 136, 0, 0.05) 0%, rgba(255, 56, 96, 0.05) 100%);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 136, 0, 0.2);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.page-header h1 {
  font-family: 'Press Start 2P', cursive;
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.gradient-text {
  background: linear-gradient(135deg, #ff8800 0%, #ff3860 50%, #ffcc00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-description {
  color: #aaa;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.section {
  margin-bottom: 60px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(255, 136, 0, 0.2);
}

.section-header h2 {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.3rem;
  color: #ff8800;
  margin: 0;
}

.count-badge {
  background: rgba(255, 136, 0, 0.2);
  color: #ff8800;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 136, 0, 0.4);
}

.filter-btn {
  background: transparent;
  color: #ddd;
  border: 1px solid rgba(255, 136, 0, 0.3);
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: rgba(255, 136, 0, 0.1);
  border-color: #ff8800;
  color: #ff8800;
}

.cards-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 30px;
}

@media (max-width: 1400px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1100px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
  }
  
  /* Reduce background effects on mobile */
  .pacman, .ghost, .hadouken, .lightning {
    display: none;
  }
  
  .flame {
    height: 40px;
  }
}
</style>