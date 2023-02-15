<script>
import axios from "axios";
import AppCard from "../components/AppCard.vue";
export default {
  name: "SearchPage",
  data() {
    return {
      apartments: [],
      baseUrl: "http://localhost:8000",
    };
  },
  components: {
    AppCard,
  },
  methods: {
    getApartments() {
      axios.get(`${this.baseUrl}/api/apartments`).then((resp) => {
        this.apartments = resp.data.results.data;
      });
    },
  },
  created() {
    this.getApartments();
  },
};
</script>

<template>
  <div class="ms_wrapper-search-page py-5">
    <div class="container text-center">
      <div class="row">
        <div class="col-4 ms_sidebar-search p-5">
          <h4 class="text-start">Filtra ricerca</h4>
          <hr />
          <!-- number of rooms filter  -->
          <div class="ms_number-rooms-filter py-4">
            <h5 class="text-start">Numero di stanze</h5>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
                type="checkbox"
                class="btn-check"
                id="check2rooms"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="check2rooms"
                >2 stanze</label
              >

              <input
                type="checkbox"
                class="btn-check"
                id="check3rooms"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="check3rooms"
                >3 stanze</label
              >

              <input
                type="checkbox"
                class="btn-check"
                id="check4rooms"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="check4rooms"
                >4 stanze</label
              >
            </div>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
                type="checkbox"
                class="btn-check"
                id="check5rooms"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="check5rooms"
                >5 stanze</label
              >

              <input
                type="checkbox"
                class="btn-check"
                id="check6rooms"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="check6rooms"
                >6 stanze</label
              >
            </div>
          </div>

          <!-- number of beds filter -->
          <div class="ms_number-beds-filter py-4">
            <h5 class="text-start">Numero di stanze</h5>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <!-- range km filter -->
          <div class="ms_range-km-filter py-4">
            <h5 class="text-start">Modifica il raggio dei km</h5>
            <label for="customRange2" class="form-label">Example range</label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="5"
              id="customRange2"
            />
          </div>
          <!-- extra services filter  -->
          <div class="ms_extra-services-filter py-4">
            <h5 class="text-start">Servizi aggiuntivi</h5>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
                type="checkbox"
                class="btn-check"
                id="wifi-service"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="wifi-service"
                >WiFi</label
              >

              <input
                type="checkbox"
                class="btn-check"
                id="parking-car-service"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="parking-car-service"
                >Posto auto</label
              >

              <input
                type="checkbox"
                class="btn-check"
                id="pool-service"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="pool-service"
                >Piscina</label
              >
            </div>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
                type="checkbox"
                class="btn-check"
                id="sauna-service"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="sauna-service"
                >Sauna</label
              >

              <input
                type="checkbox"
                class="btn-check"
                id="sea-view-service"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="sea-view-service"
                >Vista mare</label
              >

              <input
                type="checkbox"
                class="btn-check"
                id="concierge-service"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="concierge-service"
                >Portineria</label
              >
            </div>
          </div>
        </div>
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
