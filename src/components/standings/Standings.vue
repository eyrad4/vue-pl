<template>
  <div>
    <table class="table">
        <thead>
          <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th>Team</th>
            <th><abbr title="Played">Pld</abbr></th>
            <th><abbr title="Won">W</abbr></th>
            <th><abbr title="Drawn">D</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
            <th>Qualification or relegation</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th>Team</th>
            <th><abbr title="Played">Pld</abbr></th>
            <th><abbr title="Won">W</abbr></th>
            <th><abbr title="Drawn">D</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
            <th>Qualification or relegation</th>
          </tr>
        </tfoot>
        <tbody>
          <tr 
            v-for="(team, index) in teams" :key="team.team.id"
            @click="selectedTeam(index)"
          >
            <th>{{ team.position }}</th>
            <td>
              <a href="">
                <span class="team-logo"><img :src="team.team.crestUrl" alt="" /></span>
                {{ team.team.name }}
                </a>
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
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
 props: {
   teams: {
     type: Array
   }
 },
 data() {
   return {     
   }
 },
 methods: {
  selectedTeam(event) {
    console.log(this)
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


