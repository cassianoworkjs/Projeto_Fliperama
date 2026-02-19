<template>
  <div class="galeria-card">
    <div class="galeria-image">
      <img src="/img/Equipe1.png" alt="Imagem da galeria" />
      <div class="galeria-overlay">
        <div class="overlay-content">
          <span class="view-icon">🔍</span>
          <span class="view-text">Ver imagem</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardGaleria'
}
</script>

<style scoped>
.galeria-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  aspect-ratio: 1;
}

.galeria-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(255, 136, 0, 0.4);
}

.galeria-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.galeria-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.galeria-card:hover .galeria-image img {
  transform: scale(1.15);
}

.galeria-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 136, 0, 0.9), rgba(255, 56, 96, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.galeria-card:hover .galeria-overlay {
  opacity: 1;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #fff;
}

.view-icon {
  font-size: 2rem;
  animation: zoomIn 0.3s ease;
}

.view-text {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes zoomIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
