<script>

import HomePage from './components/HomePage.vue';
import ApartmentDetails from './pages/ApartmentDetails.vue';
export default {
  name: 'App',
  components: {
    HomePage,
    ApartmentDetails,
    

  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
