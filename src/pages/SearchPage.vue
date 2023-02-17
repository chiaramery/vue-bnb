<script>
import axios from "axios";
import AppCard from "../components/AppCard.vue";
export default {
  name: "SearchPage",
  data() {
    return {
      apartments: [],
      rooms: "",
      beds: "",
      bathrooms: "",
      services: [],
    };
  },
  components: {
    AppCard,
  },
  methods: {
    getApartments() {
      const params = {
        beds: this.beds,
        bathrooms: this.bathrooms,
        rooms: this.rooms,
        services: this.services,
      };
      axios.get("http://localhost:8000/api/filter", { params }).then((resp) => {
        this.apartments = resp.data.apartments;
        console.log(this.apartments);
      });
    },
  },
  created() {
    this.getApartments();
  },
};
</script>

<template>
  <div class="container">
    <form class="form-control" @submit.prevent="getApartments">
      <label>Bagni :</label>
      <input type="number" v-model="bathrooms" />
      <br />
      <label>Letti :</label>
      <input type="number" v-model="beds" />
      <br />
      <label>Stanze :</label>
      <input type="number" v-model="rooms" />
      <br />

      <label>Servizi:</label>
      <div>
        <input
          type="checkbox"
          name="services[]"
          value="1"
          id="wifi"
          v-model="services"
        />
        <label for="wifi">Wi-Fi</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="services[]"
          value="2"
          id="parking"
          v-model="services"
        />
        <label for="parking">Posto Macchina</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="services[]"
          value="3"
          id="pool"
          v-model="services"
        />
        <label for="pool">Piscina</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="services[]"
          value="4"
          id="portineria"
          v-model="services"
        />
        <label for="portineria">Portineria</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="services[]"
          value="5"
          id="sauna-"
          v-model="services"
        />
        <label for="sauna-">Sauna</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="services[]"
          value="6"
          id="vistamare"
          v-model="services"
        />
        <label for="vistamare">Vista Mare</label>
      </div>

      <button type="submit">Filtra</button>
    </form>

    <div class="col-8">
      <h2>Appartamenti trovati</h2>
      <div class="appartamenti flex-wrap d-flex">
        <AppCard
          class="mt-4"
          :apartment="apartment"
          v-for="apartment in apartments"
          :key="apartment.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ms_wrapper-search-page {
  background-color: #eeeeee;
  .container {
    .ms_sidebar-search {
      background-color: white;
    }
  }
}
</style>
