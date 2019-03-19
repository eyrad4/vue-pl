<template>
<div>
  <app-loading v-if="!team && team !== null"></app-loading>
  <div class="team-short-info" v-if="team">
    <figure class="image">
      <img :src="team.crestUrl">
    </figure>
    <table class="table is-fullwidth">
      <tr>
        <td>Name</td>
        <td>{{ team.shortName }}</td>
      </tr>
      <tr>
        <td>Founded</td>
        <td>{{ team.founded }}</td>
      </tr>
      <tr>
        <td>Stadium</td>
        <td>{{ team.venue }}</td>
      </tr>
      <tr>
        <td>Coach</td>
        <td>{{ coach }}</td>
      </tr>
    </table>
    <router-link 
      class="button is-primary" 
      :to="{ name: 'DetailTeam', params: { id: team.id } }"
      v-if="!$route.params.id"
    >Detail info</router-link>
  </div>
</div>
</template>

<script>
export default {
  props: {
    team: {
      type: Object
    }
  },
  computed: {
    coach() {
      return this.team.squad.filter((person) => {
        return person.role == 'COACH'
      }).map((coach) => {
        return coach.name
      }).shift();
    }
  }
}
</script>

