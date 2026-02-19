<template>
  <div class="equipe-arcade" :class="{ 'flickering': isFlickering }">
    
    <!-- Efeito Scanlines (CRT) -->
    <div class="scanlines"></div>

    <!-- Mensagem de Desbloqueio -->
    <transition name="fade">
      <div v-if="showUnlockMessage" class="unlock-modal">
        <div class="unlock-box" :class="{ 'unlocked': isUnlocked }">
          <div class="trophy-icon">
            <i class="bi bi-trophy-fill"></i>
          </div>
          <h2 class="unlock-title">CHEAT CODE ACTIVATED</h2>
          <p class="unlock-text">NEW CHARACTER UNLOCKED: LEGENDARY DEVELOP</p>
        </div>
      </div>
    </transition>

    <div class="container py-5">
      
      <!-- Header Estilo Arcade -->
      <header class="text-center mb-5">
        <div class="arcade-header" :class="{ 'unlocked': isUnlocked }">
          <h1 class="arcade-title" :class="{ 'unlocked': isUnlocked }">
            {{ isUnlocked ? 'LEGENDARY SQUAD' : 'GUILD MEMBERS' }}
          </h1>
        </div>
        <p class="arcade-subtitle" :class="{ 'unlocked': isUnlocked }">
          {{ isUnlocked ? 'SPECIAL MODE ACTIVE' : 'CLIQUE NOS CARDS PARA OBTER INFORMAÇÕES SOBRE NOSSA EQUIPE' }}
        </p>
      </header>

      <div class="row g-4">
        
        <!-- Lista de Personagens -->
        <div class="col-lg-4 order-2 order-lg-1">
          <h2 class="party-title">
            <i class="bi bi-joystick"></i>
            {{ isUnlocked ? 'UNLOCKED MEMBERS' : 'GUILD MEMBERS' }}
          </h2>
          
          <div class="member-list">
            <button
              v-for="(member, idx) in equipe"
              :key="member.id"
              @click="selectedMember = idx"
              class="member-card"
              :class="{ 
                'active': selectedMember === idx,
                'secret': selectedMember === idx && member.id === 99,
                'unlocked': isUnlocked && selectedMember === idx
              }"
            >
              <div class="d-flex align-items-center">
                <div class="member-avatar" :class="{ 'active': selectedMember === idx, 'pulse': selectedMember === idx }">
                  <img :src="member.sprite" alt="avatar" class="pixelated" />
                </div>
                <div class="member-info">
                  <div class="member-level" :class="{ 
                    'active': selectedMember === idx,
                    'secret': selectedMember === idx && member.id === 99,
                    'konami': !isUnlocked && selectedMember === idx
                  }">
                    LVL {{ member.id === 99 ? '??' : '99' }} {{ member.funcao.split(' ')[0] }}
                  </div>
                  <div class="member-name">
                    {{ member.nome }}
                    <i v-if="member.id === 99" class="bi bi-star-fill ms-1 secret-star"></i>
                  </div>
                </div>
              </div>
              <div v-if="selectedMember === idx" class="member-arrow">
                <i class="bi bi-chevron-right"></i>
              </div>
            </button>
          </div>
        </div>

        <!-- Visualização de Detalhes -->
        <div class="col-lg-8 order-1 order-lg-2">
          <div class="details-container" :class="{ 'secret': isUnlocked && equipe[selectedMember].id === 99 }">
            <div class="details-inner">
              
              <!-- Background Decorativo -->
              <div class="bg-decoration">
                <i v-if="isUnlocked && equipe[selectedMember].id === 99" class="bi bi-trophy-fill"></i>
                <i v-else class="bi bi-person-fill"></i>
              </div>

              <div class="row g-4">
                <div class="col-md-5 d-flex align-items-center justify-content-center">
                  <div class="profile-frame" :class="{ 'secret': isUnlocked && equipe[selectedMember].id === 99 }">
                    <div class="profile-bg"></div>
                    <img 
                      :src="equipe[selectedMember].sprite" 
                      alt="Profile" 
                      class="profile-img pixelated"
                    />
                    <div class="profile-badge" :class="{ 'secret': isUnlocked && equipe[selectedMember].id === 99 }">
                      {{ isUnlocked && equipe[selectedMember].id === 99 ? 'LEGEND' : 'ACTIVE' }}
                    </div>
                  </div>
                </div>

                <div class="col-md-7 d-flex flex-column justify-content-center">
                  <div class="mb-3">
                    <h3 class="character-name" :class="{ 'secret': isUnlocked && equipe[selectedMember].id === 99 }">
                      {{ equipe[selectedMember].nome }}
                    </h3>
                    <div class="character-role" :class="{ 'secret': isUnlocked && equipe[selectedMember].id === 99 }">
                      {{ equipe[selectedMember].funcao }}
                    </div>
                  </div>

                  <p class="character-bio" :class="{ 'secret': isUnlocked && equipe[selectedMember].id === 99 }">
                    "{{ equipe[selectedMember].bio }}"
                  </p>

                  <div class="stats-container">
                    <div v-for="stat in statsDisplay" :key="stat.label" class="stat-item mb-3">
                      <div class="d-flex justify-content-between stat-header">
                        <span class="stat-label">
                          <i :class="stat.icon"></i>
                          {{ stat.label }}
                        </span>
                        <span class="stat-value">{{ stat.value }}%</span>
                      </div>
                      <div class="progress stat-bar">
                        <div 
                          class="progress-bar"
                          :class="[stat.colorClass, { 'secret': isUnlocked && equipe[selectedMember].id === 99 }]"
                          :style="{ width: stat.value + '%' }"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="arcade-footer mt-5">
        <div class="footer-info">
          <span>Credits: {{ isUnlocked ? 'INF' : '99' }}</span>
          <span>{{ isUnlocked ? 'SPECIAL MODE ON' : 'Insert Coin' }}</span>
          <span>© 1989 Pixel Team Corp</span>
        </div>
        <div class="footer-line"></div>
      </footer>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const selectedMember = ref(0);
const isFlickering = ref(false);
const konamiCode = ref([]);
const isUnlocked = ref(false);
const showUnlockMessage = ref(false);

const secretSequence = [
  'arrowup', 'arrowup', 
  'arrowdown', 'arrowdown', 
  'arrowleft', 'arrowright', 
  'arrowleft', 'arrowright', 
  'b', 'a'
];

const baseEquipe = [
  {
    id: 1,
    nome: "ALEX 'PIXEL' SILVA",
    funcao: "LÍDER DE GUILDA (CEO)",
    bio: "Especialista em estratégia de alto nível e veterano em consoles de 16 bits. Domina a arte de transformar pixels em lucros.",
    stats: { forca: 85, agilidade: 70, intel: 95 },
    sprite: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Alex&backgroundColor=b6e3f4"
  },
  {
    id: 2,
    nome: "MARINA 'BUFFER' COSTA",
    funcao: "ARQUITETA DE SISTEMAS",
    bio: "Ninguém otimiza o código como ela. Marina consegue reduzir o lag de qualquer projeto antes mesmo do primeiro boss.",
    stats: { forca: 60, agilidade: 95, intel: 90 },
    sprite: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Marina&backgroundColor=ffdfbf"
  },
  {
    id: 3,
    nome: "BRUNO 'GLITCH' SANTOS",
    funcao: "MESTRE DO DESIGN",
    bio: "Transforma bugs em recursos visuais impressionantes. Sua visão de 8 cores é o que dá vida à nossa interface.",
    stats: { forca: 75, agilidade: 85, intel: 80 },
    sprite: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Bruno&backgroundColor=c0aede"
  }
];

const secretMember = {
  id: 99,
  nome: "FINAL BOSS DEV",
  funcao: "THE CREATOR (SECRET)",
  bio: "Você desbloqueou o desenvolvedor lendário. Com o Konami Code ativo, todos os limites de processamento foram removidos.",
  stats: { forca: 100, agilidade: 100, intel: 100 },
  sprite: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Legend&backgroundColor=facc15"
};

const equipe = computed(() => isUnlocked.value ? [...baseEquipe, secretMember] : baseEquipe);

const statsDisplay = computed(() => {
  const member = equipe.value[selectedMember.value];
  return [
    { label: 'Poder', value: member.stats.forca, icon: 'bi-lightning-fill', colorClass: 'bg-pink' },
    { label: 'Agilidade', value: member.stats.agilidade, icon: 'bi-speedometer2', colorClass: 'bg-cyan' },
    { label: 'Inteligência', value: member.stats.intel, icon: 'bi-shield-fill', colorClass: 'bg-emerald' }
  ];
});

// Listener para o Konami Code
const handleKeyDown = (e) => {
  const key = e.key.toLowerCase();
  konamiCode.value = [...konamiCode.value, key].slice(-10);
  
  if (JSON.stringify(konamiCode.value) === JSON.stringify(secretSequence)) {
    if (!isUnlocked.value) {
      isUnlocked.value = true;
      showUnlockMessage.value = true;
      selectedMember.value = 3;
      setTimeout(() => {
        showUnlockMessage.value = false;
      }, 3000);
    }
  }
};

// Simulação de flicker ocasional
let flickerInterval;

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  
  flickerInterval = setInterval(() => {
    isFlickering.value = true;
    setTimeout(() => {
      isFlickering.value = false;
    }, 150);
  }, 4000);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  if (flickerInterval) {
    clearInterval(flickerInterval);
  }
});
</script>

<style scoped>
/* === ESTILO ARCADE COM PALETA DO PROJETO === */

.equipe-arcade {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(15, 15, 20, 0.98) 100%);
  color: #f0f0f0;
  font-family: 'Press Start 2P', 'Courier New', monospace;
  position: relative;
  overflow: hidden;
  transition: opacity 0.15s;
}

.equipe-arcade.flickering {
  opacity: 0.9;
}

/* === SCANLINES CRT === */
.scanlines {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
              linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 4px, 3px 100%;
  pointer-events: none;
  z-index: 50;
  opacity: 0.1;
}

/* === MODAL DE DESBLOQUEIO === */
.unlock-modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}

.unlock-box {
  border: 4px solid #00ffff;
  padding: 3rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
  animation: fadeIn 0.3s;
}

.unlock-box.unlocked {
  border-color: #ffcc00;
  box-shadow: 0 0 30px rgba(255, 204, 0, 0.6);
}

.trophy-icon {
  font-size: 4rem;
  color: #ffcc00;
  margin-bottom: 1rem;
  animation: bounce 1s infinite;
}

.unlock-title {
  font-size: 1.8rem;
  color: #ffcc00;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.unlock-text {
  color: #f0f0f0;
  letter-spacing: 4px;
  margin: 0;
  font-size: 0.8rem;
}

/* === HEADER ARCADE === */
.arcade-header {
  display: inline-block;
  border: 4px double #ff8800;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 20px rgba(255, 136, 0, 0.5);
}

.arcade-header.unlocked {
  border-color: #00ffff;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.arcade-title {
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 900;
  font-style: italic;
  letter-spacing: -2px;
  background: linear-gradient(to bottom, #ff00ff, #ff8800, #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
  margin: 0;
}

.arcade-title.unlocked {
  background: linear-gradient(to bottom, #00ffff, #ff3860, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.arcade-subtitle {
  margin-top: 1rem;
  color: #ff8800;
  animation: pulse 2s infinite;
  letter-spacing: 4px;
  font-size: 0.7rem;
}

.arcade-subtitle.unlocked {
  color: #00ffff;
}

/* === LISTA DE MEMBROS === */
.party-title {
  color: #ff00ff;
  font-size: 0.7rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.member-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.member-card {
  width: 100%;
  text-align: left;
  padding: 1rem;
  border: 2px solid #444;
  background: rgba(15, 15, 20, 0.5);
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  color: #f0f0f0;
  font-size: 0.8rem;
}

.member-card:hover {
  border-color: #ff8800;
  background: rgba(25, 25, 30, 0.7);
}

.member-card.active {
  border-color: #ff8800;
  background: rgba(255, 136, 0, 0.1);
  transform: translateX(1rem);
  box-shadow: 0 0 20px rgba(255, 136, 0, 0.5);
}

.member-card.active.unlocked {
  border-color: #00ffff;
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.6);
}

.member-card.secret {
  border-color: #00ffff;
  background: rgba(0, 255, 255, 0.15);
}

.member-avatar {
  width: 3rem;
  height: 3rem;
  border: 2px solid #444;
  margin-right: 1rem;
  overflow: hidden;
}

.member-avatar.active {
  border-color: #ff8800;
}

.member-avatar.pulse {
  animation: pulse 1.5s infinite;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info {
  flex: 1;
}

.member-level {
  font-size: 0.6rem;
  color: #aaa;
  margin-bottom: 0.25rem;
}

.member-level.active {
  color: #ff8800;
}

.member-level.secret {
  color: #00ffff;
}

.member-name {
  font-weight: bold;
  font-size: 0.75rem;
}

.secret-star {
  color: #ffcc00;
  font-size: 0.7rem;
}

.member-arrow {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #ff8800;
  font-size: 1.5rem;
  animation: bounce-x 1s infinite;
}

/* === DETALHES DO PERSONAGEM === */
.details-container {
  background: rgba(15, 15, 20, 0.9);
  border: 4px solid #ff8800;
  padding: 0.25rem;
  box-shadow: 0 10px 40px rgba(255, 136, 0, 0.3);
}

.details-container.secret {
  border-color: #00ffff;
  box-shadow: 0 10px 50px rgba(0, 255, 255, 0.4);
}

.details-inner {
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #333;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  min-height: 500px;
}

.bg-decoration {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 12rem;
  color: #222;
  opacity: 0.1;
  pointer-events: none;
}

.profile-frame {
  width: 16rem;
  height: 16rem;
  border: 4px solid #ff3860;
  padding: 0.5rem;
  position: relative;
}

.profile-frame.secret {
  border-color: #00ffff;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.profile-bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 56, 96, 0.1);
}

.profile-frame.secret .profile-bg {
  background: rgba(0, 255, 255, 0.1);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 0 10px rgba(255, 56, 96, 0.5));
}

.profile-frame.secret .profile-img {
  filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.6));
}

.profile-badge {
  position: absolute;
  bottom: -1rem;
  left: -1rem;
  background: #ff3860;
  padding: 0.3rem 0.8rem;
  font-size: 0.6rem;
  font-weight: bold;
  transform: skewX(-12deg);
}

.profile-badge.secret {
  background: #00ffff;
  color: #000;
}

.character-name {
  font-size: 1.8rem;
  color: #ff8800;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.character-name.secret {
  color: #00ffff;
}

.character-role {
  display: inline-block;
  background: rgba(255, 136, 0, 0.2);
  border: 1px solid #ff8800;
  color: #ff8800;
  padding: 0.3rem 0.6rem;
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.character-role.secret {
  background: rgba(0, 255, 255, 0.2);
  border-color: #00ffff;
  color: #00ffff;
}

.character-bio {
  color: #ddd;
  font-size: 0.75rem;
  line-height: 1.6;
  border-left: 2px solid #ff3860;
  padding-left: 1rem;
  font-style: italic;
  margin: 1.5rem 0;
}

.character-bio.secret {
  border-color: #00ffff;
}

/* === STATS === */
.stats-container {
  margin-top: 1.5rem;
}

.stat-header {
  font-size: 0.6rem;
  color: #aaa;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
}

.stat-label {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.stat-bar {
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #333;
  overflow: hidden;
}

.progress-bar.bg-pink {
  background: #ff3860;
  box-shadow: 0 0 10px rgba(255, 56, 96, 0.5);
}

.progress-bar.bg-cyan {
  background: #00ffff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.progress-bar.bg-emerald {
  background: #10b981;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}

.progress-bar.secret {
  background: #00ffff !important;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.8) !important;
}

/* === FOOTER === */
.arcade-footer {
  text-align: center;
  opacity: 0.5;
}

.footer-info {
  display: flex;
  gap: 2rem;
  justify-content: center;
  font-size: 0.5rem;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.footer-line {
  height: 1px;
  width: 8rem;
  background: linear-gradient(to right, transparent, #444, transparent);
  margin: 0 auto;
}

/* === ANIMAÇÕES === */
@keyframes bounce-x {
  0%, 100% { transform: translateX(0) translateY(-50%); }
  50% { transform: translateX(5px) translateY(-50%); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.pixelated {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

/* === TRANSIÇÕES === */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* === RESPONSIVO === */
@media (max-width: 768px) {
  .arcade-title {
    font-size: 1.5rem;
  }
  
  .character-name {
    font-size: 1.2rem;
  }
  
  .profile-frame {
    width: 12rem;
    height: 12rem;
  }
  
  .footer-info {
    gap: 1rem;
    font-size: 0.45rem;
  }
}
</style>
