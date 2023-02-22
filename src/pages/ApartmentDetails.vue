<script>
import axios from "axios";
import ApartmentMap from "../components/ApartmentMap.vue";
import AppBackAnimation from "../components/AppBackAnimation.vue";
export default {
  name: "ApartmentDetails",
  data() {
    return {
      url: "http://localhost:8000",
      apartment: {},
      name: "",
      email: "",
      apartment_id: "",
      message: "",
      loading: false,
      success: false,
      errors: {},
    };
  },
  components: {
    ApartmentMap,
    AppBackAnimation
  },
  created() {
    const slug = this.$route.params.slug;
    axios.get(`${this.url}/api/apartments/${slug}`).then((resp) => {
      if (resp.data.success) {
        this.apartment = resp.data.apartment;
        this.apartment_id = resp.data.apartment.id;
      } else {
        this.$router.push({ name: "not-found" });
      }
    });
  },
  methods: {
    sendForm() {
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        apartment_id: this.apartment_id,
      };
      this.errors = {};

      axios.post(`${this.url}/api/leads`, data).then((resp) => {
        this.success = resp.data.success;
        if (this.success) {
          this.name = "";
          this.email = "";
          this.message = "";
          this.apartment_id = "";
        } else {
          console.log(resp.data);
          this.errors = resp.data.errors;
        }
        this.loading = false;
      });
    },
  },
};
</script>
<template>
  <AppBackAnimation />
  <div class="container">
    <div class="row">
      <div class="col col-6 card border">
        <div class="m-2">
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
      <!-- Mappa -->
      <ApartmentMap />
    </section>

    <!-- Form messaggi -->

    <section class="messages">
      <h4 class="text-center m-3 text-uppercase">Contatta il proprietario:</h4>

      <div class="alert alert-success" v-if="success">
        Il tuo messaggio è stato inviato. Ti rispondiamo a breve.
      </div>
      <div class="text-center" v-if="loading">Invio ...</div>

      <form @submit.prevent="sendForm()">
        <div class="mb-3">
          <label for="name">Nome</label>
          <input
            type="text"
            id="name"
            class="form-control"
            :class="{ 'is-invalid': errors.name }"
            v-model="name"
          />
          <small class="invalid-feedback" v-if="errors.name">{{
            errors.name[0]
          }}</small>
        </div>

        <div class="mb-3">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" v-model="email" />
        </div>

        <div class="mb-3">
          <label for="message">Messaggio</label>
          <textarea
            id="message"
            rows="10"
            class="form-control"
            v-model="message"
          ></textarea>
        </div>

        <div>
          <input
            type="hidden"
            name="apartment_id"
            v-model="this.apartment.apartment_id"
          />
        </div>

        <button type="submit" class="btn btn-success">Invia</button>
      </form>
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
  .messages {
    width: 70%;
    margin: 2rem auto;
  }
}
</style>
