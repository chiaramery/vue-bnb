<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
import AppHeader from "./AppHeader.vue";
import SearchBox from "./SearchBox.vue";
export default {
  name: "HomePage",
  data() {
    return {
      apartments: [],
      baseUrl: "http://localhost:8000",
    };
  },
  components: {
    AppHeader,
    AppCard,
    SearchBox,
  },
  methods: {
    getApartments() {
      axios.get(`${this.baseUrl}/api/apartments`).then((resp) => {
        this.apartments = resp.data.results.data;
      });
    },
    handleResultSelected(result) {
      // Gestisci il risultato selezionato qui
    },
    search: function (query) {
      const url = `https://api.tomtom.com/search/2/search/${encodeURIComponent(
        query
      )}.json?key=upEwnVbILIY3XpQgAsiO3mhPUP6dQdCd&countrySet=IT`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.results = data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getApartments();
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
          <SearchBox @result-selected="handleResultSelected" />
          <button class="btn btn-primary">cerca</button>
        </div>
      </div>
    </div>
  </div>
  <main>
    <div class="d-flex justify-content-center">
      <h3 class="mt-4">Appartamenti in evidenza</h3>
    </div>
    <div class="appartamenti d-flex">
      <AppCard
        class="mt-4"
        :apartment="apartment"
        v-for="apartment in apartments"
        :key="apartment.id"
      />
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

    .input-group {
      padding-left: 6.5em;
      width: 600px;
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
</style>
