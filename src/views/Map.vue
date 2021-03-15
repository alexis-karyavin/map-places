<template>
  <div id="map"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import * as config from '../config.json'

export default defineComponent({
  name: 'Map',
  mounted (): void {
    this.initMap()
  },
  methods: {
    initMap () {
      mapboxgl.accessToken = config.keyMap
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
      })
      map.on('load', () => {
      // TODO: Here we want to load a layer
      // TODO: Here we want to load/setup the popup
      })
    }
  }
})
</script>

<style lang="scss">
  #map {
    height: 100vh;
  }
</style>
