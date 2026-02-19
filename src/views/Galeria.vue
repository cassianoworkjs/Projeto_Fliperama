<template>
  <div class="galeria">
    <h1>Galeria</h1>
    <p>Veja imagens dos nossos eventos e bastidores!</p>
  </div>
</template>

<script>
export default {
  name: 'Galeria',
}
</script>

<style scoped>
.galeria {
  padding: 40px;
  color: #fff;
}

@media (max-width: 768px) {
  .galeria {
    padding: 25px 20px;
  }
}

@media (max-width: 576px) {
  .galeria {
    padding: 20px 15px;
  }
}
</style>
