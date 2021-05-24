<template>
  <button type="button" class="btn btn-light btn-map">
    <font-awesome-icon :icon="icon" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonMap',
  props: {
    icon: String
  }
})
</script>

<style lang="scss">
  .btn-map {
    width: 50px;
    height: 50px;
    color: #b1b3b1;
    &:hover {
      color: #000000;
    }
  }
</style>
