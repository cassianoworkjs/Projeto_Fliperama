<template>
  <div class="ranking-card">
    <div class="ranking-header">
      <h3>{{ jogo }}</h3>
      <span class="ranking-badge">RANKING</span>
    </div>
    <div class="ranking-body">
      <ol class="ranking-list">
        <li v-for="(j, i) in jogadores.slice(0, 5)" :key="i" :class="{ 'top-player': i === 0 }">
          <span class="player-position">{{ i + 1 }}º</span>
          <span class="player-name">{{ j }}</span>
          <span v-if="i === 0" class="crown">🏆</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardRanking',
  props: {
    jogo: String,
    jogadores: Array
  }
}
</script>

<style scoped>
.ranking-card {
  background: linear-gradient(135deg, rgba(20, 20, 25, 0.95) 0%, rgba(10, 10, 15, 0.98) 100%);
  border: 2px solid rgba(255, 204, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.ranking-card:hover {
  transform: translateY(-4px);
  border-color: #ffcc00;
  box-shadow: 0 8px 30px rgba(255, 204, 0, 0.3);
}

.ranking-header {
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.15) 0%, rgba(255, 136, 0, 0.15) 100%);
  padding: 20px;
  border-bottom: 1px solid rgba(255, 204, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ranking-card h3 {
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  color: #ffcc00;
  margin: 0;
  text-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
}

.ranking-badge {
  font-size: 0.6rem;
  color: #ff8800;
  background: rgba(255, 136, 0, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid rgba(255, 136, 0, 0.4);
  letter-spacing: 1px;
}

.ranking-body {
  padding: 20px;
}

.ranking-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ranking-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.ranking-list li:hover {
  background: rgba(255, 136, 0, 0.05);
  border-color: rgba(255, 136, 0, 0.3);
}

.ranking-list li.top-player {
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.1) 0%, rgba(255, 136, 0, 0.1) 100%);
  border-color: rgba(255, 204, 0, 0.3);
}

.player-position {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  color: #ff8800;
  min-width: 35px;
}

.top-player .player-position {
  color: #ffcc00;
  font-size: 0.9rem;
}

.player-name {
  flex: 1;
  color: #ddd;
  font-size: 0.95rem;
  font-family: 'Bangers', cursive;
}

.top-player .player-name {
  color: #f0f0f0;
  font-weight: bold;
  font-size: 1rem;
}

.crown {
  font-size: 1.2rem;
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

@media (max-width: 576px) {
  .ranking-header {
    padding: 15px;
    flex-wrap: wrap;
    gap: 10px;
  }

  .ranking-card h3 {
    font-size: 0.85rem;
  }

  .ranking-body {
    padding: 15px;
  }

  .ranking-list li {
    padding: 10px;
    gap: 10px;
  }

  .player-position {
    min-width: 28px;
    font-size: 0.7rem;
  }

  .player-name {
    font-size: 0.9rem;
  }
}
</style>
