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
    <div class="row justify-content-center">
      <h2 class=" mt-3">{{ apartment.title }}</h2>
      <p class="text-address mx-3" href="">{{ apartment.address }}</p>
      <!-- Image -->
      <div class="col-lg-8 col-sm-10 ms_card">
        <div class="container-image">
          <img src="../img/jumbotron.jpg" alt="">
          <!-- <img
            v-if="apartment.image"
            :src="`${url}/storage/${apartment.image}`"
            alt=""
          />
          <p v-else>No Image</p> -->
        </div>
      </div>
      <!-- Maps -->
      <div class="col-lg-4 col-sm-10 container-map">
        <ApartmentMap />
      </div>      
    </div>
    <div class="row justify-content-center">
      <!-- Description -->
      <div class="col col-10">
        <div class="ms_card pt-3">
          <div class="description-wrapper">

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
    <div class="wrapper-form">
      <div class="row justify-content-center mt-5">
        <div class="col-12">
          <!-- Form messaggi -->
          <section class="messages">
            <h3 class="text-center text-uppercase py-3 pb-4">Contatta il proprietario:</h3>

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
  </div>
</template>

<style lang="scss">
.container {
  padding-top: 100px;
  h2 {
    font-size: 30px;
    font-weight: 550;
    color: #303658;
  }
  .wrapper-form {
    color: white;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #303658, $alpha: 0.70);
    border-radius: 10px;
  }
  .row {
    margin: 0 auto;
      img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 0 40px 0 40px;
      }
    .ms_card {       
      .description-wrapper {
        margin: 0 auto;
        width: 70%;
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
              font-size: 22px;
            }
          }
        }
        .services-list {
          color: #EC2B46;
          li {
            font-weight: 550;
            font-size: 18px;
          }
        }
        hr {
          width: 70%;
          margin: 0 auto;
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