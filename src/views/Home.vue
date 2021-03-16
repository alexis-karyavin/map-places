<template>
  <div class="main-container">
    <Map />
    <Button icon="pi pi-bars" class="p-button-rounded btn-menu" />
    <Button icon="pi pi-check" label="Списком" class="p-button btn-list" />
    <!-- <button class="btn-menu">
      <font-awesome-icon icon="user-secret" />
    </button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import Menubar from 'primevue/menubar'
import Map from '@/views/Map.vue'
import Button from 'primevue/button'

export default defineComponent({
  components: {
    Map,
    Button
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
