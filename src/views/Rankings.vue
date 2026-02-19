<template>
  <div class="rankings">
    <!-- Page Header -->
    <div class="page-header">
      <h1>
        <span class="gradient-text">Rankings</span>
      </h1>
      <p class="page-description">Conheça os melhores jogadores de cada modalidade</p>
    </div>

    <!-- Rankings Cards -->
    <section class="section">
      <div class="section-header">
        <h2>Rankings por Jogo</h2>
        <div class="game-filters">
          <button class="game-filter active">Todos</button>
          <button class="game-filter">Street Fighter</button>
          <button class="game-filter">Tekken</button>
          <button class="game-filter">Mortal Kombat</button>
        </div>
      </div>
      <div class="cards-grid">
        <CardRanking
          v-for="(ranking, index) in rankings"
          :key="index"
          :jogo="ranking.jogo"
          :jogadores="ranking.jogadores"
        />
      </div>
    </section>

    <!-- Links para Rankings Específicos -->
    <section class="section">
      <div class="section-header">
        <h2>Rankings Detalhados</h2>
      </div>
      <div class="ranking-links">
        <router-link to="/ranking/street-fighter" class="ranking-link">
          <span class="link-icon">🎮</span>
          <span class="link-text">Ranking Street Fighter 6</span>
          <span class="link-arrow">→</span>
        </router-link>
        <router-link to="/ranking/tekken" class="ranking-link">
          <span class="link-icon">🎮</span>
          <span class="link-text">Ranking Tekken 8</span>
          <span class="link-arrow">→</span>
        </router-link>
        <router-link to="/ranking/mortal-kombat" class="ranking-link">
          <span class="link-icon">🎮</span>
          <span class="link-text">Ranking Mortal Kombat 1</span>
          <span class="link-arrow">→</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import CardRanking from '../components/CardRanking.vue'
import street from '../data/rankings/street.json'
import tekken from '../data/rankings/tekken.json'
import mk from '../data/rankings/mk.json'

export default {
  name: 'Rankings',
  components: {
    CardRanking
  },
  data() {
    return {
      rankings: [street, tekken, mk]
    }
  }
}
</script>

<style scoped>
.rankings {
  padding: 40px 0;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.05) 0%, rgba(255, 136, 0, 0.05) 100%);
  border-radius: 12px;
  border: 1px solid rgba(255, 204, 0, 0.2);
}

.page-header h1 {
  font-family: 'Press Start 2P', cursive;
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.gradient-text {
  background: linear-gradient(135deg, #ffcc00 0%, #ff8800 50%, #ff3860 100%);
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
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(255, 204, 0, 0.2);
}

.section-header h2 {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.3rem;
  color: #ffcc00;
  margin: 0 0 20px 0;
}

.game-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.game-filter {
  padding: 10px 20px;
  background: rgba(255, 204, 0, 0.1);
  border: 1px solid rgba(255, 204, 0, 0.3);
  border-radius: 6px;
  color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.game-filter:hover,
.game-filter.active {
  background: rgba(255, 204, 0, 0.2);
  border-color: #ffcc00;
  color: #ffcc00;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.ranking-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.ranking-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 25px;
  background: linear-gradient(135deg, rgba(25, 25, 30, 0.95) 0%, rgba(15, 15, 20, 0.98) 100%);
  border: 1px solid rgba(255, 204, 0, 0.3);
  border-radius: 12px;
  color: #f0f0f0;
  text-decoration: none;
  transition: all 0.3s ease;
}

.ranking-link:hover {
  border-color: #ffcc00;
  transform: translateX(10px);
  box-shadow: 0 4px 20px rgba(255, 204, 0, 0.3);
}

.link-icon {
  font-size: 1.5rem;
}

.link-text {
  flex: 1;
  font-size: 1.1rem;
  font-weight: 600;
}

.link-arrow {
  color: #ffcc00;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.ranking-link:hover .link-arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
  }
  
  .game-filters {
    justify-content: center;
  }
}
</style>
