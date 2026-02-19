<template>
  <div class="post">
    <div class="post-header">
      <span class="post-category">NOTÍCIAS</span>
      <span class="post-date">08 Jan 2026</span>
    </div>
    <div class="post-content">
      <h3>Novidades sobre o próximo torneio regional</h3>
      <p>Confira todas as informações sobre inscrições, regras e premiação do maior evento do ano.</p>
    </div>
    <div class="post-footer">
      <a href="#" class="read-more">
        Ler matéria completa 
        <span class="arrow">→</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardNoticia'
}
</script>

<style scoped>
.post {
  background: linear-gradient(135deg, rgba(25, 25, 30, 0.95) 0%, rgba(15, 15, 20, 0.98) 100%);
  border: 1px solid rgba(255, 56, 96, 0.3);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 280px;
}

.post:hover {
  transform: translateY(-4px);
  border-color: #ff3860;
  box-shadow: 0 8px 30px rgba(255, 56, 96, 0.3);
}

@media (max-width: 576px) {
  .post {
    min-width: 0;
  }

  .post-content,
  .post-footer {
    padding-left: 15px;
    padding-right: 15px;
  }

  .post-content {
    padding-top: 15px;
  }

  .post-footer {
    padding-bottom: 15px;
  }

  .post h3 {
    font-size: 1.05rem;
  }

  .post p {
    font-size: 0.9rem;
  }
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: rgba(255, 56, 96, 0.1);
  border-bottom: 1px solid rgba(255, 56, 96, 0.2);
  flex-wrap: wrap;
  gap: 10px;
}

.post-category {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ff3860;
}

.post-date {
  font-size: 0.9rem;
  color: #888;
}

.post-content {
  padding: 25px;
  flex: 1;
}

.post h3 {
  color: #f0f0f0;
  font-size: 1.2rem;
  margin-bottom: 15px;
  line-height: 1.5;
  font-weight: 600;
  word-wrap: break-word;
}

.post p {
  color: #bbb;
  font-size: 1rem;
  line-height: 1.7;
}

.post-footer {
  padding: 0 25px 25px 25px;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #ff3860;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.read-more:hover {
  gap: 12px;
  color: #ff8800;
}

.arrow {
  transition: transform 0.3s ease;
}

.read-more:hover .arrow {
  transform: translateX(4px);
}
</style>
