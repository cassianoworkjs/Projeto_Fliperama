<template>
  <div class="ranking-modalidade">
    <h2>Ranking: Tekken</h2>
    <ol>
      <li v-for="(jogador, index) in ranking" :key="index">
        {{ index + 1 }}º - {{ jogador.nome }}
      </li>
    </ol>
  </div>
</template>

<script>
import ranking from '../../data/rankings/tekken.json'

export default {
  name: 'RankingTekken',
  data() {
    return {
      ranking
    }
  }
}
</script>

<style scoped>
.ranking-modalidade {
  background-color: #1e1e1e;
  border: 2px solid #444;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  margin: 40px auto;
  color: #fff;
  text-align: center;
}
</style>
