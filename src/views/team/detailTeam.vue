<template>
  <div class="container">
    <app-tabs>
      <app-tab name="Info" :selected="true">
        Info
      </app-tab>  
      <app-tab name="Matches">
        Matches
      </app-tab>
      <app-tab name="Players">
        Players
      </app-tab>
      <app-tab name="Coach team">
        Coach team
      </app-tab>
    </app-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      teamSelected: 'teamSelected'
    })
  }
}
</script>

