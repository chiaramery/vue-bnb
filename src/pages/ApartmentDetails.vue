<script>
import axios from "axios";
import AppHeader from "../components/AppHeader.vue";
import ApartmentMap from "../components/ApartmentMap.vue"; 
export default {
  name: "ApartmentDetails",
  components: {
  ApartmentMap,
  AppHeader,
  },
  data() {
        return {
          baseUrl: "http://localhost:8000",
          apartment: {}
        }
    },
    created() {
        const slug = this.$route.params.slug;
        // console.log(this.$route.params.slug);

    
        axios.get(`${this.baseUrl}/api/apartments/${slug}`).then(resp => {
            console.log(this.resp.data.results.data);
          this.apartment = resp.data.results.data;
          console.log(this.apartment);
        //   console.log(slug);
          //   if (resp.data.success) {
          //       // Caso del post trovato
          //       this.apartment = resp.data.apartment;
          //   } else {
          //       // post non trovato => reindirizzo nella pagina not found
          //       this.$router.push({ name: "not-found" });
          //   }
        });
    },
}
</script>

<template>
  <AppHeader />
  <div class="container">
    <div class="row mb-4 g-2">
      <div class="col col-6 card border">
          <img src="" alt="">
      </div>

      <div class="card col col-6">
        <h2 class="text-center mt-3"></h2>
        <div class="description-wrapper">
          <div class="d-flex justify-content-center">
            <a class="text-dark mx-3" href="">Via del bengodi 23 rimini italy</a>
          </div>
          <ul class="d-flex my-5">
            <li>stanze</li>
            <li>
              <i class="fa-solid fa-bed"></i>
              letti
            </li>
            <li>
              <i class="fa-solid fa-bath"></i>
              bagni
            </li>
            <li>
              <i class="fa-solid fa-building"></i>
              Metri quadrati
            </li>
          </ul>
          <hr />
          <h5 class="text-center mt-4">Servizi offerti:</h5>
          <ul class="d-flex justify-content-center">
            <li>WiFi</li>
            <li>Posto Macchina</li>
            <li>Piscina</li>
            <li>Portineria</li>
            <li>Sauna</li>
            <li>Vista Mare</li>
          </ul>
          </div>
        </div>
      
    </div>
<ApartmentMap />
  </div>
</template>

<style lang="scss">
.container {
  margin-top: 80px;
  .row {
    margin: 0 auto;     
      .card {
        min-height: 50vh;
        .description-wrapper {
          width: 80%;
          margin: 1.5rem auto;
          text-align: center;
          ul {
            margin-top: 1em;
            justify-content: space-between;
            li {
              list-style-type: none;
              margin: 1.5em;
            }
          }
          hr {
            width: 70%;
            margin: 0 auto;
          }
        }
      }
  }
}
</style>
