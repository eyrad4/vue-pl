<template>
  <div class="container">
    <div class="columns">
      <div class="column is-9">
        <app-standings 
          :teams="standings"
        ></app-standings>
      </div>
      <div class="column is-3">
        <app-short-team-info
          :team="teamSelected"
        ></app-short-team-info>
      </div>
    </div>
  </div>
</template>

<script>
//import { HTTP } from '../common/api.service'
import { mapState } from "vuex";
import Standings from '../components/standings/Standings';
import ShortTeamInfo from '../components/team/shortTeamInfo';
export default {
  components: {
    'app-standings': Standings,
    'app-short-team-info': ShortTeamInfo
  },
  data() {
    return {
      
    }       
  },
  created() {
    //this.$store.dispatch('getStandings')
  },
  computed: {
    ...mapState({
      standings: 'standings',
      teamSelected: 'teamSelected'
    })
  }
}
</script>

