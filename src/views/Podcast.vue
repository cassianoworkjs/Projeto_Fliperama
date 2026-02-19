<template>
  <div class="podcast">
    <h1>Podcast</h1>
    <p>Ouça nossos episódios e fique por dentro das novidades.</p>
  </div>
</template>

<script>
export default {
  name: 'Podcast',
}
</script>

<style scoped>
.podcast {
  padding: 40px;
  color: #fff;
}

@media (max-width: 768px) {
  .podcast {
    padding: 25px 20px;
  }
}

@media (max-width: 576px) {
  .podcast {
    padding: 20px 15px;
  }
}
</style>
