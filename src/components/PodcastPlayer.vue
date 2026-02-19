<template>
  <div class="podcast-player">
    <div class="podcast-content">
      <div class="podcast-info">
        <div class="podcast-badge">PODCAST</div>
        <h3>Episódio #42: O Futuro dos Jogos de Luta</h3>
        <p class="podcast-description">
          Neste episódio, conversamos sobre as novidades de Street Fighter 6, 
          Tekken 8 e as expectativas para os próximos torneios regionais.
        </p>
        <div class="podcast-meta">
          <span class="meta-item">📅 08 Jan 2026</span>
          <span class="meta-item">⏱️ 45 min</span>
          <span class="meta-item">🎧 2.5k ouvintes</span>
        </div>
      </div>
      <div class="podcast-cover">
        <div class="cover-wrapper">
          <div class="equalizer">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="player-controls">
      <audio controls class="audio-player">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio HTML5.
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PodcastPlayer'
}
</script>

<style scoped>
.podcast-player {
  background: linear-gradient(135deg, rgba(30, 30, 35, 0.95) 0%, rgba(20, 20, 25, 0.98) 100%);
  border: 1px solid rgba(255, 136, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
}

.podcast-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 30px;
  padding: 30px;
  align-items: center;
}

.podcast-info {
  flex: 1;
}

.podcast-badge {
  display: inline-block;
  background: rgba(255, 136, 0, 0.2);
  color: #ff8800;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 15px;
  border: 1px solid rgba(255, 136, 0, 0.4);
}

.podcast-player h3 {
  color: #f0f0f0;
  font-size: 1.5rem;
  margin-bottom: 12px;
  line-height: 1.3;
  font-weight: 600;
}

.podcast-description {
  color: #aaa;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.podcast-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.meta-item {
  color: #999;
  font-size: 0.85rem;
}

.podcast-cover {
  width: 150px;
  height: 150px;
}

.cover-wrapper {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff8800, #ff3860);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(255, 136, 0, 0.4);
}

.equalizer {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  height: 60px;
}

.bar {
  width: 8px;
  background: #fff;
  border-radius: 4px;
  animation: equalize 1s ease-in-out infinite;
}

.bar:nth-child(1) { animation-delay: 0s; height: 20%; }
.bar:nth-child(2) { animation-delay: 0.2s; height: 40%; }
.bar:nth-child(3) { animation-delay: 0.4s; height: 60%; }
.bar:nth-child(4) { animation-delay: 0.6s; height: 30%; }

@keyframes equalize {
  0%, 100% { height: 20%; }
  50% { height: 100%; }
}

.player-controls {
  padding: 20px 30px;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 136, 0, 0.2);
}

.audio-player {
  width: 100%;
  height: 40px;
  outline: none;
}

.audio-player::-webkit-media-controls-panel {
  background: rgba(255, 136, 0, 0.1);
}

@media (max-width: 768px) {
  .podcast-content {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }
  
  .podcast-cover {
    margin: 0 auto;
  }
  
  .podcast-meta {
    justify-content: center;
  }
}
</style>
