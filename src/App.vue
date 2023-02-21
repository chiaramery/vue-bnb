<script>

import HomePage from './components/HomePage.vue';
import ApartmentDetails from './pages/ApartmentDetails.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    HomePage,
    ApartmentDetails,


  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
