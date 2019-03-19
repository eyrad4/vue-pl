<template>
  <div class="columns">
    <div class="column has-text-right">
      <span class="team-name title is-5">{{ match.homeTeam.name }}</span>
    </div>
      <div class="column is-2 has-text-centered">
        <span 
          :class="checkWinner(match.score.winner, 'home')"
          class="score title is-5"
        >{{ homeTeamScore}}</span>
        <span 
          :class="checkWinner(match.score.winner, 'away')"
          class="score title is-5"
        >{{ awayTeamScore }}</span>
        <div class="match-date subtitle is-6">{{ dateFormat(match.utcDate) }}</div>
      </div>
      <div class="column has-text-left">
        <span class="team-name title is-5">{{ match.awayTeam.name }}</span>
      </div>
  </div>
</template>

<script>
import dateFormat from '../../mixins/dateFormat/dateFromat.js'
export default {
  props: {
    match: {
      required: true,
      type: Object
    }
  },
  mixins: [ dateFormat ],
  computed: {
    homeTeamScore() {
      return (this.match.score.fullTime.homeTeam !== null) ? this.match.score.fullTime.homeTeam : '-'
    },
    awayTeamScore() {
      return (this.match.score.fullTime.awayTeam !== null) ? this.match.score.fullTime.awayTeam : '-'
    }    
  },
  methods: {
    checkWinner(winner, team) {
      //TODO REFACTOR
      if (this.match.status == 'FINISHED') {
        if (team === 'home') {
          return (this.match.score.winner == 'HOME_TEAM') ? 'has-background-success has-text-white' : 'has-background-danger has-text-white'
        } else if (team === 'away') {
          return (this.match.score.winner == 'AWAY_TEAM') ? 'has-background-success has-text-white' : 'has-background-danger has-text-white'
        }
      }
    }
  }
}
</script>

<style scoped>
  .score{
    background-color: white;
    border-radius: 6px;
    -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    display: inline-block;;
    padding: 0.3rem 0.8rem;
  }
  .score.title{
    margin-bottom: 0;
  }
  .score:first-child{
    margin-right: 0.5rem;
  }
  .team-name{
    margin-top: 0.3rem;
    display: inline-block;
  }
  .match-date{
    margin-top: 0.5rem !important;
    font-size: 12px !important;
  }
</style>

