<template>
  <div>
    <div class="tabs is-medium">
      <ul>
        <li 
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{'is-active': tab.isActive}"
        ><a href="#" @click.prevent="selectTab(tab)">{{ tab.name }}</a></li>
      </ul>
    </div>
    <div class="tab-detail">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    
  },
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.map((tab) => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    }
  }
}
</script>

