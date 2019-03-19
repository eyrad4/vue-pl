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
              v-for="match in nextMatches()"
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
export default {
  components: {
    'app-match': SingleMatch,
    'app-match-day': MatchDay
  },
  computed: {
    finishedMatchesDays() {
      return [...new Set(
              this.matches.matches
              .filter((match) => match.status === 'FINISHED')
              .map((day) => day.matchday)
              )];
    },
    nextMatchesDays() {
       return [...new Set(
              this.matches.matches
              .filter((match) => match.status === 'SCHEDULED')
              .map((day) => day.matchday)
              )];
    }
  },
  methods: {
    matchesInCurrentDay(day) {
      return this.matches.matches.filter((match) => match.matchday === day)
    },
    nextMatches() {
      return this.matches.matches.filter((match) => match.status === 'SCHEDULED')
    }
  },
  data() {
    return {
      matches: {
    "count": 380,
    "filters": {},
    "competition": {
        "id": 2021,
        "area": {
            "id": 2072,
            "name": "England"
        },
        "name": "Premier League",
        "code": "PL",
        "plan": "TIER_ONE",
        "lastUpdated": "2019-03-18T15:55:10Z"
    },
    "matches": [
        {
            "id": 233028,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-10T19:00:00Z",
            "status": "FINISHED",
            "matchday": 1,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "awayTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233026,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-11T11:30:00Z",
            "status": "FINISHED",
            "matchday": 1,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "awayTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233024,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-11T14:00:00Z",
            "status": "FINISHED",
            "matchday": 1,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "awayTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11446,
                    "name": "Robert Jones",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233029,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-11T14:00:00Z",
            "status": "FINISHED",
            "matchday": 1,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "awayTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11552,
                    "name": "Peter Kirkup",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233031,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-11T14:00:00Z",
            "status": "FINISHED",
            "matchday": 1,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "awayTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233032,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-11T14:00:00Z",
            "status": "FINISHED",
            "matchday": 1,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "awayTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11521,
                    "name": "Mark Scholes",
                    "nationality": null
                },
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233023,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-11T16:30:00Z",
            "status": "FINISHED",
            "matchday": 1,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "awayTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233025,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-12T12:30:00Z",
            "status": "FINISHED",
            "matchday": 1,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "awayTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233030,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-12T12:30:00Z",
            "status": "FINISHED",
            "matchday": 1,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "referees": [
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233027,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-12T15:00:00Z",
            "status": "FINISHED",
            "matchday": 1,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "awayTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233039,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-18T11:30:00Z",
            "status": "FINISHED",
            "matchday": 2,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "awayTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11437,
                    "name": "Andy Garratt",
                    "nationality": null
                },
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233035,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-18T14:00:00Z",
            "status": "FINISHED",
            "matchday": 2,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "awayTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233036,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-18T14:00:00Z",
            "status": "FINISHED",
            "matchday": 2,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "awayTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "referees": [
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11505,
                    "name": "Derek Eaton",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233037,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-18T14:00:00Z",
            "status": "FINISHED",
            "matchday": 2,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "awayTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11521,
                    "name": "Mark Scholes",
                    "nationality": null
                },
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233040,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-18T14:00:00Z",
            "status": "FINISHED",
            "matchday": 2,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "awayTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "referees": [
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                },
                {
                    "id": 11570,
                    "name": "Harry Lennard",
                    "nationality": null
                },
                {
                    "id": 11424,
                    "name": "Neil Davies",
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233034,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-18T16:30:00Z",
            "status": "FINISHED",
            "matchday": 2,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "awayTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233033,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-19T12:30:00Z",
            "status": "FINISHED",
            "matchday": 2,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 6,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "awayTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233038,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-19T12:30:00Z",
            "status": "FINISHED",
            "matchday": 2,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "awayTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233042,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-19T15:00:00Z",
            "status": "FINISHED",
            "matchday": 2,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "awayTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233041,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-20T19:00:00Z",
            "status": "FINISHED",
            "matchday": 2,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233043,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-25T11:30:00Z",
            "status": "FINISHED",
            "matchday": 3,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "awayTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233047,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-25T14:00:00Z",
            "status": "FINISHED",
            "matchday": 3,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "awayTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "referees": [
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233049,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-25T14:00:00Z",
            "status": "FINISHED",
            "matchday": 3,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "awayTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11287,
                    "name": "Oliver Langford",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233050,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-25T14:00:00Z",
            "status": "FINISHED",
            "matchday": 3,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "awayTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11570,
                    "name": "Harry Lennard",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233052,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-25T14:00:00Z",
            "status": "FINISHED",
            "matchday": 3,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "awayTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "referees": [
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                },
                {
                    "id": 11437,
                    "name": "Andy Garratt",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233045,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-25T16:30:00Z",
            "status": "FINISHED",
            "matchday": 3,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "awayTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233051,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-26T12:30:00Z",
            "status": "FINISHED",
            "matchday": 3,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "awayTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233044,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-26T15:00:00Z",
            "status": "FINISHED",
            "matchday": 3,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 3,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "referees": [
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                },
                {
                    "id": 11552,
                    "name": "Peter Kirkup",
                    "nationality": null
                },
                {
                    "id": 14629,
                    "name": "Matthew Perry",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233046,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-26T15:00:00Z",
            "status": "FINISHED",
            "matchday": 3,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "awayTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233048,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-08-27T19:00:00Z",
            "status": "FINISHED",
            "matchday": 3,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "awayTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233056,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-01T11:30:00Z",
            "status": "FINISHED",
            "matchday": 4,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233054,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-01T14:00:00Z",
            "status": "FINISHED",
            "matchday": 4,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "awayTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "referees": [
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233055,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-01T14:00:00Z",
            "status": "FINISHED",
            "matchday": 4,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "awayTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "referees": [
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11521,
                    "name": "Mark Scholes",
                    "nationality": null
                },
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233059,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-01T14:00:00Z",
            "status": "FINISHED",
            "matchday": 4,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "awayTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11445,
                    "name": "Sian Massey-Ellis",
                    "nationality": null
                },
                {
                    "id": 11290,
                    "name": "Steve Martin",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233060,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-01T14:00:00Z",
            "status": "FINISHED",
            "matchday": 4,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "awayTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11552,
                    "name": "Peter Kirkup",
                    "nationality": null
                },
                {
                    "id": 11423,
                    "name": "Andy Madley",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233061,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-01T14:00:00Z",
            "status": "FINISHED",
            "matchday": 4,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "awayTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "referees": [
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11437,
                    "name": "Andy Garratt",
                    "nationality": null
                },
                {
                    "id": 11378,
                    "name": "Tony Harrington",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233053,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-01T16:30:00Z",
            "status": "FINISHED",
            "matchday": 4,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "awayTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11505,
                    "name": "Derek Eaton",
                    "nationality": null
                },
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233058,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-02T12:30:00Z",
            "status": "FINISHED",
            "matchday": 4,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "awayTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233057,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-02T15:00:00Z",
            "status": "FINISHED",
            "matchday": 4,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "awayTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11570,
                    "name": "Harry Lennard",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233062,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-02T15:00:00Z",
            "status": "FINISHED",
            "matchday": 4,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "awayTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233067,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-15T11:30:00Z",
            "status": "FINISHED",
            "matchday": 5,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233064,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-15T14:00:00Z",
            "status": "FINISHED",
            "matchday": 5,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "awayTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "referees": [
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233065,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-15T14:00:00Z",
            "status": "FINISHED",
            "matchday": 5,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "awayTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "referees": [
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233066,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-15T14:00:00Z",
            "status": "FINISHED",
            "matchday": 5,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "awayTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11570,
                    "name": "Harry Lennard",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11396,
                    "name": "Tim Robinson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233069,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-15T14:00:00Z",
            "status": "FINISHED",
            "matchday": 5,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "awayTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "referees": [
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11424,
                    "name": "Neil Davies",
                    "nationality": null
                },
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233072,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-15T14:00:00Z",
            "status": "FINISHED",
            "matchday": 5,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 3,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "awayTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233071,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-15T16:30:00Z",
            "status": "FINISHED",
            "matchday": 5,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "awayTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233063,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-16T12:30:00Z",
            "status": "FINISHED",
            "matchday": 5,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233068,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-16T15:00:00Z",
            "status": "FINISHED",
            "matchday": 5,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "awayTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11552,
                    "name": "Peter Kirkup",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233070,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-17T19:00:00Z",
            "status": "FINISHED",
            "matchday": 5,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "awayTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233073,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-22T11:30:00Z",
            "status": "FINISHED",
            "matchday": 6,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "awayTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233074,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-22T14:00:00Z",
            "status": "FINISHED",
            "matchday": 6,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 3,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "awayTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233076,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-22T14:00:00Z",
            "status": "FINISHED",
            "matchday": 6,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "awayTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233077,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-22T14:00:00Z",
            "status": "FINISHED",
            "matchday": 6,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "awayTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "referees": [
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                },
                {
                    "id": 11552,
                    "name": "Peter Kirkup",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233078,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-22T14:00:00Z",
            "status": "FINISHED",
            "matchday": 6,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "awayTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11287,
                    "name": "Oliver Langford",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233079,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-22T14:00:00Z",
            "status": "FINISHED",
            "matchday": 6,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 5
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 3
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "awayTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11469,
                    "name": "Darren England",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233081,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-22T14:00:00Z",
            "status": "FINISHED",
            "matchday": 6,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "awayTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 9382,
                    "name": "Gavin Ward",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233082,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-22T16:30:00Z",
            "status": "FINISHED",
            "matchday": 6,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "awayTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 98555,
                    "name": null,
                    "nationality": null
                },
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233080,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-23T12:30:00Z",
            "status": "FINISHED",
            "matchday": 6,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "awayTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11521,
                    "name": "Mark Scholes",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233075,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-23T15:00:00Z",
            "status": "FINISHED",
            "matchday": 6,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "awayTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11570,
                    "name": "Harry Lennard",
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233091,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-29T11:30:00Z",
            "status": "FINISHED",
            "matchday": 7,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "awayTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233083,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-29T14:00:00Z",
            "status": "FINISHED",
            "matchday": 7,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "awayTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "referees": [
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11552,
                    "name": "Peter Kirkup",
                    "nationality": null
                },
                {
                    "id": 11446,
                    "name": "Robert Jones",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233084,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-29T14:00:00Z",
            "status": "FINISHED",
            "matchday": 7,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "awayTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "referees": [
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11287,
                    "name": "Oliver Langford",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233085,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-29T14:00:00Z",
            "status": "FINISHED",
            "matchday": 7,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "awayTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "referees": [
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233086,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-29T14:00:00Z",
            "status": "FINISHED",
            "matchday": 7,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "awayTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11424,
                    "name": "Neil Davies",
                    "nationality": null
                },
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233088,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-29T14:00:00Z",
            "status": "FINISHED",
            "matchday": 7,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "awayTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "referees": [
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11437,
                    "name": "Andy Garratt",
                    "nationality": null
                },
                {
                    "id": 11472,
                    "name": "Jeremy Simpson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233089,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-29T14:00:00Z",
            "status": "FINISHED",
            "matchday": 7,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "awayTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11309,
                    "name": "Peter Bankes",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233087,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-29T16:30:00Z",
            "status": "FINISHED",
            "matchday": 7,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233090,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-09-30T15:00:00Z",
            "status": "FINISHED",
            "matchday": 7,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233092,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-01T19:00:00Z",
            "status": "FINISHED",
            "matchday": 7,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "awayTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11521,
                    "name": "Mark Scholes",
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233101,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-05T19:00:00Z",
            "status": "FINISHED",
            "matchday": 8,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "awayTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233095,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-06T14:00:00Z",
            "status": "FINISHED",
            "matchday": 8,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "awayTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233097,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-06T14:00:00Z",
            "status": "FINISHED",
            "matchday": 8,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "awayTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233098,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-06T14:00:00Z",
            "status": "FINISHED",
            "matchday": 8,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "awayTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 11445,
                    "name": "Sian Massey-Ellis",
                    "nationality": null
                },
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 98555,
                    "name": null,
                    "nationality": null
                }
            ]
        },
        {
            "id": 233100,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-06T14:00:00Z",
            "status": "FINISHED",
            "matchday": 8,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "awayTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233102,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-06T14:00:00Z",
            "status": "FINISHED",
            "matchday": 8,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 4
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 3
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "awayTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233096,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-06T16:30:00Z",
            "status": "FINISHED",
            "matchday": 8,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "awayTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233093,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-07T11:00:00Z",
            "status": "FINISHED",
            "matchday": 8,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 5
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "awayTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233099,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-07T13:15:00Z",
            "status": "FINISHED",
            "matchday": 8,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "awayTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233094,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-07T15:30:00Z",
            "status": "FINISHED",
            "matchday": 8,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "awayTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233107,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-20T11:30:00Z",
            "status": "FINISHED",
            "matchday": 9,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "awayTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233103,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-20T14:00:00Z",
            "status": "FINISHED",
            "matchday": 9,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "awayTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "referees": [
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11424,
                    "name": "Neil Davies",
                    "nationality": null
                },
                {
                    "id": 11327,
                    "name": "John Brooks",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233104,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-20T14:00:00Z",
            "status": "FINISHED",
            "matchday": 9,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 5,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233105,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-20T14:00:00Z",
            "status": "FINISHED",
            "matchday": 9,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "awayTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11378,
                    "name": "Tony Harrington",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233110,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-20T14:00:00Z",
            "status": "FINISHED",
            "matchday": 9,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "awayTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11505,
                    "name": "Derek Eaton",
                    "nationality": null
                },
                {
                    "id": 11387,
                    "name": "Andrew Davies",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233111,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-20T14:00:00Z",
            "status": "FINISHED",
            "matchday": 9,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "awayTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11552,
                    "name": "Peter Kirkup",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233112,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-20T14:00:00Z",
            "status": "FINISHED",
            "matchday": 9,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "awayTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "referees": [
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11437,
                    "name": "Andy Garratt",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233109,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-20T16:30:00Z",
            "status": "FINISHED",
            "matchday": 9,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233108,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-21T15:00:00Z",
            "status": "FINISHED",
            "matchday": 9,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "awayTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233106,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-22T19:00:00Z",
            "status": "FINISHED",
            "matchday": 9,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "awayTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 11445,
                    "name": "Sian Massey-Ellis",
                    "nationality": null
                },
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233113,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-27T14:00:00Z",
            "status": "FINISHED",
            "matchday": 10,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "awayTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11570,
                    "name": "Harry Lennard",
                    "nationality": null
                },
                {
                    "id": 11469,
                    "name": "Darren England",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233114,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-27T14:00:00Z",
            "status": "FINISHED",
            "matchday": 10,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "awayTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "referees": [
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233119,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-27T14:00:00Z",
            "status": "FINISHED",
            "matchday": 10,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "awayTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 98555,
                    "name": null,
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233121,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-27T14:00:00Z",
            "status": "FINISHED",
            "matchday": 10,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "awayTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233122,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-27T14:00:00Z",
            "status": "FINISHED",
            "matchday": 10,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "awayTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11521,
                    "name": "Mark Scholes",
                    "nationality": null
                },
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233117,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-27T16:30:00Z",
            "status": "FINISHED",
            "matchday": 10,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "awayTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233118,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-28T13:30:00Z",
            "status": "FINISHED",
            "matchday": 10,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 4
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "awayTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233120,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-28T13:30:00Z",
            "status": "FINISHED",
            "matchday": 10,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "awayTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233116,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-28T16:00:00Z",
            "status": "FINISHED",
            "matchday": 10,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "awayTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233115,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-10-29T20:00:00Z",
            "status": "FINISHED",
            "matchday": 10,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "awayTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233132,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-03T12:30:00Z",
            "status": "FINISHED",
            "matchday": 11,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "awayTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233125,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-03T15:00:00Z",
            "status": "FINISHED",
            "matchday": 11,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "awayTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233128,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-03T15:00:00Z",
            "status": "FINISHED",
            "matchday": 11,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "awayTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "referees": [
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                },
                {
                    "id": 11552,
                    "name": "Peter Kirkup",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233130,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-03T15:00:00Z",
            "status": "FINISHED",
            "matchday": 11,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "awayTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "referees": [
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11437,
                    "name": "Andy Garratt",
                    "nationality": null
                },
                {
                    "id": 11423,
                    "name": "Andy Madley",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233131,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-03T15:00:00Z",
            "status": "FINISHED",
            "matchday": 11,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "referees": [
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11505,
                    "name": "Derek Eaton",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233126,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-03T17:30:00Z",
            "status": "FINISHED",
            "matchday": 11,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233123,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-03T19:45:00Z",
            "status": "FINISHED",
            "matchday": 11,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "awayTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11521,
                    "name": "Mark Scholes",
                    "nationality": null
                },
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233124,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-04T15:00:00Z",
            "status": "FINISHED",
            "matchday": 11,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 6,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 4,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "awayTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "referees": [
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11424,
                    "name": "Neil Davies",
                    "nationality": null
                },
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233127,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-04T16:00:00Z",
            "status": "FINISHED",
            "matchday": 11,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "awayTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233129,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-05T20:00:00Z",
            "status": "FINISHED",
            "matchday": 11,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "awayTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233140,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-10T12:30:00Z",
            "status": "FINISHED",
            "matchday": 12,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "awayTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11552,
                    "name": "Peter Kirkup",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233135,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-10T15:00:00Z",
            "status": "FINISHED",
            "matchday": 12,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "awayTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "referees": [
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11437,
                    "name": "Andy Garratt",
                    "nationality": null
                },
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233138,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-10T15:00:00Z",
            "status": "FINISHED",
            "matchday": 12,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233139,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-10T15:00:00Z",
            "status": "FINISHED",
            "matchday": 12,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "awayTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233141,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-10T15:00:00Z",
            "status": "FINISHED",
            "matchday": 12,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "awayTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "referees": [
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11570,
                    "name": "Harry Lennard",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233142,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-10T17:30:00Z",
            "status": "FINISHED",
            "matchday": 12,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "awayTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233133,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-11T12:00:00Z",
            "status": "FINISHED",
            "matchday": 12,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "awayTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233137,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-11T14:15:00Z",
            "status": "FINISHED",
            "matchday": 12,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "awayTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233134,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-11T16:30:00Z",
            "status": "FINISHED",
            "matchday": 12,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "awayTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233136,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-11T16:30:00Z",
            "status": "FINISHED",
            "matchday": 12,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "awayTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "referees": [
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11505,
                    "name": "Derek Eaton",
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233144,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-24T15:00:00Z",
            "status": "FINISHED",
            "matchday": 13,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "awayTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11756,
                    "name": "Stephen Bennett",
                    "nationality": null
                },
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233146,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-24T15:00:00Z",
            "status": "FINISHED",
            "matchday": 13,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "awayTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11521,
                    "name": "Mark Scholes",
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233147,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-24T15:00:00Z",
            "status": "FINISHED",
            "matchday": 13,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "awayTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "referees": [
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                },
                {
                    "id": 11570,
                    "name": "Harry Lennard",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233149,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-24T15:00:00Z",
            "status": "FINISHED",
            "matchday": 13,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 4
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 3
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "awayTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11519,
                    "name": "Keith Stroud",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233150,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-24T15:00:00Z",
            "status": "FINISHED",
            "matchday": 13,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "awayTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 98555,
                    "name": null,
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233151,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-24T15:00:00Z",
            "status": "FINISHED",
            "matchday": 13,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233145,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-24T17:30:00Z",
            "status": "FINISHED",
            "matchday": 13,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "awayTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233152,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-25T13:30:00Z",
            "status": "FINISHED",
            "matchday": 13,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "awayTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233143,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-25T16:00:00Z",
            "status": "FINISHED",
            "matchday": 13,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "awayTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233148,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-26T20:30:00Z",
            "status": "FINISHED",
            "matchday": 13,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "awayTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233160,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-11-30T20:00:00Z",
            "status": "FINISHED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "awayTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233154,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-01T15:00:00Z",
            "status": "FINISHED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "awayTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "referees": [
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11505,
                    "name": "Derek Eaton",
                    "nationality": null
                },
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233155,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-01T15:00:00Z",
            "status": "FINISHED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "awayTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11521,
                    "name": "Mark Scholes",
                    "nationality": null
                },
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233158,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-01T15:00:00Z",
            "status": "FINISHED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "awayTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "referees": [
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11424,
                    "name": "Neil Davies",
                    "nationality": null
                },
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233159,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-01T15:00:00Z",
            "status": "FINISHED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "awayTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233162,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-01T15:00:00Z",
            "status": "FINISHED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "referees": [
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                },
                {
                    "id": 11437,
                    "name": "Andy Garratt",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233161,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-01T17:30:00Z",
            "status": "FINISHED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "awayTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233157,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-02T12:00:00Z",
            "status": "FINISHED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "awayTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233156,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-02T14:05:00Z",
            "status": "FINISHED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "awayTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233153,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-02T16:15:00Z",
            "status": "FINISHED",
            "matchday": 14,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "awayTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 98555,
                    "name": null,
                    "nationality": null
                },
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233167,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-04T19:45:00Z",
            "status": "FINISHED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "awayTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "referees": [
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11424,
                    "name": "Neil Davies",
                    "nationality": null
                },
                {
                    "id": 11327,
                    "name": "John Brooks",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233168,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-04T19:45:00Z",
            "status": "FINISHED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 3,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "awayTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233170,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-04T19:45:00Z",
            "status": "FINISHED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "awayTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "referees": [
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11521,
                    "name": "Mark Scholes",
                    "nationality": null
                },
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233169,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-04T20:00:00Z",
            "status": "FINISHED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "awayTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233163,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-05T19:45:00Z",
            "status": "FINISHED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "awayTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233164,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-05T19:45:00Z",
            "status": "FINISHED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "awayTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "referees": [
                {
                    "id": 11556,
                    "name": "David Coote",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233166,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-05T19:45:00Z",
            "status": "FINISHED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 3
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "referees": [
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11505,
                    "name": "Derek Eaton",
                    "nationality": null
                },
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233172,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-05T19:45:00Z",
            "status": "FINISHED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "awayTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "referees": [
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11423,
                    "name": "Andy Madley",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233165,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-05T20:00:00Z",
            "status": "FINISHED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "awayTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "referees": [
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233171,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-05T20:00:00Z",
            "status": "FINISHED",
            "matchday": 15,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "awayTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233182,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-08T12:30:00Z",
            "status": "FINISHED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 4
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "referees": [
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11531,
                    "name": "Marc Perry",
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233174,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-08T15:00:00Z",
            "status": "FINISHED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "awayTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                },
                {
                    "id": 11544,
                    "name": "Simon Beck",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233177,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-08T15:00:00Z",
            "status": "FINISHED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 3,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "awayTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "referees": [
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                },
                {
                    "id": 11595,
                    "name": "Adrian Holmes",
                    "nationality": null
                },
                {
                    "id": 11437,
                    "name": "Andy Garratt",
                    "nationality": null
                },
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233179,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-08T15:00:00Z",
            "status": "FINISHED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "awayTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 11446,
                    "name": "Robert Jones",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233180,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-08T15:00:00Z",
            "status": "FINISHED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "awayTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "referees": [
                {
                    "id": 11567,
                    "name": "Jonathan Moss",
                    "nationality": null
                },
                {
                    "id": 11570,
                    "name": "Harry Lennard",
                    "nationality": null
                },
                {
                    "id": 11568,
                    "name": "Andrew Halliday",
                    "nationality": null
                },
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233181,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-08T15:00:00Z",
            "status": "FINISHED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "awayTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233175,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-08T17:30:00Z",
            "status": "FINISHED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "awayTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233178,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-08T19:45:00Z",
            "status": "FINISHED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "awayTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11543,
                    "name": "Roger East",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233173,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-09T16:00:00Z",
            "status": "FINISHED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "awayTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233176,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-10T20:00:00Z",
            "status": "FINISHED",
            "matchday": 16,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "awayTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11505,
                    "name": "Derek Eaton",
                    "nationality": null
                },
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233186,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-15T12:30:00Z",
            "status": "FINISHED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 65,
                "name": "Manchester City FC"
            },
            "awayTeam": {
                "id": 62,
                "name": "Everton FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11480,
                    "name": "Eddie Smart",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233183,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-15T15:00:00Z",
            "status": "FINISHED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "awayTeam": {
                "id": 1044,
                "name": "AFC Bournemouth"
            },
            "referees": [
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                },
                {
                    "id": 11495,
                    "name": "Ian Hussin",
                    "nationality": null
                },
                {
                    "id": 11611,
                    "name": "Scott Ledger",
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233187,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-15T15:00:00Z",
            "status": "FINISHED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "referees": [
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                },
                {
                    "id": 11504,
                    "name": "Simon Long",
                    "nationality": null
                },
                {
                    "id": 11424,
                    "name": "Neil Davies",
                    "nationality": null
                },
                {
                    "id": 11479,
                    "name": "Lee Mason",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233188,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-15T15:00:00Z",
            "status": "FINISHED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 394,
                "name": "Huddersfield Town AFC"
            },
            "awayTeam": {
                "id": 67,
                "name": "Newcastle United FC"
            },
            "referees": [
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                },
                {
                    "id": 11581,
                    "name": "Gary Beswick",
                    "nationality": null
                },
                {
                    "id": 11615,
                    "name": "Adam Nunn",
                    "nationality": null
                },
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233190,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-15T15:00:00Z",
            "status": "FINISHED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 354,
                "name": "Crystal Palace FC"
            },
            "awayTeam": {
                "id": 338,
                "name": "Leicester City FC"
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                },
                {
                    "id": 11564,
                    "name": "Stuart Burt",
                    "nationality": null
                },
                {
                    "id": 11488,
                    "name": "Simon Bennett",
                    "nationality": null
                },
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233192,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-15T15:00:00Z",
            "status": "FINISHED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "awayTeam": {
                "id": 715,
                "name": "Cardiff City FC"
            },
            "referees": [
                {
                    "id": 11423,
                    "name": "Andy Madley",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11496,
                    "name": "Mick McDonough",
                    "nationality": null
                },
                {
                    "id": 11610,
                    "name": "Andre Marriner",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233184,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-15T17:30:00Z",
            "status": "FINISHED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 63,
                "name": "Fulham FC"
            },
            "awayTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "referees": [
                {
                    "id": 11575,
                    "name": "Mike Dean",
                    "nationality": null
                },
                {
                    "id": 11576,
                    "name": "Darren Cann",
                    "nationality": null
                },
                {
                    "id": 11431,
                    "name": "Daniel Robathan",
                    "nationality": null
                },
                {
                    "id": 11436,
                    "name": "Lee Probert",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233189,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-16T13:30:00Z",
            "status": "FINISHED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 340,
                "name": "Southampton FC"
            },
            "awayTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "referees": [
                {
                    "id": 11443,
                    "name": "Chris Kavanagh",
                    "nationality": null
                },
                {
                    "id": 11438,
                    "name": "Dan Cook",
                    "nationality": null
                },
                {
                    "id": 98555,
                    "name": null,
                    "nationality": null
                },
                {
                    "id": 11503,
                    "name": "Graham Scott",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233191,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-16T13:30:00Z",
            "status": "FINISHED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 1,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC"
            },
            "awayTeam": {
                "id": 61,
                "name": "Chelsea FC"
            },
            "referees": [
                {
                    "id": 11494,
                    "name": "Stuart Attwell",
                    "nationality": null
                },
                {
                    "id": 11606,
                    "name": "Constantine Hatzidakis",
                    "nationality": null
                },
                {
                    "id": 11437,
                    "name": "Andy Garratt",
                    "nationality": null
                },
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233185,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-16T16:00:00Z",
            "status": "FINISHED",
            "matchday": 17,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "awayTeam": {
                "id": 66,
                "name": "Manchester United FC"
            },
            "referees": [
                {
                    "id": 11551,
                    "name": "Martin Atkinson",
                    "nationality": null
                },
                {
                    "id": 11547,
                    "name": "Stephen Child",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11580,
                    "name": "Anthony Taylor",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233193,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-21T20:00:00Z",
            "status": "FINISHED",
            "matchday": 18,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 0,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 0,
                    "awayTeam": 1
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC"
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "nationality": null
                },
                {
                    "id": 11530,
                    "name": "Lee Betts",
                    "nationality": null
                },
                {
                    "id": 11586,
                    "name": "Richard West",
                    "nationality": null
                },
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "nationality": null
                }
            ]
        },
        {
            "id": 233196,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2018-12-22T12:30:00Z",
            "status": "FINISHED",
            "matchday": 18,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-16T17:34:22Z",
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 1,
                    "awayTeam": 0
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 57,
                "name": "Arsenal FC"
            },
            "awayTeam": {
                "id": 328,
                "name": "Burnley FC"
            },
            "referees": [
                {
                    "id": 11487,
                    "name": "Kevin Friend",
                    "nationality": null
                },
                {
                    "id": 11444,
                    "name": "Matthew Wilkes",
                    "nationality": null
                },
                {
                    "id": 11505,
                    "name": "Derek Eaton",
                    "nationality": null
                },
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "nationality": null
                }
            ]
        },        
        {
            "id": 233402,
            "season": {
                "id": 151,
                "startDate": "2018-08-10",
                "endDate": "2019-05-12",
                "currentMatchday": 31
            },
            "utcDate": "2019-05-12T14:00:00Z",
            "status": "SCHEDULED",
            "matchday": 38,
            "stage": "REGULAR_SEASON",
            "group": "Regular Season",
            "lastUpdated": "2019-03-03T21:34:11Z",
            "score": {
                "winner": null,
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "halfTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "extraTime": {
                    "homeTeam": null,
                    "awayTeam": null
                },
                "penalties": {
                    "homeTeam": null,
                    "awayTeam": null
                }
            },
            "homeTeam": {
                "id": 346,
                "name": "Watford FC"
            },
            "awayTeam": {
                "id": 563,
                "name": "West Ham United FC"
            },
            "referees": []
        }
    ]
}
    }
  }
}
</script>




