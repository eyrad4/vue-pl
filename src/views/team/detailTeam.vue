<template>
  <div class="container">
    <app-loading v-if="!teamSelected || !allMatches"></app-loading>
    <template v-if="teamSelected && allMatches">
      <h1 class="title is-1 has-text-centered">{{ teamSelected.name }}</h1>
      <div class="columns">
        <div class="column">
          <app-match
            :match="nextTeamMatch"
          ></app-match>
        </div>
        <div class="column">
          <app-match
            :match="previousTeamMatch"
          ></app-match>
        </div>
      </div>
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
              <app-match-day 
                v-for="day in teamSelectedMatches"
                :key="day.id"
                :day="day.matchday" 
                >
                  <app-match
                    v-for="match in matchesInCurrentDay(day.matchday)"
                    :match="match"
                    :key="match.id"
                  ></app-match>
                </app-match-day>
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
                  <td>{{ dateFormat(player.dateOfBirth) }}</td>
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
                  <td>{{ dateFormat(coach.dateOfBirth) }}</td>
                  <td>{{ coach.role }}</td>
                </tr>
              </tbody>
            </table>
            </app-tab>
          </app-tabs>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import ShortTeamInfo from '../../components/team/shortTeamInfo';
import SingleMatch from '../../components/match/SingleMatch'
import MatchDay from '../../components/match/MatchDay'
import dateFormat from '../../mixins/dateFormat/dateFromat.js'
import { mapState } from 'vuex'
export default {
  components: {
    'app-short-team-info': ShortTeamInfo,
    'app-match': SingleMatch,
    'app-match-day': MatchDay
  },
  mixins: [ dateFormat ],
  computed: {
    ...mapState({
      teamSelected: 'teamSelected',
      allMatches: 'allMatches'
    }),
    players() {
      return this.teamSelected.squad.filter((team) => team.role === 'PLAYER')
    },
    coaches() {
      return this.teamSelected.squad.filter((team) => (team.role === 'COACH' || team.role === 'ASSISTANT_COACH'))
    },
    teamSelectedMatches() {
      const teamId = Number(this.$route.params.id)
      return this.allMatches.matches.filter((match) => {
        return (match.awayTeam.id == teamId || match.homeTeam.id == teamId)
      })
    },
    nextTeamMatch() {
      const nextMatch = this.teamSelectedMatches.filter((match) => match.status == 'SCHEDULED')
      return (nextMatch.length > 0) ? nextMatch[0] : null
    },
    previousTeamMatch() {
      const lastMatch = this.teamSelectedMatches.filter((match) => match.status == 'FINISHED');
      return (lastMatch.length > 0) ? lastMatch[lastMatch.length - 1] : null
    }
  },
  methods: {
    matchesInCurrentDay(day) {
      return this.teamSelectedMatches.filter((match) => match.matchday === day)
    }
  },
  created() {
    if (!this.teamSelected) {
      this.$store.dispatch('teamSelected', this.$route.params.id)
    }
    if (!this.allMatches) {
      this.$nextTick(() => {
        this.$store.dispatch('allMatches')
      })
    }
  }
}
</script>

