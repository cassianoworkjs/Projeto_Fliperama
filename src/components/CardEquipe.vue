<template>
  <div class="membro">
    <div class="membro-image">
      <img src="/img/Equipe3.png" alt="Membro da equipe" />
      <div class="image-overlay"></div>
    </div>
    <div class="membro-info">
      <h3>João Silva</h3>
      <p class="role">Pro Player</p>
      <p class="specialty">Especialista em Street Fighter 6</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardEquipe'
}
</script>

<style scoped>
.membro {
  background: linear-gradient(135deg, rgba(25, 25, 30, 0.95) 0%, rgba(15, 15, 20, 0.98) 100%);
  border: 1px solid rgba(255, 136, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
}

.membro:hover {
  transform: translateY(-6px);
  border-color: #ff8800;
  box-shadow: 0 10px 30px rgba(255, 136, 0, 0.3);
}

.membro-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.membro-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.membro:hover .membro-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  pointer-events: none;
}

.membro-info {
  padding: 20px;
  text-align: center;
}

.membro h3 {
  color: #f0f0f0;
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.role {
  color: #ff8800;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.specialty {
  color: #bbb;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
