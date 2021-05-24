<template>
  <div class="main-container">
    <Map />
    <ButtonMap class="btn-menu" :icon="['fa', 'bars']" />
    <ButtonMap class="btn-list" :icon="['fa', 'list-ol']" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from '@/views/Map.vue'
import ButtonMap from '@/components/buttons/ButtonMap.vue'

export default defineComponent({
  components: {
    Map,
    ButtonMap
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
  }
  .btn-list {
    position: absolute;
    right: 1rem;
  }
}
</style>
