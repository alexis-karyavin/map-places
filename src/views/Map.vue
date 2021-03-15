<template>
  <div id="map"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from '@/models/map'

export default defineComponent({
  name: 'Map',
  mounted (): void {
    const map = new Map()
    map.init()
  }
})
</script>

<style lang="scss">
  #map {
    height: 100vh;
  }
</style>
