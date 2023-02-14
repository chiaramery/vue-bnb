<script>
import HomePage from './components/HomePage.vue';
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
