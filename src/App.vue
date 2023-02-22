<script>
import HomePage from "./components/HomePage.vue";
import ApartmentDetails from "./pages/ApartmentDetails.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    HomePage,
    ApartmentDetails,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
