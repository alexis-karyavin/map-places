<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style lang="scss">
@import 'assets/styles/styles.scss';

body {
  margin: 0;

  .background-gradient {
    background: rgb(67,255,2);
    background: linear-gradient(90deg, rgba(67,255,2,1) 0%, rgba(67,255,2,1) 52%, rgba(33,246,238,1) 100%);
  }
}
</style>
