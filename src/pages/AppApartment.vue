<script>
import axios from "axios";
import AppCard from "../components/AppCard.vue";
export default {
  name: "AppApartment",
  data() {
    return {
      apartments: [],
      url: "http://localhost:8000",
    };
  },
  components: { AppCard },
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
  <div class="container mt-0 mb-4">
    <h3>Tutti i nostri appartamenti :</h3>

    <div class="row bg-white gy-4 justify-content-center justify-content-md-start">
      <AppCard class="col-10 col-md-4 col-lg-3" :apartment="apartment" v-for="apartment in apartments"
        :key="apartment.id" />
    </div>
  </div>
</template>
