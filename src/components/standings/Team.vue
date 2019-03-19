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
    }
  }
}
</script>

<style scoped>
  .team-logo img{
    padding-right: 5px;
    height: 20px;
  }
</style>

