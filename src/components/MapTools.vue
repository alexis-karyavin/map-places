<template>
  <div class="map-tools-container">
    <div class="map-tools-group user">
      <button class="btn btn-transparent">
        <img src="../assets/icons/user.jpg">
      </button>
    </div>
    <div class="map-tools-group footer-menu">
      <div class="footer-menu-container">
        <button class="btn btn-transparent btn-icon active">
          <font-awesome-icon :icon="['far', 'compass']" size="3x" />
        </button>
        <button class="btn btn-transparent btn-icon">
          <font-awesome-icon :icon="['far', 'star']" size="3x" />
        </button>
        <button class="btn btn-transparent btn-icon">
          <font-awesome-icon icon="wrench" size="3x" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import userImg from '@/assets/icons/user.png'
export default defineComponent({
  // data () {
  //   return {
  //     // srcImg: userImg
  //   }
  // }

})
</script>

<style lang="scss">
  .map-tools-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .map-tools-group {
      position: absolute;
      pointer-events: auto;

      &.user {
        top: 2rem;
        left: 1rem;
        .btn {
          width: 64px;
          height: 64px;
          border-radius: 100%;
          border: 1px solid #ffffff;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }

      &.footer-menu {
        bottom: 0;
        width: 100%;
        .footer-menu-container {
          width: 100%;
          height: 140px;
          background: #ffffff;
          border-top-left-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: space-around;

          .btn {
            width: 38px;
            height: 38px;
          }
        }
      }
    }
  }
</style>
