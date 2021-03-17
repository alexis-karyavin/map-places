<template>
  <div id="map"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from '@/models/map'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'Map',
  computed: {
    ...mapGetters({
      places: 'getPlaces'
    })
  },
  mounted (): void {
    this.setPlaces()
    this.initMap()
  },
  methods: {
    ...mapActions([
      'setPlaces'
    ]),
    initMap (): void {
      const map = new Map()
      map.addPlaces(this.places)
    }
  }
})
</script>

<style lang="scss">
  #map {
    height: 100vh;
  }
</style>
