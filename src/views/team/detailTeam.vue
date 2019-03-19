<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
          <app-short-team-info
            :team="teamSelected"
          ></app-short-team-info>
      </div>
      <div class="column is-9">
        <app-tabs>
      <app-tab name="Info" :selected="true">
        <table class="table is-fullwidth">
          <tr>
            <td>Full name</td>
            <td>{{ teamSelected.name }}</td>
          </tr>
          <tr>
            <td>Club colors</td>
            <td>{{ teamSelected.clubColors }}</td>
          </tr>
          <tr>
            <td>Count of players</td>
            <td>{{ players.length }}</td>
          </tr>
          <tr>
            <td>Count of coach team</td>
            <td>{{ coaches.length }}</td>
          </tr>
           <tr>
            <td>Total team</td>
            <td>{{ teamSelected.squad.length }}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{{ teamSelected.address }}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{{ teamSelected.phone }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{ teamSelected.email }}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>{{ teamSelected.website }}</td>
          </tr>
        </table>
      </app-tab>  
      <app-tab name="Matches">
        Matches
      </app-tab>
      <app-tab name="Players">
       <table class="table is-fullwidth">
         <thead>
          <tr>
            <th><abbr title="Name">Name</abbr></th>
            <th><abbr title="Nationality">Nationality</abbr></th>
            <th><abbr title="Birth">Birth</abbr></th>
            <th><abbr title="Position">Position</abbr></th>
            <th><abbr title="Shirt number">Shirt number</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="player in players"
            :key="player.id"
          >
            <td>{{ player.name }}</td>
            <td>{{ player.nationality }}</td>
            <td>{{ birth(player.dateOfBirth) }}</td>
            <td>{{ player.position }}</td>
            <td>{{ player.shirtNumber }}</td>
          </tr>
        </tbody>
       </table>
      </app-tab>
      <app-tab name="Coach team">
        <table class="table is-fullwidth">
         <thead>
          <tr>
            <th><abbr title="Name">Name</abbr></th>
            <th><abbr title="Nationality">Nationality</abbr></th>
            <th><abbr title="Birth">Birth</abbr></th>
            <th><abbr title="Role">Role</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="coach in coaches"
            :key="coach.id"
          >
            <td>{{ coach.name }}</td>
            <td>{{ coach.nationality }}</td>
            <td>{{ birth(coach.dateOfBirth) }}</td>
            <td>{{ coach.role }}</td>
          </tr>
        </tbody>
       </table>
      </app-tab>
    </app-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import ShortTeamInfo from '../../components/team/shortTeamInfo';
import { mapState } from 'vuex'
export default {
  components: {
    'app-short-team-info': ShortTeamInfo
  },
  computed: {
    ...mapState({
      teamSelected: 'teamSelected'
    }),
    players() {
      return this.teamSelected.squad.filter((team) => team.role === 'PLAYER')
    },
    coaches() {
      return this.teamSelected.squad.filter((team) => (team.role === 'COACH' || team.role === 'ASSISTANT_COACH'))
    }
  },
  mounted() {
    if (this.teamSelected !== null && this.teamSelected.id != this.$route.params.id) {
      //this.$store.dispatch('teamSelected', this.team.team.id)
    }
  },
  methods: {
    birth(date) {
      const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      const birthDate = new Date(date);

      const day = birthDate.getDate();
      const monthIndex = birthDate.getMonth();
      const year = birthDate.getFullYear();

      return `${day} ${monthNames[monthIndex]} ${year}`
    }
  }
}
</script>

