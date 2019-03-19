<template>
  <div class="columns">
      <div class="column has-text-right">
        <span class="team-name title is-4">{{ match.homeTeam.name }}</span>
      </div>
        <div class="column is-2 has-text-centered">
          <span class="score title is-5">{{ homeTeamScore}}</span>
          <span class="score title is-5">{{ awayTeamScore }}</span>
        </div>
      <div class="column has-text-left">
        <span class="team-name title is-4">{{ match.awayTeam.name }}</span>
        
      </div>
    </div>
</template>

<script>
export default {
  props: {
    match: {
      required: true,
      type: Object
    }
  },
  computed: {
    homeTeamScore() {
      return (this.match.score.fullTime.homeTeam !== null) ? this.match.score.fullTime.homeTeam : '-'
    },
    awayTeamScore() {
      return (this.match.score.fullTime.awayTeam !== null) ? this.match.score.fullTime.awayTeam : '-'
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
    padding: 0.5rem 1rem;
  }
  .score.title{
    margin-bottom: 0;
  }
  .score:first-child{
    margin-right: 1rem;
  }
</style>

