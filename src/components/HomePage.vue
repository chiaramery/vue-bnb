<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
import AppHeader from "./AppHeader.vue";
// import SearchBox from "./SearchBox.vue";
export default {
  name: "HomePage",
  data() {
    return {
      query: "",
      results: [],
      selectedResult: null,
      apartments: [],
      listApartments: [],
      apartments: [],
      baseUrl: "http://localhost:8000",
    };
  },
  components: {
    AppHeader,
    AppCard,
    // SearchBox,
  },
  methods: {
    search: function () {
      const query = this.query.trim();
      if (query !== "") {
        tt.services
          .fuzzySearch({
            key: "upEwnVbILIY3XpQgAsiO3mhPUP6dQdCd",
            query: query,
            countrySet: "IT",
            language: "it-IT",
          })
          .then((response) => {
            this.results = response.results;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.results = [];
      }
    },
    selectResult: function (result) {
      this.query = result.address.freeformAddress;
      this.selectedResult = result;
    },
    closeResults: function () {
      this.results = [];
    },
    filterResults() {
      if (this.selectedResult) {
        const params = {
          longitude: this.selectedResult.position.lng,
          latitude: this.selectedResult.position.lat,
        };
        axios
          .get("http://localhost:8000/api/apartments", { params })
          .then((resp) => {
            console.log(resp.data);
            this.apartments = resp.data.apartment;
            console.log(this.apartments);
          });
      }
    },
  },
  created() {
    document.addEventListener("click", this.closeResults);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeResults);
  },
};
</script>

<template>
  <div class="jumbo-container">
    <!-- Header -->
    <AppHeader />
    <!-- Jumbotron -->

    <div class="jumbotron">
      <div class="form">
        <h1 class="text-center">Cerca l'appartamento che fa per te :</h1>
        <div class="div">
          <div>
            <div class="autocomplete-input">
              <input type="text" placeholder="Cerca" v-model="query" @input="search" />
              <ul class="autocomplete-results">
                <li v-for="result in results" :key="result.id" @click="selectResult(result)">
                  {{ result.address.freeformAddress }}
                </li>
              </ul>
            </div>
            <button class="btn btn-primary" @click="filterResults">
              Filtra
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    <div class="d-flex justify-content-center">
      <h3 class="mt-4">Appartamenti Filtrati</h3>
    </div>
    <div class="appartamenti">
      <div class="row">
        <div class="col-10 col-md-6 col-lg-4">
          <AppCard class="mt-4" :apartment="apartment" v-for="apartment in apartments" :key="apartment.id" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.jumbo-container {
  background-image: url(../img/jumbotron.jpg);
  background-size: cover;

  .jumbotron {
    height: 680px;
    width: 50%;
    margin: 0 auto;

    h1 {
      padding-top: 20%;
      color: black;
    }

  }

  main {
    background-color: rgb(238 238 238);
  }
}

main {
  #apartment-promotion {
    h3 {
      padding-right: 3em;
    }
  }
}

.form {
  margin: 0 auto;
  width: 80%;
  height: 400px;
  background-color: lightgoldenrodyellow;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.autocomplete-input {
  position: relative;
  display: inline-block;
}

.autocomplete-input input {
  padding: 8px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.autocomplete-results {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  width: 100%;
  max-height: 240px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.autocomplete-results li {
  padding: 8px;
  cursor: pointer;
}

.autocomplete-results li:hover {
  background-color: #f1f1f1;
}

.autocomplete-results li.selected,
.autocomplete-input input:focus {
  background-color: #f1f1f1;
  outline: none;
}
</style>
