<template>
  <tr @click="teamWasSelected" :class="{'is-selected': teamSelected === team.team.id}">
    <th>{{ team.position }}</th>
    <td>
      <router-link :to="{ name: 'DetailTeam', params: { id: team.team.id } }">
        <span class="team-logo"><img :src="team.team.crestUrl" alt="" /></span>
        {{ team.team.name }}
      </router-link>
    </td>
    <td>{{ team.playedGames }}</td>
    <td>{{ team.won }}</td>
    <td>{{ team.draw }}</td>
    <td>{{ team.lost }}</td>
    <td>{{ team.goalsFor }}</td>
    <td>{{ team.goalsAgainst }}</td>
    <td>{{ team.goalDifference }}</td>
    <td>{{ team.points }}</td>
    <td><small>{{ seasonResultInfo(team.position) }}</small></td>
    <td></td>
  </tr>
</template>

<script>
export default {
  props: {
    team: {
      required: true,
      type: Object
    }
  },
  computed: {
     teamSelected() {
       return (this.$store.state.teamSelected !== null) ? this.$store.state.teamSelected.id : '' 
     }
  },
  methods: {
    teamWasSelected() {
      this.$store.dispatch('teamSelected', this.team.team.id)
    },
    seasonResultInfo(position) {
      if (position >= 1 && position <= 3) {
        return 'Qualification for the Champions League group stage'
      } else if (position == 4) {
        return 'Qualification for the Champions League play-off round'
      } else if (position >= 5 && position <= 6) {
        return 'Qualification for the Europa League group stage'
      } else if (position == 7) {
        return 'Qualification for the Europa League third qualifying round'
      } else if (position == 18 || position == 19 || position == 20) {
        return 'Relegation to the Football League Championship'
      }
    }
  }
}
</script>

<style scoped>
  .team-logo img{
    padding-right: 5px;
    height: 20px;
  }
  small{
    font-size: 0.7em
  }
</style>

