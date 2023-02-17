<script>
import axios from "axios";
import ApartmentMap from "../components/ApartmentMap.vue";
export default {
  name: "ApartmentDetails",
  data() {
    return {
      url: "http://localhost:8000",
      apartment: {},
    };
  },
  components: {
    ApartmentMap,
  },
  created() {
    const slug = this.$route.params.slug;
    axios.get(`${this.url}/api/apartments/${slug}`).then((resp) => {
      if (resp.data.success) {
        this.apartment = resp.data.apartment;
      } else {
        this.$router.push({ name: "not-found" });
      }
    });
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col col-6 card border">
        <div class="m-2">
          <h2>immagine</h2>
          <img
            v-if="apartment.image"
            :src="`${url}/storage/${apartment.image}`"
            alt=""
          />
          <p v-else>No Image</p>
        </div>
      </div>

      <div class="col col-6">
        <div class="card mt-2">
          <h2 class="text-center mt-3">{{ apartment.title }}</h2>
          <div class="description-wrapper">
            <div class="d-flex justify-content-center">
              <a class="text-dark mx-3" href="">{{ apartment.address }}</a>
            </div>

            <ul class="d-flex my-5">
              <li>Numero di stanze : {{ apartment.rooms }}</li>
              <li>
                <i class="fa-solid fa-bed"></i>
                Numero di letti : {{ apartment.beds }}
              </li>
              <li>
                <i class="fa-solid fa-bath"></i>
                Numero di bagni : {{ apartment.bathrooms }}
              </li>

              <li>
                <i class="fa-solid fa-house"></i>
                Metri quadrati {{ apartment.square_meters }}
              </li>
            </ul>
            <hr />
            <h5 class="text-center mt-4">Servizi offerti:</h5>
            <ul class="d-flex justify-content-center">
              <li v-for="service in apartment.services">
                {{ service.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section class="mt-5">
      <h2>Mappa :</h2>
      <ApartmentMap />
    </section>
  </div>
</template>

<style lang="scss">
.container {
  margin-top: 80px;
  .row {
    margin: 0 auto;
    background-color: antiquewhite;
    .col {
      min-height: 50vh;
      .card {
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
}
</style>
