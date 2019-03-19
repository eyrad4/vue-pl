<template>
  <div class="container">
    <app-loading v-if="!allMatches"></app-loading>
    <app-match
       v-if="liveMatches"
      v-for="match in liveMatches.matches"
      :match="match"
      :key="match.id"
    ></app-match>
  </div>
</template>

<script>
import SingleMatch from '../../components/match/SingleMatch'
import { mapState } from 'vuex'
import { setInterval } from 'timers';
export default {
  components: {
    'app-match': SingleMatch
  },
  computed: {
    ...mapState({
      liveMatches: 'liveMatches',
    })
  },
  data() {
    return {
      liveResult: null
    }
  },
  created() {
    this.getLiveMatches(); 
  },
  beforeDestroy() {
    clearInterval(this.liveResult)
  },
  methods: {
    getLiveMatches() {
      this.liveResult = setInterval(() => {
        this.$store.dispatch('liveMatches')
      }, 5 * 60 * 1000)
      
    }
  }
}
</script>