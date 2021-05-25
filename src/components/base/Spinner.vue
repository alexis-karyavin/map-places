<template>
  <div class="wrapper-spinner">
    <font-awesome-icon class="spinner" icon="circle-notch" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style lang="scss">
  .wrapper-spinner {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.3);
    .fa-w-16 {
      width: 35px;
      height: 35px;
      &.spinner {
        animation: 1s linear 0s normal none infinite running rot;

        position: absolute;
        left: 50%;
        top: 50%;
      }
      @keyframes rot {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
</style>
