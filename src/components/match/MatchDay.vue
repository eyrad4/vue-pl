<template>
  <div>
    <div class="title is-2 has-text-centered">Match day {{ day }}</div>   
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

