<template>
  <div class="main-container">
    <Map />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from '@/views/Map.vue'

export default defineComponent({
  components: {
    Map
  },
  data () {
    return {
      items: []
    }
  }
})
</script>

<style lang="scss">
body {
  margin: 0;
}
.main-container {
  position: relative;
  .btn-list, .btn-menu {
    position: absolute;
    top: 1rem;
  }
  .btn-menu {
    position: absolute;
    left: 1rem;
    background: white;
    color: black;
    width: 50px!important;
    height: 50px!important;
  }
  .btn-list {
    position: absolute;
    right: 1rem;
    background: white;
    color: black;
  }
}
</style>
