<template>
  <div id="map"></div>
  <Spinner v-if="showSpinner" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from '@/models/map'
import Spinner from '@/components/base/Spinner.vue'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'Map',
  components: {
    Spinner
  },
  data () {
    return {
      showSpinner: true
    }
  },
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
      map.init().then(() => {
        // console.log('component:', res)
        this.showSpinner = false
      })
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
