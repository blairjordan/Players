<template>
  <div id="app" class="container">
    <h1>Player Profiles</h1>
    <b-card-group deck>
      <PlayerCard v-for="player in playerData.players" :key="player.firstname"
        :firstname="player.firstname"
        :lastname="player.lastname"
        :team="player.team"
        :position="player.position"
        :playerNumber="player.playerNumber"
        :bio="player.bio"
        :imageUrl="player.imageUrl"
        :games="player.games"
      />
    </b-card-group>
  </div>
</template>

<script>
import PlayerCard from './components/PlayerCard.vue'

// Assumption: Non-player data may be stored in this file.
import playerData from './assets/data.json'

export default {
  name: 'app',
  data () {
    return {
      playerData
    }
  },
  components: {
    PlayerCard
  }
}
</script>

<style lang="scss">
  @import 'scss/custom.scss';
</style>
