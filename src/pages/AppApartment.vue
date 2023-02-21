<script>
import axios from "axios";
import AppList from "../components/AppList.vue";
import AppBackAnimation from "../components/AppBackAnimation.vue";
export default {
  name: "AppApartment",
  data() {
    return {
      apartments: [],
      url: "http://localhost:8000",
    };
  },
  components: {
    AppList,
    AppBackAnimation,

  },
  created() {
    this.getApartments();
  },
  methods: {
    getApartments() {
      axios.get(`${this.url}/api/all`).then((resp) => {
        this.apartments = resp.data.results;
        console.log(this.apartments);
      });
    },
  },
};
</script>

<template>
  <AppBackAnimation />
  <div class="contenitore-uno">
    <div class="contenitore container">
      <div class="row bg-white-s gy-4 justify-content-center justify-content-lg-start">
        <AppList class="col-10 p-0" :apartment="apartment" v-for="apartment in apartments" :key="apartment.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.contenitore-uno {
  padding-top: 10px;
  margin: 0 auto;

  .bg-white-s {
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>
