<template>
  <b-card class="player-card">
    <div class="player-card-header" slot="header" :style="teamBg">
      
      <b-container class="bv-player-title-row">
          <b-row>
              <b-col class="col-5 order-2"><h1 class="player-name"><span class="player-firstname">{{firstname}}</span><br /><span class="player-lastname">{{lastname}}</span></h1></b-col>
              <b-col class="col-4 order-3"><img class="player-team" :src="teamIcon" alt="Player team" /></b-col>
              <b-col class="col-3 order-1"><h3 class="player-number">{{playerNumber}}</h3></b-col>
              <div class="w-100"></div>
          </b-row>
        </b-container>
    </div>

      <b-card-body>
        <b-container class="bv-playerstats-row">
          <b-row fluid>
            <b-col>
              <b-img :src="imageUrl" fluid alt="Player profile image" />
            </b-col>
            <b-col>
              <b-row class="player-stat-row"><span class="player-stat-label">Team:</span> {{team}}</b-row>
              <b-row class="player-stat-row"><span class="player-stat-label">Position:</span> {{position}}</b-row>
            </b-col>
          </b-row>
        </b-container>

        <br />

        <b-tabs>
          <b-tab title="Player Bio" active>
            <br />
            <p class="card-text">
              {{bio}}
            </p>
          </b-tab>
          <b-tab title="Stats" >
            <br />
            <table class="table table-striped">
              <thead>
                <tr>
                  <th data-toggle="tooltip">Game</th>
                  <th data-toggle="tooltip">Throws</th>
                  <th data-toggle="tooltip">Kicks</th>
                  <th data-toggle="tooltip">Backflips</th>
                </tr>
              </thead>
              <tbody>
                  <tr scope="row" v-for="game in games" :key="game.round">
                      <th>{{game.game}}</th>
                      <td>{{game.throws}}</td>
                      <td>{{game.kicks}}</td>
                      <td>{{game.backflips}}</td>
                  </tr>
              </tbody>
            </table>
          </b-tab>
        </b-tabs>

        <br />

        <b-button class="w-100" 
          variant="primary">View full profile</b-button>

      </b-card-body>
  </b-card>
</template>

<script>
import Vue from 'vue'
import teams from '../assets/teams.js'
const imagePath = '/static/images/'

export default Vue.extend({
  name: 'PlayerCard',
  props: {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    team: { type: String, required: true },
    playerNumber: { type: Number, required: true },
    position: { type: String, required: true },
    bio: { type: String, required: true },
    imageUrl: { type: String, required: true },
    games: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      teamIcon: this.getteamImage(),
      teamBg: {
        background: this.getteamBg()
      }
    }
  },
  methods: {
    getteamId: function() {
      return this.team.replace(/\s/g, '')
    },
    // Map team name in JSON to the image asset
    getteamImage: function() {
      return `${imagePath}${teams[this.getteamId()].logo}`
    },
    getteamBg: function() {
      return teams[this.getteamId()].bg
    }
  }
})
</script>

<style lang="scss" scoped>
  .player-card {
    min-width: 30em; 
    max-width: 30em;
    margin: 1em 1em;
  }
  .player-card-header {
    min-height: 10em;
    padding: .75em 1.25em;  
  }
  .player-name {
    font-size: 1.8rem;
    padding: 1em 0;
    white-space: nowrap;
  }
  .player-number {
    font-size: 3.8em;
    padding: 0.5em 0;
  }
  .player-team {
    padding: 1em 0;
    width:100%;
  }
  .player-stat-row {
    margin: 0.5em 0;
  }
  .player-stat-label {
    font-weight: bold;
    padding-right: 0.4em;
  }
</style>
