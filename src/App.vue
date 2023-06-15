<script>


import AppNavHeader from './components/AppNavHeader.vue';
export default {

  components: {
    AppNavHeader
  },

}
</script>

<template>
  <AppNavHeader />
  <router-view class="mt-4"></router-view>

  
</template>

<style lang="scss">
@use './style/general.scss';
</style>