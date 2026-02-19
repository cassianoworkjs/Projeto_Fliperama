<template>
  <div class="campeonato">
    <div class="card-badge">TORNEIO</div>
    <div class="card-header">
      <h3 class="card-title">STREET FIGHTER 6</h3>
      <p class="card-subtitle">Campeonato Regional</p>
    </div>
    <div class="card-body">
      <div class="info-row">
        <i class="bi bi-calendar3"></i>
        <span>25 de Janeiro, 2026</span>
      </div>
      <div class="info-row">
        <i class="bi bi-people-fill"></i>
        <span>32 Vagas</span>
      </div>
      <div class="info-row prize">
        <i class="bi bi-trophy-fill"></i>
        <span>R$ 5.000</span>
      </div>
      <button class="btn-inscricao">INSCREVER-SE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCampeonato'
}
</script>

<style scoped>
.campeonato {
  position: relative;
  background: linear-gradient(145deg, rgba(25, 25, 35, 0.98), rgba(15, 15, 22, 0.98));
  border: 2px solid rgba(255, 136, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 280px;
}

.campeonato:hover {
  transform: translateY(-5px);
  border-color: #ff8800;
  box-shadow: 0 10px 30px rgba(255, 136, 0, 0.3);
}

.card-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #ff8800, #ff3860);
  color: #fff;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  z-index: 10;
}

.card-header {
  padding: 25px 20px 20px;
  border-bottom: 1px solid rgba(255, 136, 0, 0.2);
}

.card-title {
  color: #fff;
  font-family: 'Press Start 2P', cursive;
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  line-height: 1.4;
  word-wrap: break-word;
}

.card-subtitle {
  color: #999;
  font-size: 1rem;
  margin: 0;
}

.card-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: #ddd;
  font-size: 1.1rem;
}

.info-row i {
  color: #ff8800;
  font-size: 1.3rem;
  width: 28px;
  flex-shrink: 0;
}

.info-row.prize {
  border-bottom: none;
  padding-bottom: 20px;
}

.info-row.prize span {
  color: #ffcc00;
  font-weight: 700;
  font-size: 1.3rem;
}

.info-row.prize i {
  color: #ffcc00;
}

.btn-inscricao {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #ff8800, #ff3860);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
}

.btn-inscricao:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 136, 0, 0.4);
}
</style>
