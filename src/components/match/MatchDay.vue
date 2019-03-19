<template>
  <div class="matches-of-day">
    <div class="title is-3 has-text-centered">Match day {{ day }}</div>   
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    day: {
      required: true
    }
  }
}
</script>

<style scoped>
  .matches-of-day{
    margin-bottom: 1rem;
  }
</style>


