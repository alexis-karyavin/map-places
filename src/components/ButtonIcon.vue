<template>
  <div class="wrapper-button-icon">
    <button class="btn btn-transparent btn-icon" :class="{'active': active}">
      <font-awesome-icon :icon="icon" size="3x" />
    </button>
    <div v-show="active" class="line-active"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import userImg from '@/assets/icons/user.png'
export default defineComponent({
  name: 'ButtonIcon',
  props: {
    icon: Array,
    active: Boolean
  }
  // data () {
  //   return {
  //     // srcImg: userImg
  //   }
  // }

})
</script>

<style lang="scss">
@import '../assets/styles/colors.scss';
.wrapper-button-icon {
  width: 38px;
}
.btn {
  // width: 38px;
  height: 38px;
  margin-bottom: 1rem;

  svg {
    width: 100%;
  }

  & ~ .line-active {
    // width: 38px;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background-color: $green;
  }
}

</style>
