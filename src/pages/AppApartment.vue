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
  <h1>Tutti i nostri appartamenti :</h1>
  <section class="allcard flex-wrap">
    <div class="row justify-content-center">
      <div class="d-flex flex-wrap gap-4">
        <AppCard
          :apartment="apartment"
          v-for="apartment in apartments"
          :key="apartment.id"
        />
      </div>
    </div>
  </section>
</template>
