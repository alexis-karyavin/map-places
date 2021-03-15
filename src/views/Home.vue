<template>
  <div class="main-container">
    <Map />
    <button class="btn-menu">
      <font-awesome-icon icon="user-secret" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from '@/views/Map.vue'

export default defineComponent({
  components: {
    Map
  }
})
</script>

<style lang="scss">
body {
  margin: 0;
}
.main-container {
  position: relative;
  .btn-menu {
    position: absolute;
    top: 0;
  }
}
</style>
