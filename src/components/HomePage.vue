<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
import AppJumboRegister from "./AppJumboRegister.vue";
/* import AppHeader from "./AppHeader.vue"; */
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
    /* AppHeader, */
    AppCard,
    AppJumboRegister,
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
    <!-- <AppHeader /> -->
    <!-- Jumbotron -->
    <div class="jumbotron d-flex align-items-center">
      <div class="form justify-content-center">
        <h1 class="text-center my-3 mb-5">
          Cerca l'appartamento che fa per te
        </h1>
        <!-- SearchBox -->
        <div class="div-search-box d-flex align-items-center">
          <div class="autocomplete-input">
            <input
              type="text"
              placeholder="Cerca"
              v-model="query"
              @input="search"
            />
            <ul class="autocomplete-results">
              <li
                v-for="result in results"
                :key="result.id"
                @click="selectResult(result)"
              >
                {{ result.address.freeformAddress }}
              </li>
            </ul>
          </div>
          <div class="container-btn-main">
            <!-- SearchBox Button -->
            <button class="btn btn-main ms-2" @click="filterResults">
              FILTRA
            </button>
            <button class="btn btn-main btn-mobile ms-2" @click="filterResults">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    <div class="container m-0 p-0">
      <div
        class="row bg-white gy-4 justify-content-center justify-content-md-start"
      >
        <AppCard
          class="col-10 col-md-4 col-lg-3"
          :apartment="apartment"
          v-for="apartment in apartments"
          :key="apartment.id"
        />
      </div>
    </div>
    <AppJumboRegister />
  </main>
</template>

<style scoped lang="scss">
.jumbo-container {
  width: 100%;
  height: 800px;
  background-image: linear-gradient(
      145deg,
      rgba(185, 32, 52, 0.43),
      rgba(48, 54, 88, 0.82)
    ),
    url("../img/jumbotron.jpg");
  width: 100%;
  color: white;
  background-size: cover;
  background-position: 25% 75%;
}

.jumbotron {
  height: 680px;
  width: 50%;
  margin: 0 auto;

  h1 {
    padding-top: 5%;
    padding-bottom: 0.5em;
    color: white;
    font-weight: 550;
  }
}

.form {
  margin: 0 auto;
  width: 70%;
  height: 400px;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.div-search-box {
  width: 80%;
}

.autocomplete-input {
  width: 100%;
  position: relative;
  display: inline-block;
}

.autocomplete-input input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
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
  background-color: rgba(48, 54, 88, 0.22);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.autocomplete-results li {
  padding: 8px;
  cursor: pointer;
}

.autocomplete-results li:hover {
  background-color: rgba(48, 54, 88, 1);
}

.autocomplete-results li.selected,
.autocomplete-input input:focus {
  background-color: #f1f1f1;
  outline: none;
}

.btn-main {
  position: relative;
  background-color: #ec2b46;
  border: none;
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0.5em 1em;

  &:hover {
    background-color: rgba(185, 32, 52, 0.9);
  }
}

.btn-main:after {
  content: "";
  background: #f1f1f1;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}

.btn-main:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}

.btn-mobile {
  display: none;
}

main {
  #apartment-promotion {
    h3 {
      padding-right: 3em;
    }
  }
}

// Media query - Small devices
@media screen and (max-width: 992px) {
  .jumbo-container {
    .jumbotron {
      width: 100%;
      margin: 0 auto;

      .form {
        .div-search-box {
          width: 80%;
          display: flex;
        }

        .btn-main {
          display: none;
        }

        .btn-mobile {
          display: block;
        }
      }
    }
  }
}

// Media query - tablet devices
@media screen and (max-width: 1400px) {
  .form {
    width: 90%;
    //margin: 0 auto;
  }
}
</style>
