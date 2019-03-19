<template>
  <div class="container">
    <app-tabs>
      <app-tab name="Next tours" :selected="true">
         <app-match-day 
          v-for="day in nextMatchesDays"
          :key="day"
          :day="day" 
          >
            <app-match
              v-for="match in matchesInCurrentDay(day)"
              :match="match"
              :key="match.id"
            ></app-match>
          </app-match-day>
      </app-tab>
      <app-tab name="Finished tours">
         <app-match-day 
          v-for="day in finishedMatchesDays"
          :key="day"
          :day="day" 
          >
            <app-match
              v-for="match in matchesInCurrentDay(day)"
              :match="match"
              :key="match.id"
            ></app-match>
          </app-match-day>
      </app-tab>
    </app-tabs>
  </div>
</template>

<script>
import SingleMatch from '../../components/match/SingleMatch'
import MatchDay from '../../components/match/MatchDay'
import { mapState } from 'vuex'
export default {
  components: {
    'app-match': SingleMatch,
    'app-match-day': MatchDay
  },
  computed: {
    ...mapState({
      allMatches: 'allMatches',
    }),
    finishedMatchesDays() {
      return [...new Set(
              this.allMatches.matches
              .filter((match) => match.status === 'FINISHED')
              .map((day) => day.matchday)
              )];
    },
    nextMatchesDays() {
       return [...new Set(
              this.allMatches.matches
              .filter((match) => match.status === 'SCHEDULED')
              .map((day) => day.matchday)
              )].sort();
    }
  },
  methods: {
    matchesInCurrentDay(day) {
      return this.allMatches.matches.filter((match) => match.matchday === day)
    },
    nextMatches() {
      return this.allMatches.matches.filter((match) => match.status === 'SCHEDULED')
    }
  }
}
</script>




