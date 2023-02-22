<script>
import axios from "axios";
import AppCard from "../components/AppCard.vue";
import AppHeaderVue from "../components/AppHeader.vue";
import AppJumboRegister from "../components/AppJumboRegister.vue";

export default {
  name: "SearchPage",
  data() {
    return {
      apartments: [],
      rooms: "",
      beds: "",
      bathrooms: "",
      services: [],
      isActive: false,
    };
  },
  components: {
    AppHeaderVue,
    AppCard,
    AppJumboRegister,
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
  <div class="search-nav" :class="{ active: isActive }">
    <div class="bottone">
      <button @click="isActive = !isActive" class="btn-filters">
        Filters
        <i class="fa-solid fa-circle-chevron-right ms-2 moving"></i>
      </button>
    </div>
    <div class="cont-filters">
      <h4 class="h4 mb-4 text-white">Specifiche</h4>
      <form
        class="form-control bg-transparent border-0 p-0"
        @submit.prevent="getApartments"
      >
        <div class="d-flex align-items-center justify-content-between mb-2">
          <label class="text-white" for="number">Bagni</label>
          <input
            type="number"
            id="number"
            v-model="bathrooms"
            class="form-number text-end"
            min="1"
            max="30"
          />
        </div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <label class="text-white">Letti</label>
          <input
            type="number"
            v-model="beds"
            class="form-number"
            min="1"
            max="30"
          />
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <label class="text-white">Stanze</label>
          <input
            type="number"
            v-model="rooms"
            class="form-number"
            min="1"
            max="30"
          />
        </div>

        <label class="h4 mt-4 mb-4 text-center text-white">Servizi</label>
        <div class="row">
          <div class="col-6">
            <label class="service" for="wifi">
              <input
                type="checkbox"
                name="services[]"
                value="1"
                id="wifi"
                v-model="services"
              />
              <span>Wifi</span>
            </label>
          </div>
          <div class="col-6">
            <label class="service" for="parking">
              <input
                type="checkbox"
                name="services[]"
                value="2"
                id="parking"
                v-model="services"
              />
              <span>Parcheggio</span>
            </label>
          </div>
          <div class="col-6">
            <label class="service" for="pool">
              <input
                type="checkbox"
                name="services[]"
                value="3"
                id="pool"
                v-model="services"
              />
              <span>Piscina</span>
            </label>
          </div>
          <div class="col-6">
            <label class="service" for="portineria">
              <input
                type="checkbox"
                name="services[]"
                value="4"
                id="portineria"
                v-model="services"
              />
              <span>Portineria</span>
            </label>
          </div>
          <div class="col-6">
            <label class="service" for="sauna">
              <input
                type="checkbox"
                name="services[]"
                value="5"
                id="sauna"
                v-model="services"
              />
              <span>Sauna</span>
            </label>
          </div>
          <div class="col-6">
            <label class="service" for="vistamare">
              <input
                type="checkbox"
                name="services[]"
                value="6"
                id="vistamare"
                v-model="services"
              />
              <span>Piscina</span>
            </label>
          </div>
        </div>
        <button type="submit" class="btn-filter">Filtra</button>
      </form>
    </div>
  </div>
  <div class="contenitore-uno">
    <div class="container">
      <div
        class="row bg-white-s gy-4 justify-content-center justify-content-md-start"
      >
        <AppCard
          class="col-10 col-md-4 col-lg-3"
          :apartment="apartment"
          v-for="apartment in apartments"
          :key="apartment.id"
        />
      </div>
    </div>
  </div>
  <AppJumboRegister />
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;

.search-nav.active {
  left: 0;
}

.search-nav {
  position: absolute;
  padding: 1.8rem;
  width: 400px;
  z-index: 50;
  background-color: #ec2b46;
  left: -400px;
  top: 100px;
  transition: all 0.4s ease-in-out;

  .cont-filters {
    .form-number {
      background-color: white;
      width: 150px;
      border-radius: 0.375rem;
      border: none;
      padding: 0.5rem;
    }

    label input[type="checkbox"] {
      display: none;

      &:checked ~ span {
        background-color: #303658;
        box-shadow: 0 2px 6px #1c2138;
        color: white;
      }
    }

    label span {
      position: relative;
      display: inline-block;
      background-color: white;
      padding: 0.2rem 1.6rem;
      color: #ec2b46;
      border-radius: 0.375rem;
      font-size: 1rem;
      user-select: none;
      transition: 0.5s;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }

  /* .cont-filters.active {
    left: 0;
  } */
  .btn-filters {
    position: absolute;
    top: 0;
    right: -130px;
    background-color: #ec2b46;
    color: white;
    border: none;
    border-radius: 0.375rem;
    padding: 0.3rem 1.8rem;
  }

  .btn-filter {
    background-color: white;
    color: #ec2b46;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    border-radius: 0.375rem;
    padding: 0.3rem 1.8rem;
    margin-top: 2.5rem;
  }
}

.contenitore-uno {
  padding-top: 10px;

  .bg-white-s {
    background-color: rgba(255, 255, 255, 0);
  }
}

/* Media query */
@media screen and (max-width: 776px) {
  .search-nav {
    width: 300px;
    left: -300px;

    .btn-filters {
      background-color: #303658;
      right: -100px;
      padding: 0.3rem 1rem;
    }
  }
}
</style>
