<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-9">
          <app-standings :teams="standings"></app-standings>
        </div>
        <div class="column is-3"></div>
      </div>
      
    </div>
  </section>
</template>

<script>
import { HTTP } from '../common/api.service'
import { mapState } from "vuex";
import Standings from '../components/standings/Standings';
export default {
  components: {
    'app-standings': Standings
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
      standings: 'standings'
    })
  }
}
</script>

