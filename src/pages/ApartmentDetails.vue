<script>
import axios from "axios";
import ApartmentMap from "../components/ApartmentMap.vue";
import AppHeader from "../components/AppHeader.vue";
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
    AppHeader,
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
  <section>
    <!-- Header -->
    <AppHeader />

  </section>
  <div class="container">
    <div class="row">
      <div class="col col-7 card border">
        <div class="m-2">
          <img
            v-if="apartment.image"
            :src="`${url}/storage/${apartment.image}`"
            alt=""
          />
          <p v-else>No Image</p>
        </div>
      </div>

      <div class="col col-5">
        <div class="ms_card pt-3">
          <h2 class="text-center mt-3">{{ apartment.title }}</h2>
          <div class="description-wrapper">
            <div class="d-flex justify-content-center">
              <p class="text-address mx-3" href="">{{ apartment.address }}</p>
            </div>

            <ul class="d-flex">
              <li>
                <i class="fa-solid fa-door-open"></i>
                Stanze:<strong>{{ apartment.rooms }}</strong>
              </li>
              <li>
                <i class="fa-solid fa-bed"></i>
                Letti:<strong>{{ apartment.beds }}</strong>
              </li>
              <li>
                <i class="fa-solid fa-bath"></i>
                Bagni:<strong>{{ apartment.bathrooms }}</strong>
              </li>

              <li>
                <i class="fa-solid fa-house"></i>
                m²:<strong>{{ apartment.square_meters }}</strong>
              </li>
            </ul>
            <hr />
            <h5 class="text-center mt-4">Servizi offerti:</h5>
            <ul class="d-flex justify-content-center services-list">
              <li v-for="service in apartment.services">
                {{ service.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-5">
        <section class="mt-5">
          <!-- Mappa -->
          <ApartmentMap />
        </section>
      </div>
      <div class="col-7">
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
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-main">INVIA</button>

            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  padding-top: 100px;

  .row {
    margin: 0 auto;

    .col {
      min-height: 50vh;

      .ms_card {
        .description-wrapper {
          width: 70%;
          margin: 1.5rem auto;
          text-align: center;

          .text-address {
            font-style: italic;
          }

          ul {
            margin-top: 1em;
            margin-bottom: 1.5em;
            justify-content: space-between;
            padding-left: 0;

            li {
              list-style-type: none;
              margin: 1em;
              display: flex;
              flex-direction: column;
              align-items: center;
              i.fa-solid {
                height: 20px;
                width: 20px;
                color: #EC2B46;
              }
              strong {
                color: #EC2B46;
                padding-top: 1em;
                font-size: 18px;
              }
            }
          }
          .services-list {
            color: #EC2B46;
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
  .btn-main {
  position: relative;
  background-color: #EC2B46;
  border: none;
  font-size: 17px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0.5em 1em;

    &:hover {
      background-color: rgba(185, 32, 52, 0.90);;
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
    transition: all 0.8s
  }
  .btn-main:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
}
</style>