<template>
  <div class="novidades">
    <!-- Page Header -->
    <div class="page-header">
      <h1>
        <span class="gradient-text">Novidades</span>
      </h1>
      <p class="page-description">Fique por dentro de tudo que acontece no mundo dos jogos de luta</p>
    </div>

    <!-- Featured Post -->
    <section class="section featured-section">
      <div class="featured-post">
        <div class="featured-badge">EM DESTAQUE</div>
        <h2>Anunciado o maior torneio de Street Fighter 6 da América Latina</h2>
        <p>Com premiação de R$ 50.000, o evento promete reunir os melhores jogadores do continente em março de 2026.</p>
        <div class="featured-meta">
          <span>📅 08 Jan 2026</span>
          <span>👁️ 2.5k visualizações</span>
        </div>
        <a href="#" class="read-more-featured">Ler matéria completa →</a>
      </div>
    </section>

    <!-- Categories Filter -->
    <section class="section">
      <div class="section-header">
        <h2>Últimas Notícias</h2>
        <div class="categories">
          <button class="category-btn active">Todas</button>
          <button class="category-btn">Torneios</button>
          <button class="category-btn">Reviews</button>
          <button class="category-btn">Updates</button>
          <button class="category-btn">Comunidade</button>
        </div>
      </div>
      <div class="cards-grid">
        <CardNoticia v-for="n in 9" :key="n" />
      </div>
    </section>

    <!-- Load More -->
    <div class="load-more">
      <button class="load-more-btn">Carregar mais notícias</button>
    </div>
  </div>
</template>

<script>
import CardNoticia from '../components/CardNoticia.vue'

export default {
  name: 'Novidades',
  components: {
    CardNoticia
  }
}
</script>

<style scoped>
.novidades {
  padding: 40px 0;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(255, 56, 96, 0.05) 0%, rgba(255, 136, 0, 0.05) 100%);
  border-radius: 12px;
  border: 1px solid rgba(255, 56, 96, 0.2);
}

.page-header h1 {
  font-family: 'Press Start 2P', cursive;
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.gradient-text {
  background: linear-gradient(135deg, #ff3860 0%, #ff8800 50%, #ffcc00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-description {
  color: #aaa;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

.section {
  margin-bottom: 60px;
}

.featured-section {
  margin-bottom: 80px;
}

.featured-post {
  background: linear-gradient(135deg, rgba(255, 56, 96, 0.1) 0%, rgba(255, 136, 0, 0.1) 100%);
  border: 2px solid rgba(255, 56, 96, 0.3);
  border-radius: 12px;
  padding: 40px;
  position: relative;
}

.featured-badge {
  display: inline-block;
  background: linear-gradient(135deg, #ff3860, #ff8800);
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
}

.featured-post h2 {
  color: #f0f0f0;
  font-size: 2rem;
  margin-bottom: 15px;
  line-height: 1.3;
}

.featured-post p {
  color: #ccc;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.featured-meta {
  display: flex;
  gap: 30px;
  margin-bottom: 25px;
  color: #999;
  font-size: 0.9rem;
}

.read-more-featured {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 30px;
  background: linear-gradient(135deg, #ff3860, #ff8800);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.read-more-featured:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 56, 96, 0.5);
}

.section-header {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(255, 56, 96, 0.2);
}

.section-header h2 {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.3rem;
  color: #ff3860;
  margin: 0 0 20px 0;
}

.categories {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 10px 20px;
  background: rgba(255, 56, 96, 0.1);
  border: 1px solid rgba(255, 56, 96, 0.3);
  border-radius: 6px;
  color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.category-btn:hover,
.category-btn.active {
  background: rgba(255, 56, 96, 0.2);
  border-color: #ff3860;
  color: #ff3860;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.load-more {
  text-align: center;
  margin-top: 40px;
}

.load-more-btn {
  padding: 15px 40px;
  background: transparent;
  border: 2px solid rgba(255, 56, 96, 0.4);
  border-radius: 8px;
  color: #ff3860;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  background: rgba(255, 56, 96, 0.1);
  border-color: #ff3860;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .novidades {
    padding: 30px 0;
  }

  .page-header {
    margin-bottom: 40px;
    padding: 30px 20px;
  }

  .page-header h1 {
    font-size: 1.5rem;
  }

  .page-description {
    font-size: 1rem;
    padding: 0 10px;
  }

  .featured-section {
    margin-bottom: 50px;
  }

  .featured-post {
    padding: 25px 20px;
  }

  .featured-post h2 {
    font-size: 1.4rem;
    line-height: 1.35;
  }

  .featured-post p {
    font-size: 1rem;
  }

  .featured-meta {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  .read-more-featured {
    padding: 12px 24px;
    font-size: 0.95rem;
  }

  .section-header h2 {
    font-size: 1.1rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .categories {
    justify-content: center;
  }

  .category-btn {
    padding: 8px 14px;
    font-size: 0.85rem;
  }

  .load-more-btn {
    padding: 12px 30px;
    font-size: 0.95rem;
  }
}

@media (max-width: 576px) {
  .novidades {
    padding: 20px 0;
  }

  .page-header {
    margin-bottom: 30px;
    padding: 25px 15px;
  }

  .page-header h1 {
    font-size: 1.2rem;
  }

  .page-description {
    font-size: 0.9rem;
  }

  .featured-post {
    padding: 20px 15px;
  }

  .featured-post h2 {
    font-size: 1.2rem;
  }

  .featured-post p {
    font-size: 0.95rem;
  }

  .section-header h2 {
    font-size: 0.95rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .category-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style>
